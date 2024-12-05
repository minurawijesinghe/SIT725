const User = require('../models/User');
const Stats = require('../models/Stats');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        
        // Update stats
        await Stats.updateOne(
            {}, 
            { $inc: { totalUsers: 1, activeUsers: 1 } },
            { upsert: true }
        );
        
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 });
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
