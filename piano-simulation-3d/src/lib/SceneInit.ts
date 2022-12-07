import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";

export default class SceneInit {
    
    private fov: number;
    public camera:any = new THREE.PerspectiveCamera;
    public scene:any = new THREE.Scene;
    private stats: any;
    private controls: any;
    private renderer:any = new THREE.WebGLRenderer;
    private clock: any;
    private uniforms: any;
    private canvasID: any;

    constructor(fov:any = 36, camera?:any, scene?:any, stats?:number, controls?:string, renderer?:any) {
        this.fov = fov;
        this.scene = scene;
        this.stats = stats;
        this.camera = camera;
        this.controls = controls;
        this.renderer = renderer;
    }

    initScene() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );
        this.camera.position.z = 128;
        this.scene = new THREE.Scene();

        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();

        this.uniforms = {
            u_time: { type: 'f', value: 1.0 },
            colorB: { type: 'vec3', value: new THREE.Color(0xfff000) },
            colorA: { type: 'vec3', value: new THREE.Color(0xffffff) },
        };

        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById("myThreeJsCanvas") as HTMLInputElement,
            antialias: true,
        });

        const canvas = document.getElementById(this.canvasID);
        this.renderer = new THREE.WebGLRenderer({
          canvas: document.getElementById("myThreeJsCanvas") as HTMLInputElement,
          antialias: true,
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
        this.stats = Stats();
        document.body.appendChild(this.stats.dom);

        // ambient light which is for the whole scene
        let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true;
        this.scene.add(ambientLight);

        // spot light which is illuminating the chart directly
        let spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        this.scene.add(spotLight);

        //if window resize
        window.addEventListener("resize", () => this.onWindowResize(), false);
    }

    animate() {
        // requestAnimationFrame(this.animate.bind(this));
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
        this.stats.update();
        this.controls.update();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        this.uniforms.u_time.value += this.clock.getDelta();
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

}