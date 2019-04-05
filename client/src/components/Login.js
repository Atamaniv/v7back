import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    display: 'flex',    
    flexDirection: 'column',
    alignItems: 'center',    
  },
  margin: {
    margin: theme.spacing.unit,
  },
  textField: {
    width: '95%',
  },
});

class Login extends React.Component {
  state = {
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleClickQuery = () => {
    //   fetch('https://sheets.googleapis.com/v4/spreadsheets/177WKny0ncv__hMzgr8XIdyQVq4faOneowdQWkoh0VTw/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=AIzaSyAPYObgaSOBybAdQt85X4z-xkzhDpXM-Kc')
    //   .then(response => response.json()).then(data => {
    //    let batchRowValues = data.valueRanges[0].values;      
    //    const rows = [];
    //    for (let i = 1; i < batchRowValues.length; i++) {
    //      let rowObject = {};
    //      for (let j = 0; j < batchRowValues[i].length; j++) {
    //        rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
    //      }
    //      rows.push(rowObject);
    //     }      
    //     this.setState({ items: rows });
    //     console.log(this.state.items);
    //  });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          id="outlined-adornment-weight"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Логин"
          value={this.state.weight}
          onChange={this.handleChange('weight')}
          //helperText="Логин"
        />
        <TextField
          id="outlined-adornment-password"
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          type={this.state.showPassword ? 'text' : 'password'}
          label="Пароль"
          value={this.state.password}
          onChange={this.handleChange('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  style={{outline:'none'}}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={this.handleClickQuery} className={classes.button} style={{outline:'none',margin:5}}>
          Войти
        </Button>
        
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login)