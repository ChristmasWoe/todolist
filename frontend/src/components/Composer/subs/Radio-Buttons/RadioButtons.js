import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green, red, yellow } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const YellowRadio = withStyles({
    root: {
      color: yellow[400],
      '&$checked': {
        color: yellow[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

  const RedRadio = withStyles({
    root: {
      color: red[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <RedRadio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <YellowRadio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={handleChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
    </div>
  );
}