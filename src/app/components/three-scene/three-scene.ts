import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  viewChild
} from '@angular/core';

import * as THREE from 'three';

const CONFIG = {
  lineCount: 50,
  pointsPerLine: 200,

  ribbonLength: 30,
  ribbonWidth: 5,

  amplitude: 1.2,
  frequency: 1.2,
  speed: 0.4,
  twist: 1.2,

  mouseStrength: 0.9,
  mouseRadius: 2.5,
  opacity: 0.7,

  // Simulated lighting
ambientBrightness: 0.35,

lightColor: '#fcdae2',
lightIntensity: 1.3,
lightRadius: 6,

mouseLightColor: '#c1dff0',
mouseLightIntensity: 0.8,
mouseLightRadius: 2.5,

  colors: [
  '#5065A8',
  '#8662B3',
  '#A75489',
  '#DFA5BE',
  '#8DBB9D',
  '#368D99'
]
};

interface RibbonLine {
 geometry: THREE.BufferGeometry;
  positions: THREE.BufferAttribute;
  vertexColors: THREE.BufferAttribute;
  material: THREE.LineBasicMaterial;
  baseColor: THREE.Color;
  offset: number;}

@Component({
  selector: 'app-three-scene',
  imports: [],
  templateUrl: './three-scene.html',
  styleUrl: './three-scene.scss'
})
export class ThreeScene implements AfterViewInit, OnDestroy {
  private readonly canvas =
    viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  private readonly zone = inject(NgZone);

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.OrthographicCamera;

  private ribbon = new THREE.Group();
  private lines: RibbonLine[] = [];

  private animationId = 0;
  private resizeObserver?: ResizeObserver;
  private startTime = 0;

  private mouse = new THREE.Vector2();
  private targetMouse = new THREE.Vector2();
  private localMouse = new THREE.Vector3();

  private hover = 0;
  private targetHover = 0;

  private readonly lightPosition = new THREE.Vector3(4, 2, 3);

private readonly lightColor =
  new THREE.Color(CONFIG.lightColor);

private readonly mouseLightColor =
  new THREE.Color(CONFIG.mouseLightColor);

private readonly finalColor = new THREE.Color();

  ngAfterViewInit(): void {
    // Run the animation independently of Angular change detection.
    this.zone.runOutsideAngular(() => {
      this.initializeScene();
      this.createRibbon();
      this.resize();

      this.startTime = performance.now();
      this.animationId = requestAnimationFrame(this.animate);
    });
  }

  private initializeScene(): void {
    const canvas = this.canvas().nativeElement;

    this.scene = new THREE.Scene();

    this.camera = new THREE.OrthographicCamera(
      -1, 1, 1, -1, 0.1, 100
    );

    this.camera.position.z = 20;
    this.camera.updateMatrixWorld();

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });

    this.renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    this.renderer.setClearColor(0x000000, 0);

    this.ribbon.rotation.x = -0.3;
    this.ribbon.rotation.y = -0.2;
    this.ribbon.rotation.z = -0.1;

    this.scene.add(this.ribbon);

    this.resizeObserver = new ResizeObserver(this.resize);
    this.resizeObserver.observe(canvas);

    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('blur', this.onPointerLeave);
    document.addEventListener('pointerleave', this.onPointerLeave);
  }

  
private createRibbon(): void {
  const colors = CONFIG.colors.map(
    color => new THREE.Color(color)
  );

  for (let i = 0; i < CONFIG.lineCount; i++) {
    const progress = i / (CONFIG.lineCount - 1);
    const offset = (progress - 0.5) * CONFIG.ribbonWidth;

    const geometry = new THREE.BufferGeometry();

    const positions = new THREE.BufferAttribute(
      new Float32Array(CONFIG.pointsPerLine * 3),
      3
    );

    const vertexColors = new THREE.BufferAttribute(
      new Float32Array(CONFIG.pointsPerLine * 3),
      3
    );

    positions.setUsage(THREE.DynamicDrawUsage);
    vertexColors.setUsage(THREE.DynamicDrawUsage);

    geometry.setAttribute('position', positions);
    geometry.setAttribute('color', vertexColors);

    // Interpolate between adjacent colors in the palette.
    const colorPosition = progress * (colors.length - 1);
    const colorIndex = Math.floor(colorPosition);

    const nextIndex = Math.min(
      colorIndex + 1,
      colors.length - 1
    );

    const blendFactor = colorPosition - colorIndex;

    const baseColor = colors[colorIndex]
      .clone()
      .lerp(colors[nextIndex], blendFactor);

    const material = new THREE.LineBasicMaterial({
      color: '#ffffff',
      vertexColors: true,
      transparent: true,
      opacity: CONFIG.opacity,
      depthWrite: false
    });

    const line = new THREE.Line(geometry, material);

    line.frustumCulled = false;

    this.ribbon.add(line);

    this.lines.push({
      geometry,
      positions,
      vertexColors,
      material,
      baseColor,
      offset
    });
  }
}

  private updateRibbon(time: number): void {
    const mouse = this.localMouse;

    for (const line of this.lines) {
      const offset = line.offset;

      for (let i = 0; i < CONFIG.pointsPerLine; i++) {
        const progress = i / (CONFIG.pointsPerLine - 1);

        const x = (progress - 0.5) * CONFIG.ribbonLength;

        const wave = Math.sin(
          x * CONFIG.frequency + time * CONFIG.speed
        ) * CONFIG.amplitude;

        const secondaryWave = Math.cos(
          x * 0.7 - time * 0.4
        ) * 0.4;

        // Rotate the cross-section along the ribbon to create depth.
        const twistAngle =
          x * CONFIG.twist * 0.25 +
          Math.sin(time * 0.5) * 0.6;

        let y =
          wave +
          offset * Math.cos(twistAngle);

        let z =
          secondaryWave +
          offset * Math.sin(twistAngle);

        // Localized mouse influence decreases with distance.
        const dx = x - mouse.x;
        const dy = y - mouse.y;

        const distanceSquared = dx * dx + dy * dy;
        const radiusSquared =
          CONFIG.mouseRadius * CONFIG.mouseRadius;

        const influence =
          Math.exp(-distanceSquared / radiusSquared) *
          CONFIG.mouseStrength *
          this.hover;

        y += Math.sin(time * 2 + x) * influence;
        z += influence;

        line.positions.setXYZ(i, x, y, z);

        const color = this.calculateLighting(
  x,
  y,
  z,
  line.baseColor
);

line.vertexColors.setXYZ(
  i,
  color.r,
  color.g,
  color.b
);
      }

      line.positions.needsUpdate = true;
      line.vertexColors.needsUpdate = true;
    }
  }


private calculateLighting(
  x: number,
  y: number,
  z: number,
  baseColor: THREE.Color
): THREE.Color {
  const lightDx = x - this.lightPosition.x;
  const lightDy = y - this.lightPosition.y;
  const lightDz = z - this.lightPosition.z;

  const lightDistanceSquared =
    lightDx * lightDx +
    lightDy * lightDy +
    lightDz * lightDz;

  // Smooth light attenuation based on distance.
  const staticLight =
    Math.exp(
      -lightDistanceSquared /
      (CONFIG.lightRadius * CONFIG.lightRadius)
    ) * CONFIG.lightIntensity;

  const mouseDx = x - this.localMouse.x;
  const mouseDy = y - this.localMouse.y;

  const mouseDistanceSquared =
    mouseDx * mouseDx +
    mouseDy * mouseDy;

  const mouseLight =
    Math.exp(
      -mouseDistanceSquared /
      (CONFIG.mouseLightRadius * CONFIG.mouseLightRadius)
    ) * CONFIG.mouseLightIntensity * this.hover;

  // Combine ambient brightness with both light sources.
  this.finalColor
    .copy(baseColor)
    .multiplyScalar(CONFIG.ambientBrightness + staticLight);

  this.finalColor.r +=
    this.lightColor.r * staticLight * 0.2 +
    this.mouseLightColor.r * mouseLight;

  this.finalColor.g +=
    this.lightColor.g * staticLight * 0.2 +
    this.mouseLightColor.g * mouseLight;

  this.finalColor.b +=
    this.lightColor.b * staticLight * 0.2 +
    this.mouseLightColor.b * mouseLight;

  return this.finalColor;
}


  private resize = (): void => {
    const canvas = this.canvas().nativeElement;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if (!width || !height) return;

    const aspect = width / height;

    const viewHeight = 5;
    const viewWidth = viewHeight * aspect;

    this.camera.left = -viewWidth / 2;
    this.camera.right = viewWidth / 2;
    this.camera.top = viewHeight / 2;
    this.camera.bottom = -viewHeight / 2;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height, false);
// Preserve the ribbon's proportions on narrower screens.
// Crop the geometry instead of compressing it horizontally.
const referenceAspect = Math.max(aspect, 1.8);
const referenceWidth = viewHeight * referenceAspect;

this.ribbon.scale.set(
  referenceWidth * 2.0 / CONFIG.ribbonLength,
  1.3,
  1.2
);

if (width <= 900) {
  this.ribbon.position.set(0, -0.35, 0);
} else {
  this.ribbon.position.set(viewWidth * 0.12, -0.35, 0);
}
    this.ribbon.updateMatrixWorld(true);
  };

  private onPointerMove = (event: PointerEvent): void => {
    const rect =
      this.canvas().nativeElement.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    if (x < 0 || x > 1 || y < 0 || y > 1) {
      this.targetHover = 0;
      return;
    }

    this.targetMouse.set(
      x * 2 - 1,
      -(y * 2 - 1)
    );

    this.targetHover = 1;
  };

  private onPointerLeave = (): void => {
    this.targetHover = 0;
  };

  private animate = (timestamp: number): void => {
    this.animationId = requestAnimationFrame(this.animate);

    const time = (timestamp - this.startTime) / 1000;

    this.mouse.lerp(this.targetMouse, 0.08);

    this.hover = THREE.MathUtils.lerp(
      this.hover,
      this.targetHover,
      0.08
    );

    // Convert screen coordinates into approximate ribbon-local
    // coordinates so the deformation follows the cursor.
    this.localMouse.set(this.mouse.x, this.mouse.y, 0);
    this.localMouse.unproject(this.camera);
    this.localMouse.z = 0;

    this.ribbon.worldToLocal(this.localMouse);

    this.updateRibbon(time);

    this.renderer.render(this.scene, this.camera);
  };

  ngOnDestroy(): void {
    // Release listeners, animation loop and GPU resources.
    cancelAnimationFrame(this.animationId);

    this.resizeObserver?.disconnect();

    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('blur', this.onPointerLeave);
    document.removeEventListener('pointerleave', this.onPointerLeave);

    for (const line of this.lines) {
      line.geometry.dispose();
      line.material.dispose();
    }

    this.renderer?.dispose();
  }
}
