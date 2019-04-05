import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import './index.css';
import MyApp from './App';
import blue from '@material-ui/core/colors/blue';


const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: blue[300], // Весь подсвеченный цвет первичной темы
      main:  blue[500], // Весь основной цвет первичной темы
      dark:  blue[400], // Подчеркивание
      contrastText: '#fff', // Цвет обратного шрифта 
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    error: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#f00',
    },    
  },
});
const App = () => (
  <MuiThemeProvider theme={muiTheme} >
    <MyApp />
  </MuiThemeProvider>
);

ReactDOM.render(
    <App />, document.getElementById('root'));
registerServiceWorker();
