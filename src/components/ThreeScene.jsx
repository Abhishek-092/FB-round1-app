import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Dimensions
    let width = containerRef.current.clientWidth;
    let height = containerRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Add subtle ambient fog to fade elements in the distance
    scene.fog = new THREE.FogExp2('#F1F6F4', 0.015);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 32;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 1. Create Glowing Textures via Canvas
    const createGlowingNodeTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, '#FFC801'); // Primary Accent
      grad.addColorStop(0.2, 'rgba(255, 200, 1, 0.8)');
      grad.addColorStop(0.5, 'rgba(255, 153, 50, 0.3)'); // Secondary Accent
      grad.addColorStop(1, 'rgba(17, 76, 90, 0)'); // Dark primary transparent
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const createBackgroundParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      grad.addColorStop(0, 'rgba(17, 76, 90, 0.4)'); // Subtle Dark Primary
      grad.addColorStop(1, 'rgba(17, 76, 90, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 16, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(canvas);
    };

    const nodeTexture = createGlowingNodeTexture();
    const bgParticleTexture = createBackgroundParticleTexture();

    // 2. Setup Nodes (The floating intersection hubs)
    const nodeCount = 28;
    const nodes = [];
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeSpeeds = [];

    for (let i = 0; i < nodeCount; i++) {
      // Random coordinates inside a bounding box
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 15;
      
      nodes.push({ x, y, z });
      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      // Slow drift speeds
      nodeSpeeds.push({
        x: (Math.random() - 0.5) * 0.015,
        y: (Math.random() - 0.5) * 0.015,
        z: (Math.random() - 0.5) * 0.008
      });
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    
    const nodeMaterial = new THREE.PointsMaterial({
      size: 1.8,
      map: nodeTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // 3. Setup Connections (Lines between nearby nodes)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x114C5A, // Dark Primary
      transparent: true,
      opacity: 0.15,
      depthWrite: false
    });

    const updateLines = () => {
      // Clean previous lines and DISPOSE geometry to prevent GPU memory leak
      const existingLines = scene.getObjectByName('connections');
      if (existingLines) {
        existingLines.geometry.dispose(); // critical: prevent per-frame GPU memory leak
        scene.remove(existingLines);
      }

      const linePositions = [];
      
      // Calculate distances and create connections
      for (let i = 0; i < nodeCount; i++) {
        const p1 = nodes[i];
        for (let j = i + 1; j < nodeCount; j++) {
          const p2 = nodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          // Connect nodes that are close to each other
          if (dist < 14) {
            linePositions.push(p1.x, p1.y, p1.z);
            linePositions.push(p2.x, p2.y, p2.z);
          }
        }
      }

      const lineGeometry = new THREE.BufferGeometry();
      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
      lineSegments.name = 'connections';
      scene.add(lineSegments);
    };

    updateLines();

    // 4. Setup Starfield (Thousands of tiny background dust particles)
    const bgParticleCount = 800;
    const bgPositions = new Float32Array(bgParticleCount * 3);

    for (let i = 0; i < bgParticleCount; i++) {
      bgPositions[i * 3] = (Math.random() - 0.5) * 80;
      bgPositions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      bgPositions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;
    }

    const bgGeometry = new THREE.BufferGeometry();
    bgGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
    
    const bgMaterial = new THREE.PointsMaterial({
      size: 0.6,
      map: bgParticleTexture,
      transparent: true,
      opacity: 0.6,
      depthWrite: false
    });
    
    const bgPoints = new THREE.Points(bgGeometry, bgMaterial);
    scene.add(bgPoints);

    // Mouse parallax tracking
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      // Calculate normalized coordinates (-1 to 1)
      targetX = (event.clientX / window.innerWidth - 0.5) * 6;
      targetY = (event.clientY / window.innerHeight - 0.5) * 4;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Slow orbital drift of node positions
      const positions = nodePoints.geometry.attributes.position.array;
      for (let i = 0; i < nodeCount; i++) {
        // Apply velocity
        nodes[i].x += nodeSpeeds[i].x;
        nodes[i].y += nodeSpeeds[i].y;
        nodes[i].z += nodeSpeeds[i].z;

        // Bounce back from margins to keep them in frame
        if (Math.abs(nodes[i].x) > 23) nodeSpeeds[i].x *= -1;
        if (Math.abs(nodes[i].y) > 15) nodeSpeeds[i].y *= -1;
        if (Math.abs(nodes[i].z) > 10) nodeSpeeds[i].z *= -1;

        // Apply slight waves to make it organic
        const offset = i * 0.5;
        positions[i * 3] = nodes[i].x + Math.sin(time * 0.2 + offset) * 0.15;
        positions[i * 3 + 1] = nodes[i].y + Math.cos(time * 0.25 + offset) * 0.15;
        positions[i * 3 + 2] = nodes[i].z;
      }
      nodePoints.geometry.attributes.position.needsUpdate = true;

      // Recalculate connection mesh
      updateLines();

      // Subtle mouse follow (lerped camera movement for smooth parallax)
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      
      camera.position.x = currentX;
      camera.position.y = -currentY;
      camera.lookAt(0, 0, 0);

      // Rotate the background field slowly
      bgPoints.rotation.y = time * 0.005;
      bgPoints.rotation.x = time * 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      // Update pixel ratio on resize (handles moving between Retina/standard displays)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      // Dispose materials/geometries
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      nodeTexture.dispose();
      bgGeometry.dispose();
      bgMaterial.dispose();
      bgParticleTexture.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[400px] lg:min-h-[600px] absolute inset-0 select-none pointer-events-none opacity-90 transition-opacity duration-1000"
    />
  );
}
