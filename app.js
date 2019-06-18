// npm: node package manager.
/*  express: package installation.
    - listens for the request that's coming in and handles going out responses.
    => to initialize: npm init  : this will add...

    > This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.
    > See `npm help json` for definitive documentation on these fields
    and exactly what they do.
    > Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    {
        Press ^C at any time to quit.
package name: (js-frameworks)
version: (1.0.0)
description:
entry point: (app.js)
test command:
git repository: (https://github.com/PriyankkumarPatel1/JS-Frameworks.git)
keywords:
author: Priyankkumar Patel
license: (ISC)
About to write to C:\Users\pppri\OneDrive\Documents\Computer\GC\Sem 4\JS Frameworks\Practice\JS-Frameworks\package.json:

[
    "name": "js-frameworks",
    "version": "1.0.0",
    "description": "A blogging platform",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/PriyankkumarPatel1/JS-Frameworks.git"
    },
    "author": "Priyankkumar Patel",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/PriyankkumarPatel1/JS-Frameworks/issues"
    },
    "homepage": "https://github.com/PriyankkumarPatel1/JS-Frameworks#readme"
    }


    Is this OK? (yes)
]

**************************************************
npm install express --save : to save express library

*/

const express = require('express');
const app = express();  // call express() fun. and store returned value to constant variable app.
app.get('/', (req, res) => {
    // anonymous aero function that get req and send res.
    res.send(`Hey smart world!`);
});    // shows that when first arg. is get, execute the second function.
// / is used for the same directory. (home page path)

// now for about page.
app.get('/about', (req, res) => {
    res.send(`I like long watch of nature.`);
});


/* now we wants express to listen our request.*/
// syntax: port number, and callback function.
//app.listen(4000, () => console.log('Listening on port 4000.'));
// this is  causing error for heroku app, because we can't fix the port at 4000.

const port = process.env.PORT || 4000;
// process is global object created by environment. 
// if port is given by environment then store value to port or use 4000 port(default).
app.listen(port, () => console.log(`Listening on port ${port}.`));

/**
 * "start": "node app.js" added to script in package.json file, to execute this file when we write
 *      =>   npm start
 *  
 */