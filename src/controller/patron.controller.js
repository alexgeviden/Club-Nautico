import { Patron } from '../models/patron.js';

export const getPatrones = async (req, res) => {
    try {
        const patrones = await Patron.findAll();
        res.json(patrones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPatron = async (req, res) => {
    const { idepatron } = req.params;
    try {
        const patron = await Patron.findByPk(idepatron);
        if (!patron) {
            return res.status(404).json({ message: 'Patron not found' });
        }
        res.json(patron);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createPatron = async (req, res) => {
    const { nombre } = req.body;
    try {
        const newPatron = await Patron.create({ nombre });
        res.status(201).json(newPatron);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePatron = async (req, res) => {
    const { idepatron } = req.params;
    const { nombre } = req.body;
    try {
        const patron = await Patron.findByPk(idepatron);
        if (!patron) {
            return res.status(404).json({ message: 'Patron not found' });
        }
        patron.nombre = nombre;
        await patron.save();
        res.json(patron);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deletePatron = async (req, res) => {
    const { idepatron } = req.params;
    try {
        const patron = await Patron.findByPk(idepatron);
        if (!patron) {
            return res.status(404).json({ message: 'Patron not found' });
        }
        await patron.destroy();
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
