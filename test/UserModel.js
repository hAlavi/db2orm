/**
 * @fileoverview Complex model definition in db2orm
 * @example 
 * CREATE TABLE "MYSCHEMA"."USERENTITY"  (
 * "TITLE" CHAR(5 OCTETS), 
 * "FIRSTNAME" CHAR(25 OCTETS) NOT NULL , 
 * "SURNAME" CHAR(30 OCTETS) NOT NULL , 
 * "ADDRESS_L1" CHAR(30 OCTETS) WITH DEFAULT '' , 
 * "ADDRESS_L2" CHAR(30 OCTETS) WITH DEFAULT '' , 
 * "ADDRESS_L3" CHAR(30 OCTETS) WITH DEFAULT '' , 
 * "ADDRESS_L4" CHAR(30 OCTETS) WITH DEFAULT '' , 
 * "POSTCODE" CHAR(10 OCTETS) WITH DEFAULT '' , 
 * "MOBILE" CHAR(20 OCTETS) , 
 * "MARITAL_STATUS" CHAR(1 OCTETS) NOT NULL , 
 * "EMAIL" VARCHAR(254 OCTETS) , 
 * "GENDER" CHAR(1 OCTETS) NOT NULL ) 
*/

exports.UserModel = {
    name: 'User',
    model: {
        title: {
            type: String,
            length: 5,
            db2: {
                columnName: "TITLE",
                dataType: "CHAR",
                dataLength: 5,
            }
        },
        firstName: {
            type: String,
            length: 25,
            db2: {
                columnName: "FIRSTNAME",
                dataType: "CHAR",
                dataLength: 25,
                nullable: "N"
            }
        },
        lastName: {
            type: String,
            length: 30,
            db2: {
                columnName: "SURNAME",
                dataType: "CHAR",
                dataLength: 30,
                nullable: "N"
            }
        },
        address1: {
            type: String,
            length: 30,
            default: '',
            db2: {
                columnName: "ADDRESS_L1",
                dataType: "CHAR",
                dataLength: 30
            }
        },
        address2: {
            type: String,
            length: 30,
            default: '',
            db2: {
                columnName: "ADDRESS_L2",
                dataType: "CHAR",
                dataLength: 30
            }
        },
        address3: {
            type: String,
            length: 30,
            default: '',
            db2: {
                columnName: "ADDRESS_L3",
                dataType: "CHAR",
                dataLength: 30
            }
        },
        address4: {
            type: String,
            length: 30,
            default: '',
            db2: {
                columnName: "ADDRESS_L4",
                dataType: "CHAR",
                dataLength: 30
            }
        },
        postcode: {
            type: String,
            length: 10,
            default: '',
            db2: {
                columnName: "POSTCODE",
                dataType: "CHAR",
                dataLength: 10
            }
        },
        mobile: {
            type: String,
            length: 20,
            db2: {
                columnName: "MOBILE",
                dataType: "CHAR",
                dataLength: 20,
                nullable: "N"
            }
        },
        maritalStatus: {
            type: String,
            length: 1,
            db2: {
                columnName: "MARITAL_STATUS",
                dataType: "CHAR",
                dataLength: 1,
                nullable: "N"
            }
        },
        email: {
            type: String,
            length: 254,
            db2: {
                columnName: "EMAIL",
                dataType: "VARCHAR",
                dataLength: 254
            }
        },
        gender: {
            type: String,
            length: 1,
            db2: {
                columnName: "GENDER",
                dataType: "CHAR",
                dataLength: 1,
                nullable: "N"
            }
        },
    },
    options: {
        idInjection: false,
        db2: {
            table: "USERENTITY"
        }
    }
};