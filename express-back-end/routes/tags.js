const Express = require('express');
const router = Express.Router();
const { Tags } = require('../models')

// GET all tags ------ /api/stories
router.get('/', (req, res) => {
  Tags.findAll()
    .then(tag => {
      const data = {
        tag,
        message: 'Get all story'
      }
      res.send(data)
    })
    .catch((err) => console.log('err:', err))
});

router.get('/:id', (req, res) => {
  const tagId = req.params.id;
  Tags.findById(tagId)
    .then((tag) => {
      res.send(tag);
    })
    .catch((err) => console.log('err:', err));
});

router.put('/:id', (req, res) => {
  const tagId = req.params.id;
  const props = req.body.tag
  Tags.update(tagId, props)
    .then((tag) => {
      res.send(tag);
    })
    .catch((err) => console.log('err:', err));
});


router.post('/', (req, res) => {
  const props = req.body
  Tags.create(props)
    .then(tag => res.json({
      ok: true,
      message: 'tag created',
      user
    }))
    .catch((err) => console.log('err:', err))

  
});

router.delete('/:id', (req, res) => {
  const tagId = req.params.id;
  Tags.destroy(tagId)
    .then(tag => res.send(tag))
    .catch((err) => console.log('err:', err))
});

module.exports = router;
