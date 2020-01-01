import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Index from './components/index.jsx';

ReactDom.render(
    <Index />,
    document.getElementById('app')
)