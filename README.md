EdTech Assignment Tracker
A simplified EdTech platform for teachers to create assignments and students to submit them.
Features

Role-based authentication (Teacher/Student)
Teachers can create and view assignments
Students can submit assignments
View submissions for assignments
RESTful API with FastAPI
React frontend with TailwindCSS
SQLite database

Setup

Clone the repository:
git clone <repository-url>
cd edtech-assignment-tracker


Backend:
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload


Frontend:
cd frontend
npm install
npm start


Docker:
docker-compose up --build



API Documentation

Access Swagger UI at http://localhost:8000/docs

Technologies

Backend: FastAPI, SQLite, SQLAlchemy, PyJWT, Passlib
Frontend: React, TailwindCSS, Axios
Containerization: Docker, Docker Compose

Notes

SQLite database (edtech.db) is created automatically in backend/.
Default backend port: 8000
Default frontend port: 3000


-> Execution steps

1. install the all requirement modules from backend/requirements.txt

2. run the fasapi server at backend folder with 
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload