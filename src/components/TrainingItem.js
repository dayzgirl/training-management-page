import React from 'react';

const TrainingItem = ({ training, onDelete }) => {
    return (
    <div>
        <p>{training.date}</p> 
        <p>{training.trainee}</p>
        
        <button onClick={() => onDelete(training.id)}>Delete</button>
    </div>
    );
};

export default TrainingItem;
