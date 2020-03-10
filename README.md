# DB2 ORM NPM
This is a node module which extracted from loopback and integrated with all the tools and loopback components you may need.
---
## SETUP
It's going to be simple, just run :
`npm i -s db2orm`

## SAMPLE
you can run the code inside the repo by running this inside test folder : `npm run debug`
or for silent test mode : `npm run debug:silent`

Simply specify your model in a seperate file and include it in the project.

Code for create the sample model: (it will automatically generate the table if does not exist).

``` 
CREATE TABLE "MYSCHEMA"."USERENTITY"  (
 "TITLE" CHAR(5 OCTETS), 
 "FIRSTNAME" CHAR(25 OCTETS) NOT NULL , 
 "SURNAME" CHAR(30 OCTETS) NOT NULL , 
 "ADDRESS_L1" CHAR(30 OCTETS) WITH DEFAULT '' , 
 "ADDRESS_L2" CHAR(30 OCTETS) WITH DEFAULT '' , 
 "ADDRESS_L3" CHAR(30 OCTETS) WITH DEFAULT '' , 
 "ADDRESS_L4" CHAR(30 OCTETS) WITH DEFAULT '' , 
 "POSTCODE" CHAR(10 OCTETS) WITH DEFAULT '' , 
 "MOBILE" CHAR(20 OCTETS) , 
 "MARITAL_STATUS" CHAR(1 OCTETS) NOT NULL , 
 "EMAIL" VARCHAR(254 OCTETS) , 
 "GENDER" CHAR(1 OCTETS) NOT NULL )
 ```
