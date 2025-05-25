'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import {
  createScene,
  createCamera,
  createRenderer,
  setupLights,
  createGround,
  loadModel,
  cleanupScene,
  createAnimationLoop,
  setupResizeHandler
} from '../utils/threeUtils';

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    try {
      const scene = createScene();
      const camera = createCamera(width, height);
      const renderer = createRenderer(width, height);
      container.appendChild(renderer.domElement);

      setupLights(scene);
      const ground = createGround();
      scene.add(ground);

      const clock = new THREE.Clock();
      const animationLoop = createAnimationLoop(scene, camera, renderer, groupRef.current, clock);
      const cleanupResize = setupResizeHandler(container, camera, renderer);

      const handleModelLoad = (group: THREE.Group) => {
        if (!mountRef.current) return;
        scene.add(group);
        groupRef.current = group;
        
        const newAnimationLoop = createAnimationLoop(scene, camera, renderer, group, clock);
        newAnimationLoop.start();
      };

      const handleModelError = (error: unknown) => {
        console.error('Error loading model:', error);
        setError('Failed to load 3D model. Please try refreshing the page.');
      };

      loadModel('/models/credit-card.gltf', handleModelLoad, handleModelError);

      return () => {
        animationLoop.stop();
        cleanupResize();
        cleanupScene(scene, renderer, groupRef.current, container);
      };
    } catch (err) {
      console.error('Error initializing 3D scene:', err);
      setError('Failed to initialize 3D scene. Please try refreshing the page.');
    }
  }, []);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/40 rounded-lg border border-[var(--accessible-components-dark-grey)]/20">
        <div className="text-center p-4">
          <p className="text-[var(--accessible-components-dark-grey)] mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--green-hover)] transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
      }}
      role="img"
      aria-label="3D Credit Card Model"
    />
  );
}
