const Ajv = require('ajv');

const ajv = new Ajv();

const schema = {
  "type": "object",
  "properties": {
    "name": { "type": "string" },
    "age": { "type": "number" },
    "address": { "type": "string" }
  },
  "required": ["name", "age", "address"]
};

const data = {
  "name": "John Doe",
  "age": 30,
  "address": "123 Main Street, City"
};

const validate = ajv.compile(schema);
const isValid = validate(data);

if (isValid) {
  console.log("Дані валідні.");
} else {
  console.log("Помилки валідації:", validate.errors);
};