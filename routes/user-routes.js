const express = require('express');
const router = express.Router();

const userCt = require('../controllers/user-controller');

router.get( '/', userCt.getUsers);
router.post( '/', userCt.createUser);
router.get( '/:id', userCt.getUser);
router.put('/:id',userCt.updateUser);
router.delete('/:id',userCt.deleteUser);

module.exports= router;