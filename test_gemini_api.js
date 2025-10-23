const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function testGemini() {
  try {
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'models/gemini-2.5-flash' });
  const prompt = 'Say hello world in a fun way.';
  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log('Gemini API response:', response.text());
  } catch (error) {
    console.error('Gemini API test error:', error.message);
    if (error.response) {
      console.error('Gemini API response error:', error.response.data);
    }
  }
}

testGemini();
