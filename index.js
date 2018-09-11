/**
 * @fileoverview A wrapper around loopback components to expose as a fully integrated module
 */
exports.connector = require('./lib/connectors/base');
exports.db2connector = require ('./lib/connectors/db2');
exports.IBMDB = require('./lib/databases').IBMDB;
exports.DS = require('./lib/datasources');
