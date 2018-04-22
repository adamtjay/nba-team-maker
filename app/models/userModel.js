const db = require('../config/connection');


// quote is an object with props content, author, and genre_type
function createUser(user) {
  const queryP = db.one(`
    INSERT INTO users (username, password)
    VALUES ($/username/, $/password/)
    RETURNING *
    `, user
  );
  return queryP;
}


module.exports = {
  createUser
}
