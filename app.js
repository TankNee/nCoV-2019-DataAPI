var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule')
var cors = require('cors')
const nCovUtils = require('./utils/nCovInfoUtils')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spiderRouter = require('./routes/spider');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  methods:['GET','POST','OPTIONS'],
  alloweHeaders: ["Content-Type", "application/json;charset=utf-8;application/x-www-form-urlencoded"]
}))
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', indexRouter);
app.use('/admin', usersRouter);
app.use('/api', spiderRouter);

const scheduleGetData = (time) => {
  schedule.scheduleJob(`0 ${time} * * * *`, () => {
    nCovUtils.getRealTimeData(new Date().getTime()).then(res => {
      console.log('GetSuccess', new Date().toLocaleString())
      console.log('Time:', new Date().getTime())
    })

  })
}

scheduleGetData(0)
scheduleGetData(20)
scheduleGetData(40)

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-type');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   next()
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
