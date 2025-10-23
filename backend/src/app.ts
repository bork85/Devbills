import Fastify from 'fastify';
import routes from './routes';
import type { FastifyInstance } from 'fastify';
import cors from '@fastify/cors'

const app:FastifyInstance = Fastify({
    logger: true
});
app.register(cors, {
    origin: '*',
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: true,
}
    
);
app.register(routes);

export default app;