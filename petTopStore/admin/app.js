var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var productsRouter = require('./routes/products')
var salesRouter = require('./routes/sales')

// importando o cookie-session
var cookieSession = require('cookie-session')

var indexRouter = require('./routes/index');

// importando rotas de autenticação
var authRouter = require('./routes/auth');

// importando rotas da api
var apiRouter = require('./routes/api');

// importando o requireAuth middleware
const requireAuth = require('./middlewares/requireAuth');

var app = express();

app.use(cors());

// usando o cookie-session
app.use(cookieSession({
  name: 'pettopstore_session', // nome do cookie no navegador
  keys: ['chave_secreta_para_criptografia'], // chave necessária para criptografia
  maxAge: 24 * 60 * 60 * 1000, // 24 horas de duração da sessão (usuário logado)
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// usando rotas da API
app.use('/api', apiRouter);

// usando rotas de autenticação
app.use('/auth', authRouter);
// aplica o requireAuth middleware na raiz do site
app.use('/products', productsRouter); 
app.use('/sales', salesRouter);
app.use('/', [requireAuth], indexRouter);

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