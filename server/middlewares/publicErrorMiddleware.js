const publicErrorMiddleware = (err, req, res, next) => {
  if (res.locals.public !== true)
    return next(err);

  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  err.message = res.statusCode !== 404 ? "Error del servidor" : err.message;
  res.set('Content-Type', 'text/html');
  res.send(`<p class="predial__error">${err.message}</p>`);
};

module.exports = publicErrorMiddleware;
