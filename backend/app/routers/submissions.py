from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.submission import Submission
from app.models.assignment import Assignment
from app.models.user import User
from app.schemas.submission import SubmissionCreate, SubmissionOut
from app.dependencies import get_teacher_user, get_student_user
from datetime import datetime

router = APIRouter(prefix="/submissions", tags=["submissions"])

@router.post("/{assignment_id}", response_model=SubmissionOut)
def submit_assignment(assignment_id: int, submission: SubmissionCreate, db: Session = Depends(get_db), current_user: User = Depends(get_student_user)):
    db_assignment = db.query(Assignment).filter(Assignment.id == assignment_id).first()
    if not db_assignment:
        raise HTTPException(status_code=404, detail="Assignment not found")
    db_submission = Submission(assignment_id=assignment_id, student_id=current_user.id, content=submission.content, submitted_at=datetime.utcnow())
    db.add(db_submission)
    db.commit()
    db.refresh(db_submission)
    return {**db_submission.__dict__, "student_name": current_user.name}

@router.get("/{assignment_id}", response_model=list[SubmissionOut])
def view_submissions(assignment_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_teacher_user)):
    db_assignment = db.query(Assignment).filter(Assignment.id == assignment_id, Assignment.teacher_id == current_user.id).first()
    if not db_assignment:
        raise HTTPException(status_code=404, detail="Assignment not found or not authorized")
    submissions = db.query(Submission, User.name).join(User, Submission.student_id == User.id).filter(Submission.assignment_id == assignment_id).all()
    return [{"id": s.Submission.id, "assignment_id": s.Submission.assignment_id, "student_id": s.Submission.student_id, "content": s.Submission.content, "submitted_at": s.Submission.submitted_at, "student_name": s.name} for s in submissions]