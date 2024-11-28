import DSlider from './slider';
import './actions.css';

function Actions() {
  // const rollBtn = document.getElementById("rollBtn");
  // rollBtn?.addEventListener("click", () => {

  // }

  return (
    <div id="sliders">
      <DSlider min={0} max={10} diceId="d2" />
      <DSlider min={0} max={10} diceId="d4" />
      <DSlider min={0} max={10} diceId="d6" />
      <DSlider min={0} max={10} diceId="d8" />
      <DSlider min={0} max={10} diceId="d10" />
      <DSlider min={0} max={10} diceId="d20" />
      <DSlider min={0} max={10} diceId="d100" />
      <DSlider min={0} max={10} diceId="mod" />
    </div>
  );
}

export default Actions;
