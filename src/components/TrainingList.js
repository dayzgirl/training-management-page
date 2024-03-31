import React from 'react';
import TrainingItem from './TrainingItem';

const TrainingList = ({ trainings, onDelete }) => {
    return (
        <div>
            {trainings.map(training => (
                <TrainingItem key={training.id} training={training} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default TrainingList;