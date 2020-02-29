import React from 'react'
import RectDom from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'


import 'element-theme-default';
RectDom.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'))
