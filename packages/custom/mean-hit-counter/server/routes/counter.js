var Counter = require('../models/counter')

module.exports = function (MyPackage, app, auth, database) {
  // example route
  app.get('/api/counter', function (req, res, next) {
    // access db
    // increment and update it
    Counter.find({}, function (err, counters) {
      if (err) {
        console.log(err)
        res.send('Error Occurred')
      }
      console.log(counters)

      if (counters.length === 0) {
        var counter = new Counter()

        counter.count = 1

        counter.save()

        res.send(counter)
      } else {
        var value = counters[0]

        // increment the count
        counters[0].count = counters[0].count + 1

        counters[0].save(function () {
          res.json(value)
        })
      }
    })
  })
}
