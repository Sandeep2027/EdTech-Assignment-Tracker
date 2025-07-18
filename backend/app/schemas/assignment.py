from pydantic import BaseModel
from datetime import datetime

class AssignmentCreate(BaseModel):
    title: str
    description: str
    due_date: datetime

class AssignmentOut(BaseModel):
    id: int
    title: str
    description: str
    due_date: datetime
    teacher_id: int

    class Config:
        from_attributes = True