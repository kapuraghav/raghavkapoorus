'use strict'

/*
 * Defining the Package
 */
var Module = require('meanio').Module
var path = require('path')
var MeanStarter = new Module('meanStarter')

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
MeanStarter.register(function (app, system) {
  // Set views path, template engine and default layout
  app.set('views', path.join(__dirname, '/server/views'))

  MeanStarter.angularDependencies(['mean.system'])

  MeanStarter.routes(app)

  return MeanStarter
})
