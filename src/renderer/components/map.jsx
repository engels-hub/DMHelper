import DiceBox from '@3d-dice/dice-box-threejs';
import React, { useEffect } from 'react';

export default function DBox() {
  console.log(DiceBox);
  useEffect(() => {
    console.log('Window fully loaded');
    const diceBox = new DiceBox('#map', {
      theme_customColorset: {
        background: [
          '#00ffcb',
          '#ff6600',
          '#1d66af',
          '#7028ed',
          '#c4c427',
          '#d81128',
        ], // randomly assigned colors
        foreground: '#ffffff',
        material: 'metal', // metal | glass | plastic | wood
      },
      light_intensity: 1,
      gravity_multiplier: 600,
      baseScale: 100,
      strength: 2,
      onRollComplete: (results) => {
        console.log(`I've got results :>> `, results);
      },
    });
    diceBox
      .initialize()
      // eslint-disable-next-line promise/always-return
      .then(() => {
        // give code sandbox a chance to load up
        setTimeout(() => {}, 1000);
      })
      .catch((e) => console.error(e));
    const rollBtn = document.getElementById('map');
    rollBtn?.addEventListener('click', async () => {
      await diceBox.roll('1d2+1d4');
    });

    // const canvas = document.getElementById('map').children[1];
    // console.log(canvas);
    // //const ctx = canvas.getContext('2d');
    // //ctx.filter = 'blur(4px)';
  });

  return <div className="column map sunken-panel" id="map" />;
}
