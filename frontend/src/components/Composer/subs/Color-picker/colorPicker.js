import React from 'react';
import { GithubPicker } from 'react-color';
import './colorPicker.css';

class ColorPicker extends React.Component {

  render() {
    return (
      <>
        <label id="ColorPicker" for="ColorPicker">Выберите цвет</label>
        <GithubPicker name="ColorPicker" colors={['#B80000', '#DB3E00', '#FCCB00',
          '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB']} />
      </>
    )
  }
}

export default ColorPicker;