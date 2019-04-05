import React from 'react';
import Button from '@material-ui/core/Button';

// We can use inline-style
const style = {
  background: 'linear-gradient(45deg, #E91E63 20%, #00BCD4 90%)',
  borderRadius: 3,
  border: 1,
  color: 'white',
  height: 36,
  margin:'5px',
  padding: '0px 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

function InlineStyle() {
  return <Button style={style}>inline-style</Button>;
}

export default InlineStyle;
//Рабочая кнопка Material-UI