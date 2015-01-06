# JavaScript Node REPL Basics

NODE REPL / Console
-------------------

```
$ node
```

Boolean Primitive Types
-----------------------

```
> true
true
> false
false
```

Boolean Logic Operators
----------------------- 

AND

```
> true || false
true
```

OR
```
> true && false
false
```

Numbers
-------

Integer

```
> 32
32
```

Float

```
> 32.45
32.45
```

Arithmetic Operators
--------------------

Addition, multiplication, modulus

```
> 32 + 4
36
> 4 * 5
20
> 5 % 9
5
```

Strings
-------

```
> "hello"
'hello'
> 'hello'
'hello'
```

Concatenation

```
> 'hello ' + 'world'
'hello world'
```

Collection Objects
------------------

### Arrays

```
> [1,2,3,4]
> ['a', 'b', 'c']
> [1, 'go', false]
```

### Statements

```
> var odds = [1,3,5,7,9]
undefined
```

### Array Operations

```
> var odds = [1,3,5,7,9]
undefined
> odds
[1,3,5,7,9]
> odds.length
5
> odds[0]
1
> odds[1]
3
> odds[3]
7
```

### Objects

```
> { name: "Greg", city: "San Antonio"}
{ name: 'Greg', city: 'San Antonio' }
> var student = { name: "Sue", location: "US"}
undefined
> student
{ name: 'Sue', location: 'US' }
> student.name
'Sue'
> student.location
'US'
> student.enrolled = true
true
> student
{ name: 'Sue',
  location: 'US',
  enrolled: true }
> student["name"]
'Sue'
> student["location"]
```