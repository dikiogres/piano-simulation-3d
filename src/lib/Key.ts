import { Howl } from 'howler';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export default class Key {

    private note;
    private inputKey;
    private isFlat: boolean;
    private sound: any;
    private keyMesh: any;
    private keyGroup: any;

    constructor(note: string, inputKey: string, xOffset: any){
      this.note = note;
      this.inputKey = inputKey;
      this.isFlat = note.length === 3;
  
      this.sound = new Howl({
        src: [`./acoustic_grand_piano_mp3/${note}.mp3`],
      });

      if (this.isFlat) {
        const geometry = new THREE.BoxGeometry(4.5, 26, 4);
        const material = new THREE.MeshBasicMaterial({ color: '#0f0f0f' });
        this.keyMesh = new THREE.Mesh(geometry, material);
        this.keyMesh.position.z = 4;
        this.keyMesh.position.y = 7;
      } else {
        const geometry = new THREE.BoxGeometry(9, 40, 4);
        const material = new THREE.MeshStandardMaterial({ color: '#ffffff' });
        this.keyMesh = new THREE.Mesh(geometry, material);
      }

      this.keyGroup = new THREE.Group();
      this.keyGroup.position.x = xOffset;
      this.keyGroup.add(this.keyMesh);

    }
}