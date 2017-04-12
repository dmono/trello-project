var express = require('express');
var router = express.Router();
var path = require('path');
const _ = require('underscore');

var listsFilePath = path.resolve(path.dirname(__dirname), 'data/lists.json');
var listsApi = Object
    .create(require(path.resolve(path.dirname(__dirname), 'modules/JSON_crud.js')))
    .init(listsFilePath);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    lists: listsApi.tempStore.data,
  });
});

router.route('/lists')
  .get(function(req, res, next) {
    res.json(listsApi.tempStore.data);
  })
  .post(function(req, res, next) {
    let lists;
    if (Object.keys(req.body).length > 0) {
      lists = listsApi.set(req.body);
      listsApi.record();
    } else {
      lists = listsApi.tempStore;
    }

    res.json(_(lists.data).findWhere({ id: lists.lastId }));
  });

module.exports = router;
