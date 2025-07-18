# EdTech Assignment Tracker Project

## Project Overview
This project implements a simplified EdTech Assignment Tracker using FastAPI (backend), SQLite (database), and React (frontend). It supports user authentication, assignment creation, submission, and viewing, with role-based access for teachers and students.

## Project Structure
```
edtech-assignment-tracker/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── dependencies.py
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── assignment.py
│   │   │   ├── submission.py
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── user.py
│   │   │   ├── assignment.py
│   │   │   ├── submission.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── auth.py
│   │   │   ├── assignments.py
│   │   │   ├── submissions.py
│   │   ├── database.py
│   ├── requirements.txt
│   ├── Dockerfile
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthForm.jsx
│   │   │   ├── AssignmentForm.jsx
│   │   │   ├── AssignmentList.jsx
│   │   │   ├── SubmissionList.jsx
│   │   ├── App.jsx
│   │   ├── api.js
│   ├── package.json
│   ├── Dockerfile
├── docker-compose.yml
├── README.md
```

## Setup Instructions
1. **Backend**:
   - Install dependencies: `pip install -r backend/requirements.txt`
   - Run: `cd backend && uvicorn app.main:app --reload`
2. **Frontend**:
   - Install dependencies: `cd frontend && npm install`
   - Run: `npm start`
3. **Database**:
   - SQLite database (`edtech.db`) is automatically created in `backend/` on first run.
4. **Docker**:
   - Run: `docker-compose up --build`

## Backend Implementation

### requirements.txt
<xaiArtifact artifact_id="023ad1ef-3564-46be-bbbb-cd6533fcad7a" artifact_version_id="99c53a5a-2c0e-4db0-bd55-0a80c36e55ed" title="requirements.txt" contentType="text/plain">
fastapi==0.115.0
uvicorn==0.32.0
sqlalchemy==2.0.35
pyjwt==2.9.0
passlib[bcrypt]==1.7.4
python-dotenv==1.0.1