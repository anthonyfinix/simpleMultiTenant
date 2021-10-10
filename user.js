const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const User = require('./userModel');
router.get('/', async (_,res) => {
    res.json(await User.find({}));
})
router.post('/', async (req,res) => {
    try{
        let user = new User(req.body)
        user.tenantId = uuidv4();
        res.json(await user.save());
    }catch(e){
        res.json(e);
    }
})
router.delete('/', async (req,res)=>{
    res.json(await User.deleteOne({_id:req.query.id}))
})
module.exports = router;