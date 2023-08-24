// views/cli.js
const inquirer = require('inquirer');
const axios = require('axios');

async function login() {
  const answers = await inquirer.prompt([
    { type: 'input', name: 'username', message: 'Ingrese su nombre de usuario:' },
    { type: 'password', name: 'apiKey', message: 'Ingrese su API key:' }
  ]);

  try {
    const response = await axios.post('http://localhost:3000/login', answers);
    console.log(response.data.message);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data.error : 'Error en el servidor.');
  }
}

login();
