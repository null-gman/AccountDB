# accountDB

> accountDB is a program to contain all my accounts and give me a abilty to get them Effectively and efficiently .

programed in "JS" and "SQLITE3 DBMS" using ["sqlite3"](https://github.com/TryGhost/node-sqlite3) module form "npm" .

## usage

run main.js from root using nodeJS or denojs .

```
1- the program will check for file named "DataBase.db" 
2- if it there jump to -> line 5
3- if not the program will create 
4- then create an "account" TABLE in dataBase
5- then program give abilty to chose from bunch of methodes
```

if you want run the method you at just type anything and it will be start ,
else press enter with type noting it will jump to next method and repet ..

## methodes

```
- read             | select all rows or record from table and print it 
- read by id       | select specifc row by its id
- add data         | insert a new row into table
- update data      | edit specifc row arlady exist by its id
- read by category | select all row that have the same category 
```

> null-gman
