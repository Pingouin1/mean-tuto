let model_users = require('./model').model;

class Users {

  /**
   * Get all users
   * @return {Promise} [description]
   */
  static getAll(callback) {

    model_users.find().select().exec(function(err, res) {
      if(err){
        callback(err, null);
      } else{
        callback(null, {
          code: 200,
          data: res
        });
      }
    });
  }

}

module.exports = Users;
