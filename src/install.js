'use strict';

const Service = require('node-windows').Service;

const create_service = props => {
    const srv = new Service(props);

    srv.on('install', () => srv.start());

    srv.on('start',   () => console.log(`${props.name} up!`));

    srv.on('error',   () => console.log('Error:\n', arguments));

    srv.install();
};

module.exports = create_service;
