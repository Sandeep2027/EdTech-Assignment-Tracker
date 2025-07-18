from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import auth, assignments, submissions
from app.database import engine
from app.models import user, assignment, submission

app = FastAPI(title="EdTech Assignment Tracker")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables
user.Base.metadata.create_all(bind=engine)
assignment.Base.metadata.create_all(bind=engine)
submission.Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(auth.router)
app.include_router(assignments.router)
app.include_router(submissions.router)

@app.get("/")
def read_root():
    return {"message": "EdTech Assignment Tracker API"}