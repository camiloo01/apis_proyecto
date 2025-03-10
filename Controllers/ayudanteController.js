const Ayudante = require('../Models/Ayudante');

exports.obtenerTodosLosAyudantes = async (req, res) => {
  try {
    const ayudantes = await Ayudante.find();
    res.json(ayudantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearAyudante = async (req, res) => {
  try {
    const nuevoAyudante = new Ayudante(req.body);
    await nuevoAyudante.save();
    res.status(201).json(nuevoAyudante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerAyudantePorId = async (req, res) => {
  try {
    const ayudante = await Ayudante.findById(req.params.id);
    if (!ayudante) {
      return res.status(404).json({ error: 'Ayudante no encontrado' });
    }
    res.json(ayudante);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarAyudante = async (req, res) => {
  try {
    const ayudante = await Ayudante.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ayudante) {
      return res.status(404).json({ error: 'Ayudante no encontrado' });
    }
    res.json(ayudante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarAyudante = async (req, res) => {
  try {
    const ayudante = await Ayudante.findByIdAndDelete(req.params.id);
    if (!ayudante) {
      return res.status(404).json({ error: 'Ayudante no encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
