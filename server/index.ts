import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config();

const app = express();
const port = process.env.PORT || 3001;

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, phone, message } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone, message]
    );

    res.json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao salvar mensagem',
    });
  }
});

// Serve React app for all other routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
