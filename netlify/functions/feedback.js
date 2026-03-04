export async function handler(event) {

const HF_TOKEN = process.env.HF_TOKEN;
const body = JSON.parse(event.body);
const text = body.text;

const response = await fetch(
"https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2",
{
method: "POST",
headers: {
Authorization: `Bearer ${HF_TOKEN}`,
"Content-Type": "application/json"
},
body: JSON.stringify({
inputs: text
})
}
);

const result = await response.json();

return {
statusCode: 200,
body: JSON.stringify(result)
};
}