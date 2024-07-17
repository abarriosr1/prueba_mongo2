const { removeAllWhitespace } = require("../utils/utils");

const validatePredialId = (req, res, next) => {
  let { id } = req.params;
  const isPublic = res.locals.public ? res.locals.public : false;

  if (!id) {
    const error = isPublic ? "Se necesita un número de ficha" : "Predial id is needed";
    res.status(400);
    return next(new Error(error));
  }

  id = removeAllWhitespace(id);

  if (isNaN(id)) {
    const error = isPublic ? "El número de ficha debe ser numérico" : "Predial id must be numeric";
    res.status(400);
    return next(new Error(error));
  }

  req.params.id = id;
  next();
};

module.exports = validatePredialId;
