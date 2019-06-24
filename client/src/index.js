import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
 
const theme = createMuiTheme({
    typography: {
        fontFamily: '"Noto Sans KR, serif',
    },
    palette: {
        primary: {
          light: '#7986CB',
          main: '#FFA500',
          dark: '#1A237E',
          contrastText: '#eecf8f',
        },
        secondary: {
          light: '#999999',
          main: '#10234f',
          dark: '#1f1311',
          contrastText: '#eecf8f',
        },
        appBar: {
          color: 'primary'
      }
    }
})

ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
