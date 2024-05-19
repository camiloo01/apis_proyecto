const mongoose = require('mongoose');
const { Schema } = mongoose;

const beneficiarioSchema = new Schema({
  identificacion: {
    type: Number,
    required: true,
    unique: true
  },
  nombre: {
    type: String,
    required: true
  },
  telefono: {
    type: Number
  },
  correoElectronico: {
    type: String,
    required: true,
    unique: true
  },
  cantidadFamiliares: {
    type: Number,
    required: true
  }
});

const Beneficiario = mongoose.model('Beneficiario', beneficiarioSchema);

module.exports = Beneficiario;
