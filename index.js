import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Component from './Component.jsx';

const app = express(),
      port = 3000;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

let html = ReactDOMServer.renderToString(
    React.createElement(Component)
);