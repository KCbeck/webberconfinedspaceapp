import React, { useState } from 'react';
import axios from 'axios';

const AssessmentForm = () => {
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const handleInputChange = (questionId, value) => {
        setAnswers(prev => {
            const updated = [...prev];
            const index = updated.findIndex(a => a.questionId === questionId);
            if (index > -1) {
                updated[index].value = value;
            } else {
                updated.push({ questionId, value });
            }
            return updated;
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/assessment/start', { answers });
            setResult(response.data.assessmentResult);
        } catch (error) {
            console.error('Error submitting assessment:', error);
        }
    };

    return (
        <div>
            <h1>Confined Space Assessment</h1>
            <form>
                <div>
                    <label>Is the space marked? (Yes/No)</label>
                    <input
                        type="text"
                        onChange={e => handleInputChange('1', e.target.value)}
                    />
                </div>
                {/* Add more questions here */}
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            {result && <div>Permit Required: {result.permitRequired ? 'Yes' : 'No'}</div>}
        </div>
    );
};

export default AssessmentForm;
