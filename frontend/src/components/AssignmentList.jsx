import React, { useState } from 'react';

const AssignmentList = ({ assignments, onFetch, onSubmit, onViewSubmissions }) => {
  const [submissionContent, setSubmissionContent] = useState('');

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-2">Assignments</h2>
      <button onClick={onFetch} className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 mb-2">
        Fetch Assignments
      </button>
      {assignments.map(assignment => (
        <div key={assignment.id} className="p-4 border rounded shadow">
          <h3 className="font-bold">{assignment.title}</h3>
          <p>{assignment.description}</p>
          <p>Due: {new Date(assignment.due_date).toLocaleString()}</p>
          {onSubmit ? (
            <div className="mt-2">
              <textarea
                placeholder="Submission content"
                value={submissionContent}
                onChange={(e) => setSubmissionContent(e.target.value)}
                className="w-full p-2 mb-2 border rounded"
              />
              <button
                onClick={() => {
                  onSubmit(assignment.id, { content: submissionContent });
                  setSubmissionContent('');
                }}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          ) : (
            <button
              onClick={() => onViewSubmissions(assignment.id)}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2"
            >
              View Submissions
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AssignmentList;