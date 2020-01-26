var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var schedule = require('node-schedule')
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

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/spider',spiderRouter);


const scheduleGetData = (time,addtime) => {
  schedule.scheduleJob(`0 ${time} * * * *`,()=>{
    nCovUtils.getRealTimeData(addtime)
    console.log('GetSuccess',new Date().toLocaleString())
  })
}

scheduleGetData(20,Date.now())

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
