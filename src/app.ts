import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './swagger/swaggerOptions';
import routes from './routes/routes';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.static('public'));

app.use('/api', routes);

const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
