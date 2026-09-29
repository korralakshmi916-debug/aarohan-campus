import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey:"AQ.Ab8RN6K04j4mI0ReXjyrepy9qBZOWNbbcSJAYpEeLKymIl8ILQ"});

let system_prompt = `
You are a farmer friendly chatbot for a website 
You duty is to respond to a given input if it is related to farmers.
Like 
1. Well being or suggestions
2. Crop related questions or suggestions
3. Health or suggestions 
4. Crop predtictions or suggestions
5. Season predictions or suggestions
6. Soil predictions or suggestions 
7. Market cap predictions or suggestions

Rulles for responding :
- Answer only if the question is relevant to the above instructions
- If the given question is totally irrelevant to the above instructions then respond with Sorry ,I cant help you with that
- Always respond in just 4-5 lines needed or else one line is enough
'The given query is :

`


let usr_input = "Gimme code for implementing a web using htmml for calculator"




const interaction = await ai.interactions.create({
  model: "gemini-3-flash-preview",
  input: system_prompt+usr_input,
});

console.log(interaction.output_text);