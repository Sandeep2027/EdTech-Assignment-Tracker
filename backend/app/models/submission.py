from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.database import Base

class Submission(Base):
    __tablename__ = "submissions"
    id = Column(Integer, primary_key=True, index=True)
    assignment_id = Column(Integer, ForeignKey("assignments.id"))
    student_id = Column(Integer, ForeignKey("users.id"))
    content = Column(String)
    submitted_at = Column(DateTime)