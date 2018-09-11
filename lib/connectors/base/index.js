// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-connector
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';
var SG = require('strong-globalize');
//SG.SetRootDir(__dirname);

exports.Connector = require('./connector');
// Set up SqlConnector as an alias to SQLConnector
exports.SQLConnector = exports.SqlConnector = require('./sql');
exports.ParameterizedSQL = exports.SQLConnector.ParameterizedSQL;
exports.Transaction = require('./transaction');

exports.createPromiseCallback = require('./utils').createPromiseCallback;

// KeyValue helpers
exports.ModelKeyComposer = require('./model-key-composer');
exports.BinaryPacker = require('./binary-packer');
exports.JSONStringPacker = require('./json-string-packer');
