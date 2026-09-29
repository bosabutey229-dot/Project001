# StudyFlow AI

A full-stack learning platform that turns uploaded documents into summaries, flashcards, and quizzes using a React frontend, Tailwind styling, a Node.js/Express API, and PostgreSQL storage.

## Architecture

- Frontend: React + Tailwind + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- AI layer: API integration point for summaries, flashcards, and explanations
- Storage: local file upload area for PDFs and notes

## Project Structure

```text
studyflow-ai/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── docker-compose.yml
├── package.json
├── README.md
└── .gitignore
```

## Local setup

1. Install Node.js 18+ and npm.
2. Start PostgreSQL locally or run the Docker service:

```bash
cd studyflow-ai
docker compose up -d
```

3. Install dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm run dev
```

This starts:

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## Environment

Create a backend `.env` file based on `.env.example`:

```env
PORT=5000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/studyflow
JWT_SECRET=your-secret-key
OPENAI_API_KEY=your_openai_api_key_here
```

## Notes

- The backend includes a starter AI service stub and a study-pack endpoint.
- PostgreSQL schema is defined in `backend/src/db/schema.sql`.
- The frontend is a starter landing page for the product concept.
