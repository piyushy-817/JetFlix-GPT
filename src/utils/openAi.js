import OpenAI from 'openai';
import { OPEN_AI_KEY } from './Constants';
const openAiConstants = new OpenAI({
  apiKey: OPEN_AI_KEY,dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default openAiConstants