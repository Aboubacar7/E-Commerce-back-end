const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findAll({include: [{model: Product}],})
    res.status(200).json(TagData);
  } catch (err){
  res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const TagData = await Tag.findByPk( req.params.id, {include: [{model: Product}],})
    res.status(200).json(TagData);
  } catch (err){
  res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
try{
  const TagData = await Tag.create({
    product_id: req.body.product_id,
  });
  res.status(200).json(TagData);
}catch (err) {
  res.status(500).json(TagData);
}
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
