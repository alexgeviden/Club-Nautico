import {Socio} from '../models/socio.js';
import Barco from '../models/barco.js';


export const getSocios = async (req, res) => {
   try {
    const socios = await Socio.findAll({ attributes: ['idsocio' , 'nombre', 'telefono'] });
     res.json({socios});
     console.log('Estas llamando a getSocios correctamente')
   } catch (error) {
    console.log('Algo falla en getSocios')
    return res.status(500).json({message: error.message});
    
   }
}
export const getSocio = async (req, res) => {
    const {id} = req.params;
    const socio = await Socio.findByPk(id, {
        attributes: ['nombre', 'telefono'] 
    });
    res.json(socio);
}
export const createSocio = async (req, res) => {
   try {
     const {nombre , telefono} = req.body
     const newSocio = await Socio.create({
         nombre,
         telefono
     });
     console.log('Estas llamndo a createSocios correctamente')
     res.json(newSocio);
   } catch (error) {
    console.log('Algo falla en createSocio')
    return res.status(500).json({message: error.message});
    
   }
}
export const updateSocio = async (req, res) => {
    try {
        const {id} = req.params;
        const {nombre, telefono} = req.body;

        const socio = await Socio.findByPk(id);
        socio.nombre = nombre;
        socio.telefono = telefono;

        await socio.save();
        console.log('Estas llamndo a updateSocios correctamente')
        res.json(socio);
    } catch (error) {
        console.log('Algo falla en updateSocio')
        return res.status(500).json({message: error.message});}}
        
export const deleteSocio = async (req, res) => {
    try {
        const { idsocio } = req.params; // Ha de llamarse igual que en la ruta
        await Socio.destroy({
            where: {
                idsocio,
            }
        });
        console.log('Estas llamndo a deleteSocios correctamente')
        res.sendStatus(204);
    } catch (error) {
        console.log('Algo falla en deleteSocio')
        return res.status(500).json({ message: error.message });
    }
}
export const getBarcosSocio = async (req, res) => {
    
try {
            const { idsocio } = req.params;
            const barcos = await Barco.findAll({
                where: {
                    idsocio
                }
            });
            const socio = await Socio.findByPk(idsocio);
            const barcosocio = {
                barco: barcos,
                socio: socio
            }
            console.log('Estas llamndo a getBarcosSocio correctamente')
            res.json(barcosocio);
} catch (error) {
    return res.status(500).json({ message: error.message });
}
    

}
    