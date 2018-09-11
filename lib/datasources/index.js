// Copyright IBM Corp. 2011,2016. All Rights Reserved.
// Node module: loopback-datasource-juggler
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
'use strict';

var SG = require('strong-globalize');
//SG.SetRootDir(__dirname);

exports.ModelBuilder = exports.LDL = require('./model-builder.js').ModelBuilder;
exports.DataSource = exports.Schema = require('./datasource.js').DataSource;
exports.ModelBaseClass = require('./model.js');
exports.GeoPoint = require('./geo.js').GeoPoint;
exports.ValidationError = require('./validations.js').ValidationError;

Object.defineProperty(exports, 'version', {
  get: function() { return "3.23.0"; },
});

// var commonTest = './test/common_test';
// Object.defineProperty(exports, 'test', {
//   get: function() { return require(commonTest); },
// });

exports.Transaction = require('../connectors/base').Transaction;

exports.KeyValueAccessObject = require('./kvao');
