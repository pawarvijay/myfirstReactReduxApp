import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './redux/reducers';

/*Css*/
import 'react-datepicker/dist/react-datepicker.css';
import 'semantic-ui-css/semantic.min.css';
import './css/CustomStyle.css';

//For Debugging &tracking events starts
import * as remitterActions from './redux/actions/remitterActions';
import {composeWithDevTools} from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({remitterActions});
//For Debugging &tracking events Ends

//Create Store Starts
const store = createStore(rootReducer, composeEnhancers());
//Create Store Ends

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
