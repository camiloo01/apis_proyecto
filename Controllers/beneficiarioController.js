const Beneficiario = require('../Models/Beneficiario');

exports.obtenerTodosLosBeneficiarios = async (req, res) => {
  try {
    const beneficiarios = await Beneficiario.find();
    res.json(beneficiarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.crearBeneficiario = async (req, res) => {
  try {
    const nuevoBeneficiario = new Beneficiario(req.body);
    await nuevoBeneficiario.save();
    res.status(201).json(nuevoBeneficiario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerBeneficiarioPorId = async (req, res) => {
  try {
    const beneficiario = await Beneficiario.findById(req.params.id);
    if (!beneficiario) {
      return res.status(404).json({ error: 'Beneficiario no encontrado' });
    }
    res.json(beneficiario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizarBeneficiario = async (req, res) => {
  try {
    const beneficiario = await Beneficiario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!beneficiario) {
      return res.status(404).json({ error: 'Beneficiario no encontrado' });
    }
    res.json(beneficiario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.eliminarBeneficiario = async (req, res) => {
  try {
    const beneficiario = await Beneficiario.findByIdAndDelete(req.params.id);
    if (!beneficiario) {
      return res.status(404).json({ error: 'Beneficiario no encontrado' });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
