import React from 'react';
import Exercise from './Exercise';


export default function Workout (props) {

    const mappedExercises = props.exercises.map((exercise) => {
        return <Exercise 
        key={exercise.id}
        name={exercise.name}
        muscle={exercise.muscle}
        equipment={exercise.equipment}
        difficulty={exercise.difficulty}
        instruction={exercise.instruction}

        />;
    });


    return (
        <>
        <h1>This is Workout page</h1>
        { mappedExercises }
        </>
    );
};