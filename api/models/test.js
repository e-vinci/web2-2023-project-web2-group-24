const db = require('./db_conf');


module.exports.list = () => {
  const stmt_all = db.prepare("SELECT * FROM categories");
  return stmt_all.all();
};
