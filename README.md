# AccountDB

> accountDB is a program to contain all my accounts and give me an ability to get them Effectively and efficiently .

programed by "JS" and "SQLITE3 DBMS" using "nodejs" and ["sqlite3"](https://github.com/TryGhost/node-sqlite3) module form "npm" .

### usage

run "npm install" then run main.js from root folder using nodeJS or denojs .

```
1- the program will check for file named "DataBase.db" 
2- if it there a file jump to -> line 5
3- else the program will create one
4- then create an "account" TABLE in dataBase
5- then program will give you the ability to chose from bunch of methodes
```

> if you want run the method you at just type anything and press enter ,
> else press enter without  typing it will jump to the next method and repeat..

### methodes

```
- read             | select all rows or record from table and print it 
- read by id       | select specifc row by its id
- add data         | insert a new row into table
- update data      | edit specifc row arlady exist by its id
- read by category | select all row that have the same category 
```

> null-gman
