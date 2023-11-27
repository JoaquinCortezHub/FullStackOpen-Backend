const express = require('express')
const app = express();

let notes = [
	{
		id: 1,
		name: "Arto Hellas",
		number: "040-123456",
	},
	{
		id: 2,
		name: "Ada Lovelace",
		number: "39-44-5323523",
	},
	{
		id: 3,
		name: "Dan Abramov",
		number: "12-43-234345",
	},
	{
		id: 4,
		name: "Mary Poppendieck",
		number: "39-23-6423122",
	},
];

app.get('/', (request, response) => {
    response.send('<h1>Hello, World!</h1>');
});

app.get('/api/persons', (request, response) => {
    return response.json(notes);
});

app.get('/info', (request, response) => {
	const currentTime = new Date();
	const totalEntries = notes.length;

	const message = `
		<p>Phonebook has info for ${totalEntries} people.</p>
		<p>${currentTime}</p>`;

	response.send(message);
});

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});