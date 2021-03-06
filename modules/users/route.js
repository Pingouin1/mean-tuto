module.exports = function(params) {

  let router = params.router,
    middle = require('./middle');

  router.get('/api/users', (request, response) => {
    middle.getAll(function(err, data){
      if(err !== null){
        response.send(err);
      } else {
        response.status(data.code).json(data.data).end();
      }
    });
  });

  return router;
};
