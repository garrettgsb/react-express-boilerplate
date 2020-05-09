const db = require('./db');

const getNotification = (id) => {
  return db.query(`
  SELECT *
  FROM notifications
  where id = $1;
  `, [id])
    .then(res => {
      return res.rows;
    });
};

module.exports.getNotification = getNotification;

const getNotificationsByUser = (userId) => {
  return db.query(`
  SELECT *
  FROM notifications
  where user_id = $1
  `, [userId])
    .then(res => {
      return res.rows;
    });
};

module.exports.getNotificationssByUser = getNotificationsByUser;
