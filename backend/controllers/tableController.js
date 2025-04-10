const Table = require('../models/tableModel');

// Lấy danh sách bàn
const getTables = async (req, res) => {
	const tables = await Table.find();
	res.json(tables);
};

// Thêm bàn mới
const createTable = async (req, res) => {
	try {
		const newTable = new Table(req.body);
		const saved = await newTable.save();
		res.status(201).json(saved);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Xoá bàn
const deleteTable = async (req, res) => {
	try {
		await Table.findByIdAndDelete(req.params.id);
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

module.exports = { getTables, createTable, deleteTable };
