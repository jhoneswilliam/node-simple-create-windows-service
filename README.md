# Simple create Windows Service for node js

Create windows services for node scripts from the command line.

This script uses the module [node-windows](https://www.npmjs.com/package/node-windows)

## CONFIG EXAMPLE

JSON
```JSON
{
    "name": "My Service Name",
    "description": "Lorem ipsum dolor...",
    "script": "/path/of/your/script.js",
    "env": [
        { "name": "NODE_ENV", "value": "production" },
        { "name": "foo", "value": "bar" },
    ]
}
```

JavaScript
```js
'use strict';
const path = require('path');
const pkg  = require('./package.json');

module.exports = {
    name: pkg.name,
    description: pkg.description,
    script: path.join(__dirname, pkg.main),
    env: [
        { name: 'NODE_ENV', value: 'production' },
        { name: 'foo', value: 'bar' },
    ]
};
```

# HOW TO

Clone and isntall dependencies
```sh
git clone https://github.com/ortense/node-simple-create-windows-service.git
cd node-simple-create-windows-service
npm install
```

Install Service
```sh
./service.js --install /path/of/your/config.file
```

Remove service
```sh
./service.js --uninstall /path/of/your/config.file
```
