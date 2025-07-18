from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.assignment import Assignment
from app.schemas.assignment import AssignmentCreate, AssignmentOut
from app.dependencies import get_teacher_user
from app.models.user import User

router = APIRouter(prefix="/assignments", tags=["assignments"])

@router.post("/", response_model=AssignmentOut)
def create_assignment(assignment: AssignmentCreate, db: Session = Depends(get_db), current_user: User = Depends(get_teacher_user)):
    db_assignment = Assignment(**assignment.dict(), teacher_id=current_user.id)
    db.add(db_assignment)
    db.commit()
    db.refresh(db_assignment)
    return db_assignment

@router.get("/", response_model=list[AssignmentOut])
def get_assignments(db: Session = Depends(get_db)):
    return db.query(Assignment).all()