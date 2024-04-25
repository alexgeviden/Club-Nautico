import { Salidas } from '../models/salidas.js';

export const getSalidas = async (req, res) => {
    try {
        const salidas = await Salidas.findAll();
        res.json(salidas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSalida = async (req, res) => {
    const { idsalida } = req.params;
    try {
        const salida = await Salidas.findByPk(idsalida);
        if (!salida) {
            return res.status(404).json({ message: 'Salida not found' });
        }
        res.json(salida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createSalida = async (req, res) => {
    const { fecha, destino, num_matricula, idpatron } = req.body;
    try {
        const newSalida = await Salidas.create({ fecha, destino, num_matricula, idpatron });
        res.status(201).json(newSalida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateSalida = async (req, res) => {
    const { idsalida } = req.params;
    const { fecha, destino, num_matricula, idpatron } = req.body;
    try {
        const salida = await Salidas.findByPk(idsalida);
        if (!salida) {
            return res.status(404).json({ message: 'Salida not found' });
        }
        salida.fecha = fecha;
        salida.destino = destino;
        salida.num_matricula = num_matricula;
        salida.idpatron = idpatron;
        await salida.save();
        res.json(salida);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteSalida = async (req, res) => {
    const { idsalida } = req.params;
    try {
        const salida = await Salidas.findByPk(idsalida);
        if (!salida) {
            return res.status(404).json({ message: 'Salida not found' });
        }
        await salida.destroy();
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
