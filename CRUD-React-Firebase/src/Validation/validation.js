export const validation = (newProduct) => {
  let errors = {};

  if (!newProduct.name)
    errors.name = "El nombre del producto no puede estar vacío";
  if (newProduct.price <= 0)
    errors.price = "EL precio del producto tiene que ser mayor a 0";
  if (!newProduct.category)
    errors.category = "El nombre del producto no puede estar vacío";

  return errors;
};
