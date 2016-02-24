'use strict';

const Service = require('node-windows').Service;

const remove_service = props => {
    const srv = new Service(props);

    srv.on('uninstall', () => console.log(`Service ${props.name} removed!`));

    srv.uninstall();
};

module.exports = remove_service;
