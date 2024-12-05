const Stats = require('../models/Stats');

exports.getStats = async (req, res) => {
    try {
        const stats = await Stats.findOne();
        res.json(stats || { totalUsers: 0, activeUsers: 0 });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};