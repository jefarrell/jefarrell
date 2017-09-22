import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import selection from './reducers';
import App from './components/App';

require('./styles/main.scss');
let store = createStore(selection);


store.subscribe(() => {
	console.log("store state: ", store.getState());	
})

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

