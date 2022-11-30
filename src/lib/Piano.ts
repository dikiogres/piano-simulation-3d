import * as THREE from 'three';

export default class Piano {

    private pianoGroup: any;

    constructor() {
        this.pianoGroup = new THREE.Group(); 
    }

    getPianoGroup() {
        return this.pianoGroup;
    }
}