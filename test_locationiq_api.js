const axios = require('axios');
require('dotenv').config();

const LOCATIONIQ_API_KEY = process.env.LOCATIONIQ_API_KEY;
const testQuery = 'museum in Paris';

async function testLocationIQ() {
  try {
    const response = await axios.get('https://us1.locationiq.com/v1/search.php', {
      params: {
        key: LOCATIONIQ_API_KEY,
        q: testQuery,
        format: 'json',
        limit: 5
      }
    });
    console.log('LocationIQ API response:', response.data);
  } catch (error) {
    console.error('LocationIQ API test error:', error.message);
    if (error.response) {
      console.error('LocationIQ API response error:', error.response.data);
    }
  }
}

testLocationIQ();
