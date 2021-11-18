import axios from 'axios'

async function getCustomerService() {
  try {
    const response = await axios.get('http://localhost:3001/customers');
    // console.log(response.data);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

function addCustomerService(customer) {
  try {
    axios.post('http://localhost:3001/customers', customer);
  } catch(error) {
    console.log(error);
  }
}

function addPreCustomer(customer) {
  try {
    axios.post('http://localhost:3001/preCustomer', customer);
  } catch(error) {
    console.log(error);
  }
}

async function getPreCustomer() {
  try {
    const response = await axios.get('http://localhost:3001/preCustomer');
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

async function getCustomerDetailsService(username) {
  try {
    const response = await axios.get(`http://localhost:3001/customers?username=${username}`);
    return response.data;
  } catch(error) {
    console.log(error);
  }
}

export { getCustomerService, addCustomerService, getCustomerDetailsService, addPreCustomer, getPreCustomer }