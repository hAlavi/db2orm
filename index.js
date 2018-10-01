/**
 * @fileoverview A wrapper around loopback components to expose as a fully integrated module
 */
const connector = require('./lib/connectors/base');
const db2connector = require ('./lib/connectors/db2');
const IBMDB = require('./lib/databases').IBMDB;
const DS = require('./lib/datasources');
const DataSource = DS.datasource;

module.exports = {
    connector,
    db2connector,
    IBMDB,
    DS,
    DataSource
}