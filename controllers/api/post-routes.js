const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', (req, res) => {
  Post.findAll({
    include: {
      model: User,
      attributes: ['username']
    }
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Post.findOne({
      where: {
        id: req.params.id
      },
      include: {
        model: User,
        attributes: ['username']
      }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Post.create(req.body, {
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if(!dbPostData) {
      res.status(404).json({ message: 'There is no post with that id.' });
      return;
    }
    res.json(dbPostData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbPostData => {
    if(!dbPostData) {
      res.status(404).json({ message: 'There is no post with that id.'})
    }
    res.json(dbPostData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;