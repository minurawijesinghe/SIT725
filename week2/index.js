const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swaggerConfig');

const app = express();


// Middleware to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.send('Hello World! this is an calculator app to add, subtract, multiply and divide two numbers');
});

/**
 * @swagger
 * /add:
 *   get:
 *     summary: Add two numbers
 *     description: Returns the sum of two numbers passed as query parameters.
 *     parameters:
 *       - in: query
 *         name: a
 *         schema:
 *           type: integer
 *         required: true
 *         description: First number to add
 *       - in: query
 *         name: b
 *         schema:
 *           type: integer
 *         required: true
 *         description: Second number to add
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Invalid input
 */
app.get('/add', (req, res) => {
    // Parse query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input: Both a and b must be valid numbers.');
    }

    // Perform the addition
    const result = a + b;
    // Send the result
    res.send(`${a} + ${b} = ` + result);
});

/**
 * @swagger
 * /subtract:
 *   get:
 *     summary: Subtract two numbers
 *     description: Returns the difference of two numbers passed as query parameters.
 *     parameters:
 *       - in: query
 *         name: a
 *         schema:
 *           type: integer
 *         required: true
 *         description: First number
 *       - in: query
 *         name: b
 *         schema:
 *           type: integer
 *         required: true
 *         description: Second number
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Invalid input
 */
app.get('/subtract', (req, res) => {
    // Parse query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input: Both a and b must be valid numbers.');
    }

    // Perform the subtraction
    const result = a - b;
    // Send the result
    res.send(`${a} - ${b} = ` + result);
});

/**
 * @swagger
 * /addPost:
 *   post:
 *     summary: Add two numbers
 *     description: Accepts two numbers in the request body and returns their sum.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *                 description: First number
 *               b:
 *                 type: number
 *                 description: Second number
 *             required:
 *               - a
 *               - b
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *                   description: The sum of the two numbers
 *       400:
 *         description: Invalid input
 */
app.post('/addPost', (req, res) => {
    const { a, b } = req.body;

    // Validate inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be valid numbers.' });
    }

    // Perform the addition
    const result = a + b;

    // Send the response
    res.json({ result });
});

/**
 * @swagger
 * /subtractPost:
 *   post:
 *     summary: Subtract two numbers
 *     description: Accepts two numbers in the request body and returns their difference.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               a:
 *                 type: number
 *                 description: First number
 *               b:
 *                 type: number
 *                 description: Second number
 *             required:
 *               - a
 *               - b
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: number
 *                   description: The difference of the two numbers
 *       400:
 *         description: Invalid input
 */
app.post('/subtractPost', (req, res) => {
    const { a, b } = req.body;

    // Validate inputs
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Both a and b must be valid numbers.' });
    }

    // Perform the subtraction
    const result = a - b;

    // Send the response
    res.json({ result });
});

/**
 * @swagger
 * /multiply:
 *   get:
 *     summary: Multiply two numbers
 *     description: Returns the product of two numbers passed as query parameters.
 *     parameters:
 *       - in: query
 *         name: a
 *         schema:
 *           type: integer
 *         required: true
 *         description: First number
 *       - in: query
 *         name: b
 *         schema:
 *           type: integer
 *         required: true
 *         description: Second number
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Invalid input
 */
app.get('/multiply', (req, res) => {
    // Parse query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input: Both a and b must be valid numbers.');
    }

    // Perform the multiplication
    const result = a * b;
    // Send the result
    res.send(`${a} * ${b} = ` + result);
});


/**
 * @swagger
 * /divide:
 *   get:
 *     summary: Divide two numbers
 *     description: Returns the result of dividing two numbers passed as query parameters.
 *     parameters:
 *       - in: query
 *         name: a
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dividend
 *       - in: query
 *         name: b
 *         schema:
 *           type: integer
 *         required: true
 *         description: Divisor
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *       400:
 *         description: Invalid input
 */
app.get('/divide', (req, res) => {
    // Parse query parameters
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // Validate inputs
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input: Both a and b must be valid numbers.');
    }

    // Perform the division
    const result = a / b;
    // Send the result
    res.send(`${a} / ${b} = ` + result);
});





// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000`');
    console.log('Swagger docs available at http://localhost:3000/api-docs');
});