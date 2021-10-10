const router = require('express').Router();
router.get('/', async (req, res) => {
    res.json(await req.db.models.Item.find({}));
})
router.post('/', async (req, res) => {
    try {
        let item = new req.db.models.Item({ name: req.body.name })
        res.json(await item.save());
    } catch (e) {
        res.json(e);
    }
})
router.delete('/', async (req, res) => {
    res.json(await req.db.models.Item.deleteOne({ _id: req.query.id }))
})
module.exports = router;