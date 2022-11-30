import * as THREE from 'three';

import Key from './Key';

export default class Piano {

    private pianoGroup: any;
    private flatKeys: any;
    private naturalKeys: any;

    constructor() {
        this.flatKeys = [

        ];
      
        this.naturalKeys = [

        ];

        this.pianoGroup = new THREE.Group(); 
    }

    getPianoGroup() {
        return this.pianoGroup;
    }
}