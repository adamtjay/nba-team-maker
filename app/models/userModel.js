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

function updateUserName(user) {       // obj has id attached in body
  const queryP = db.one(`
    UPDATE users
    SET username = $/username/, password = $/password/
    WHERE userid = $/userid/
    RETURNING *
    `, user
  );
  return queryP;
}

module.exports = {
  createUser,
  updateUserName
}
