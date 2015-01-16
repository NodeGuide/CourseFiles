# Generator

Install express globaly.

```
$ npm install express -g
```

Note: This used to be how you would install the express generator.  Now this only means you don't have to install express in your directory.  You'll still need it as a requirement when uploading.

New install of express generator

```
$ npm install -g express-generator
```

Note: sessions no longer supported?

New App
-------

```
$ express --ejs myapp
```

Note: some new folders:
  bin/www
  views/error.ejs

Note: express is not installed globally now, if running the server it will error.  

Install dependencies 

```
$ npm install
```

Note: node app.js no longer works, app.js is decoupled from app.  npm start still works. 

```
$ node ./bin/www
or 
$ npm start
```

Note: modules and middleware have changed slightly, but not significant.  Listen is now in another file

Note: Routes now include router.  Similar syntax, but different theory.

Nicks List
----------

Nicks list generated application.  Only exists in express 3.0.

Exists here:
https://github.com/HotSauceJS/NicksList