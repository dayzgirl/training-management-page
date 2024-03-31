import React, { useState } from 'react';


const TrainingForm = ({ onSubmit }) => {
    const [training, setTraining] = useState({
        date: '',
        trainee: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setTraining({ ...training, [name]: value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(training);
    setTraining({ date: '', trainee: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="date" value={training.date} onChange={handleChange} placeholder="Date" />
        <input type="text" name="trainee" value={training.trainee} onChange={handleChange} placeholder="Trainee" />
        <button type="submit">Submit</button>
        </form>
        );
};

export default TrainingForm;
