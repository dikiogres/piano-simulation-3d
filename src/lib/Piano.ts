import * as THREE from 'three';

import Key from './Key';

export default class Piano {

    private pianoGroup: any;
    private flatKeys: any;
    private naturalKeys: any;

    constructor() {
        this.flatKeys = [
            new Key('Db3', '2', 5),
            new Key('Eb3', '3', 15),
            new Key('Gb3', '5', 35),
            new Key('Ab3', '6', 45),
            new Key('Bb3', '7', 55),
      
            new Key('Db4', 's', 75),
            new Key('Eb4', 'd', 85),
            new Key('Gb4', 'g', 105),
            new Key('Ab4', 'h', 115),
            new Key('Bb4', 'j', 125),

        ];
      
        this.naturalKeys = [

        ];

        this.pianoGroup = new THREE.Group(); 
    }

    getPianoGroup() {
        return this.pianoGroup;
    }
}