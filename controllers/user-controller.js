const userCtrl = {};
const User = require('../models/user');

userCtrl.getUsers= async(req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.getUser= async(req, res)=>{
   const userId= await User.findById(req.params.id);
   res.json(userId);
};


userCtrl.createUser = async (req, res)=>{
    const vars = req.body;
    const user= new User({
        username: req.body.username,
        pass : req.body.pass,
        type: req.body.type,
        name: req.body.name
    });
    await user.save().then(data=>res.json({
        'status' : 'user Saved',data,vars
    })).catch(()=>res.json({
        'status' : 'Error add User',vars
    }));
    
},

userCtrl.updateUser = async (req, res)=>{
    
    const {id} = req.params;
    const user= {
        username: req.body.username,
        pass : req.body.pass,
        type: req.body.type,
        name: req.body.name
    };

    await User.findByIdAndUpdate(id, {$set: user}, {new:true});

    res.json({status : 'User Updated'});
};

userCtrl.deleteUser =async (req, res)=>{
    await User.findByIdAndRemove(req.params.id);
    res.json({status : 'User Deleted'});
}

module.exports= userCtrl;