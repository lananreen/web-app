const db = require('../database/databaseSetup');

const Item = {
    getAll: (callback) => {
        db.all('SELECT * FROM items', [], callback);
    },
    create: (data, callback) => {
        const { name, description } = data;
        db.run('INSERT INTO items (name, description) VALUES (?, ?)', [name, description], callback);
    },
    update: (id, data, callback) => {
        const { name, description } = data;
        db.run('UPDATE items SET name = ?, description = ? WHERE id = ?', [name, description, id], callback);
    },
    patch: (id, data, callback) => {
        const fields = Object.keys(data).map((key) => `${key} = ?`).join(', ');
        const values = Object.values(data);
        db.run(`UPDATE items SET ${fields} WHERE id = ?`, [...values, id], callback);
    },
    delete: (id, callback) => {
        db.run('DELETE FROM items WHERE id = ?', [id], callback);
    }
};

module.exports = Item;
