import React from 'react';
import './App.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import colorPickerOptions from "../ColorPicker/colorPickerOptions"

export const App = () => {
  return (
    <div className="Container">
      <ColorPicker options={colorPickerOptions} />
    </div>
  );
};
