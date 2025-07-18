from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.database import Base

class Assignment(Base):
    __tablename__ = "assignments"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    due_date = Column(DateTime)
    teacher_id = Column(Integer, ForeignKey("users.id"))