import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const createScene = () => {
  const scene = new THREE.Scene();
  scene.background = null;
  return scene;
};

export const createCamera = (width: number, height: number) => {
  const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
  camera.position.set(0, 0, 5);
  return camera;
};

export const createRenderer = (width: number, height: number) => {
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
  });
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  return renderer;
};

export const setupLights = (scene: THREE.Scene) => {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 20;
  directionalLight.shadow.camera.left = -5;
  directionalLight.shadow.camera.right = 5;
  directionalLight.shadow.camera.top = 5;
  directionalLight.shadow.camera.bottom = -5;
  scene.add(directionalLight);
};

export const createGround = () => {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.ShadowMaterial({ opacity: 0.2 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;
  return ground;
};

export const loadModel = (
  path: string,
  onLoad: (model: THREE.Group) => void,
  onError: (error: unknown) => void
) => {
  const loader = new GLTFLoader();
  loader.load(
    path,
    (gltf) => {
      const model = gltf.scene;

      const box = new THREE.Box3().setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2 / maxDim;
      model.scale.multiplyScalar(scale);

      model.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      const group = new THREE.Group();
      group.add(model);
      onLoad(group);
    },
    undefined,
    onError
  );
};

export const cleanupScene = (
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  group: THREE.Group | null,
  container: HTMLElement
) => {
  if (group) {
    scene.remove(group);
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (child.material instanceof THREE.Material) {
          child.material.dispose();
        } else if (Array.isArray(child.material)) {
          child.material.forEach(material => material.dispose());
        }
      }
    });
  }
  
  if (container.contains(renderer.domElement)) {
    container.removeChild(renderer.domElement);
  }
  
  renderer.dispose();
};

export const createAnimationLoop = (
  scene: THREE.Scene,
  camera: THREE.Camera,
  renderer: THREE.WebGLRenderer,
  group: THREE.Group | null,
  clock: THREE.Clock
) => {
  let frameId: number;
  let isAnimating = true;

  const animate = () => {
    if (!isAnimating) return;
    
    frameId = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    if (group) {
      group.position.y = Math.sin(elapsed * 1.5) * 0.06;
      group.rotation.y = elapsed * 0.2;
    }

    renderer.render(scene, camera);
  };

  const start = () => {
    clock.start();
    animate();
  };

  const stop = () => {
    isAnimating = false;
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
    clock.stop();
  };

  return { start, stop };
};

export const setupResizeHandler = (
  container: HTMLElement,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) => {
  const resize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  const observer = new ResizeObserver(resize);
  observer.observe(container);

  return () => observer.disconnect();
}; 