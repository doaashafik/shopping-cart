let yup = require('yup');
 
export let schema = yup.object().shape({
  address: yup.string().required(),
  phone: yup.number().required().max(11),
  email: yup.string().email(),
});