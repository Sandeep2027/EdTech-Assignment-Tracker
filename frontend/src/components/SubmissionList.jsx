import React from 'react';

const SubmissionList = ({ submissions }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Submissions</h2>
      {submissions.map(sub => (
        <div key={sub.id} className="p-4 border rounded shadow">
          <p><strong>Student:</strong> {sub.student_name}</p>
          <p><strong>Content:</strong> {sub.content}</p>
          <p><strong>Submitted:</strong> {new Date(sub.submitted_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default SubmissionList;