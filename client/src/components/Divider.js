import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import './Divider.css'

const styles = {
  marginLeft: 20,
  color: '#0F0',
  width: 300,
  errorStyle: {
    color: 'red',
  }
};

const DividerExampleForm = () => (
<div>
  <div className="tag-container">
      <div className="tag-container_element">
        <TextField  />
          <br/> 
      </div>
</div>  
</div>
);

export default withStyles(styles)(DividerExampleForm);
