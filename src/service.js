#!/usr/bin/env node

'use strict';

const path      = require('path');
const program   = require('commander');
const install   = require('./install');
const uninstall = require('./uninstall');

program
    .version('0.0.1')
    .option('-i, --install [config_file]', 'install service by config json file.')
    .option('-u, --uninstall [config_file]', 'uninstall service by config json file.')
    .parse(process.argv);


const execute = (action, config_file_path) => {
    if (config_file_path) {
        const config_file = require(path.resolve(config_file_path));
        action(config_file);
    }
}

if (program.install) execute(install, program.install);
else if (program.uninstall) execute(uninstall, program.uninstall);
else program.help();
