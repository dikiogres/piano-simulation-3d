import { useEffect } from 'react';

import SceneInit from './lib/SceneInit';
import Piano from './lib/Piano';

function App() {

  let gui;

  const initGui = async () => {
    const dat = await import("dat.gui");
    gui = new dat.GUI();
  };


  useEffect(() => {
    (
      async () => {
        const test = new SceneInit('myThreeJsCanvas');
        test.initScene();
        test.animate();

        const p = new Piano();
        test.scene.add(p.getPianoGroup());

        await initGui();

        const onKeyDown = (event) => {
          if (event.repeat) {
            return;
          }
          p.maybePlayNote(event.key);
        };

        const onKeyUp = (event) => {
          p.maybeStopPlayingNote(event.key);
        };

        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('keydown', onKeyDown);

        return () => {
          window.removeEventListener('keyup', onKeyUp);
          window.removeEventListener('keydown', onKeyDown);
        };
      }
    )();

  });

  return (
    <div>
      <canvas id="myThreeJsCanvas"></canvas>
    </div>
  );
}

export default App;
