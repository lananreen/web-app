const Item = require('../models/itemModel');

exports.getAllItems = (req, res) => {
    Item.getAll((err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.render('index', { items: rows });
    }); 
};

exports.addItem = (req, res) => {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    Item.create({ name, description }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.redirect('/');
    });
};

exports.updateItem = (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    Item.update(id, { name, description }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.redirect('/');
    });
};

exports.patchItem = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Item.patch(id, data, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.redirect('/');
    });
};

exports.deleteItem = (req, res) => {
    const { id } = req.params;
    Item.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.redirect('/');
    });
};
