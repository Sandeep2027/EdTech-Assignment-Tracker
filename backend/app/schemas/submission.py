from pydantic import BaseModel
from datetime import datetime

class SubmissionCreate(BaseModel):
    content: str

class SubmissionOut(BaseModel):
    id: int
    assignment_id: int
    student_id: int
    content: str
    submitted_at: datetime
    student_name: str

    class Config:
        from_attributes = True