/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

export interface DSliderProps {
  diceId: string;
  min: number;
  max: number;
}

function DSlider({ diceId, min, max }: DSliderProps) {
  const [value, setValue] = useState(1); // Initialize the value to 5

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value)); // Update the state when range changes
  };

  return (
    <div className="field-row">
      <label htmlFor={diceId}>{diceId}</label>
      <input
        id={diceId}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleRangeChange}
      />
      <input disabled id={`${diceId}Box`} type="text" value={value} size={4} />
    </div>
  );
}

export default DSlider;
