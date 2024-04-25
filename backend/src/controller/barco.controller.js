import { Barco } from '../models/barco.js';

export const getBarcos = async (req, res) => {
    try {
        const barcos = await Barco.findAll();
        res.json({ barcos });
        console.log('Estás llamando a getBarcos correctamente');
    } catch (error) {
        console.log('Algo falla en getBarcos');
        return res.status(500).json({ message: error.message });
    }
};

export const getBarco = async (req, res) => {
    const { num_matricula } = req.params;
    try {
        const barco = await Barco.findByPk(num_matricula);
        
        console.log('Estás llamando a getBarco correctamente');
        res.json(barco);
    } catch (error) {
        console.log('Algo falla en getBarco');
        return res.status(500).json({ message: error.message });
    }
};

export const createBarco = async (req, res) => {
    try {
        const { num_matricula, nombre, amarre, idsocio } = req.body;
        const newBarco = await Barco.create({
            num_matricula,
            nombre,
            amarre,
            idsocio
        });
        console.log('Estás llamando a createBarco correctamente');
        res.json(newBarco);
    } catch (error) {
        console.log('Algo falla en createBarco');
        return res.status(500).json({ message: error.message });
    }
};

export const updateBarco = async (req, res) => {
    try {
        const { num_matricula } = req.params;
        const { nombre, amarre, idsocio } = req.body;

        const barco = await Barco.findByPk(num_matricula);
        barco.nombre = nombre;
        barco.amarre = amarre;
        barco.idsocio = idsocio;

        await barco.save();
        console.log('Estás llamando a updateBarco correctamente');
        res.json(barco);
    } catch (error) {
        console.log('Algo falla en updateBarco');
        return res.status(500).json({ message: error.message });
    }
};

export const deleteBarco = async (req, res) => {
    try {
        const { num_matricula } = req.params;
        await Barco.destroy({
            where: {
                num_matricula: num_matricula
            }
        });
        console.log('Estás llamando a deleteBarco correctamente');
        res.sendStatus(204);
    } catch (error) {
        console.log('Algo falla en deleteBarco');
        return res.status(500).json({ message: error.message });
    }
};
