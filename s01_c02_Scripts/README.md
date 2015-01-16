# JavaScript Node Scripts

File System
-----------

Make a sample code directory, interact with filesystem

```
$ mkdir -p BeginningNode/Math
$ cd BeginningNode/Math
$ touch math.js
$ ls
math.js
$ open .
$ subl math.js
```

Running Scripts
---------------

`BeginningNode/Math/`[math.js](BeginningNode/Math/math.js)

```
$ node math.js
12
```

`BeginningNode/Math/` [math02.js](BeginningNode/Math/math02.js)

```
$ node math02.js
20
```


Reading Arguments
-----------------

`BeginningNode/Math/` [math03.js](BeginningNode/Math/math03.js)

```
$ node math03.js
[ 'node',
  '/Users/gregcerveny/NodeCourse/SampleCode/s01_c02_Scripts/BeginningNode/Math/math03.js' ]
20
```

```
$ node math03.js 2 3
[ 'node',
  '/Users/gregcerveny/NodeCourse/SampleCode/s01_c02_Scripts/BeginningNode/Math/math03.js',
  '2',
  '3' ]
20
```

Passing Arguments
-----------------

`BeginningNode/Math/` [math04.js](BeginningNode/Math/math03.js)

```
$ node math04.js 2 3
6
$ node math04.js 3 4
12
$ node math04.js 4 5
20
$ node math04.js 5 6
30
```

Node Documentation
------------------

[process.argv docs](http://nodejs.org/api/process.html#process_process_argv)