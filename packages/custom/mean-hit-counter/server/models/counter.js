'use strict'

/**
 * Module dependencies.
 */
var mongoose = require('mongoose')
var Schema = mongoose.Schema

/**
 * Article Schema
 */
var CounterSchema = new Schema({
  count: {
    type: Number,
    default: 0
  }
})

var Counter = mongoose.model('Counter', CounterSchema)

// make this available to our users in our Node applications
module.exports = Counter

