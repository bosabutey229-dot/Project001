import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import learningRoutes from './routes/learningRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'studyflow-ai-api' });
});

app.use('/api', learningRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Server error', error: err.message });
});

export default app;
