import Joi from "joi";

const facturaSchema = Joi.object({
  numero: Joi.number().required(),
  tipo: Joi.string().valid("A", "B", "C").required(),
  monto: Joi.number().positive().required(),
  estado: Joi.string().min(3).required(),
});

export default { facturaSchema };
