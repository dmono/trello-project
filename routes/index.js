var express = require('express');
var router = express.Router();
var path = require('path');
const _ = require('underscore');
var moduleFile = 'modules/JSON_crud.js';

var listsFilePath = path.resolve(path.dirname(__dirname), 'data/lists.json');
var listsApi = Object
    .create(require(path.resolve(path.dirname(__dirname), moduleFile)))
    .init(listsFilePath);

var cardsFilePath = path.resolve(path.dirname(__dirname), 'data/cards.json');
var cardsApi = Object
    .create(require(path.resolve(path.dirname(__dirname), moduleFile)))
    .init(cardsFilePath);

var commentsFilePath = path.resolve(path.dirname(__dirname), 'data/comments.json');
var commentsApi = Object
    .create(require(path.resolve(path.dirname(__dirname), moduleFile)))
    .init(commentsFilePath);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    lists: listsApi.tempStore.data,
    cards: cardsApi.tempStore.data,
    comments: commentsApi.tempStore.data,
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

router.route('/lists/:id')
  .put(function(req, res, next) {
    listsApi.put(req.body);
    listsApi.record();
    res.status(200).end();
  })
  .delete(function(req, res, next) {
    const id = req.params.id;
    listsApi.delete(id);
    listsApi.record();
    res.status(200).end();
  });

router.route('/cards')
  .get(function(req, res, next) {
    res.json(cardsApi.tempStore.data);
  })
  .post(function(req, res, next) {
    let cards;
    if (Object.keys(req.body).length > 0) {
      cards = cardsApi.set(req.body);
      cardsApi.record();
    } else {
      cards = listsApi.tempStore;
    }

    res.json(_(cards.data).findWhere({ id: cards.lastId }));
  });

router.route('/cards/:id')
  .put(function(req, res, next) {
    cardsApi.put(req.body);
    cardsApi.record();
    res.status(200).end();
  })
  .delete(function(req, res, next) {
    const id = req.params.id;
    cardsApi.delete(id);
    cardsApi.record();
    res.status(200).end();
  });

router.route('/comments')
  .get(function(req, res, next) {
    res.json(commentsApi.tempStore.data);
  })
  .post(function(req, res, next) {
    let comments;
    if (Object.keys(req.body).length > 0) {
      comments = commentsApi.set(req.body);
      commentsApi.record();
    } else {
      comments = commentsApi.tempStore;
    }

    res.json(_(comments.data).findWhere({ id: comments.lastId }));
  });

router.route('/comments/:id')
  .put(function(req, res, next) {
    commentsApi.put(req.body);
    commentsApi.record();
    res.status(200).end();
  })
  .delete(function(req, res, next) {
    const id = req.params.id;
    commentsApi.delete(id);
    commentsApi.record();
    res.status(200).end();
  });

module.exports = router;
