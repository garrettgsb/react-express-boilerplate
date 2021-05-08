import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

const exercises = [
  {
    id: 1,
    muscleGroupId: 1,
    name: "Push Ups",
    picture: "https://i.imgur.com/LpaY82x.png",
    exerciseInfo:
      "A push-up is a common calisthenics exercise beginning from the prone position. By raising and lowering the body using the arms, push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole.",
    video: "https://www.youtube.com/watch?v=IODxDxX7oi4",
    timeForOneRep: 2500,
    numOfRecommendedReps: 15,
    intensity: 3,
    rating: 5,
  },
  {
    id: 2,
    muscleGroupId: 2,
    name: "Squats",
    picture: "https://i.imgur.com/Nmx0Qxo.png",
    exerciseInfo:
      "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up.",
    video: "https://www.youtube.com/watch?v=X0qC1k0Zi6k",
    timeForOneRep: 3500,
    numOfRecommendedReps: 20,
    intensity: 5,
    rating: 5,
  },
  {
    id: 3,
    muscleGroupId: 2,
    name: "Calf Raises",
    picture: "https://i.imgur.com/T2WwVfS.png",
    exerciseInfo:
      "Double-Leg Calf Raise. Calf raises are the classic calf-strengthening exercise. They use your body weight to strengthen and tone the gastrocnemius and soleus.",
    video: "https://www.youtube.com/watch?v=-M4-G8p8fmc",
    timeForOneRep: 1000,
    numOfRecommendedReps: 30,
    intensity: 2,
    rating: 3,
  },
  {
    id: 4,
    muscleGroupId: 3,
    name: "Scissors",
    picture: "https://i.imgur.com/FK8V841.jpg",
    exerciseInfo:
      "The scissor kick exercise works your core muscles, glutes, quads and adductors. Engaging your core muscles is what allows you to “flutter” your legs up and down. ",
    video: "https://www.youtube.com/watch?v=WoNCIBVLbgY",
    timeForOneRep: 1000,
    numOfRecommendedReps: 20,
    intensity: 2,
    rating: 3,
  },
  {
    id: 5,
    muscleGroupId: 2,
    name: "Split Squat",
    picture: "https://i.imgur.com/twYrpay.jpg",
    exerciseInfo:
      "an assisted one-legged squat where the non-lifting leg is rested on the ground a few steps behind the lifter, as if it were a static lunge.",
    video: "https://www.youtube.com/watch?v=9Sk__yZ2DQY",
    timeForOneRep: 2500,
    numOfRecommendedReps: 15,
    intensity: 4,
    rating: 5,
  },
];

const workouts = [
  {
    id: 1,
    name: "Angry Hulk",
    exercises: [1, 2, 3],
  },
  {
    id: 2,
    name: "Jedi Master",
    exercises: [4, 5],
  },
];

const workoutExercises = [
  {
    id: 1,
    exerciseId: 1,
    workoutId: 1,
    numOfSets: 3,
    numberOfReps: 20,
  },
  {
    id: 2,
    exerciseId: 2,
    workoutId: 1,
    numOfSets: 4,
    numberOfReps: 25,
  },
  {
    id: 3,
    exerciseId: 3,
    workoutId: 1,
    numOfSets: 4,
    numberOfReps: 30,
  },
  {
    id: 4,
    exerciseId: 4,
    workoutId: 2,
    numOfSets: 4,
    numberOfReps: 50,
  },
  {
    id: 5,
    exerciseId: 5,
    workoutId: 2,
    numOfSets: 3,
    numberOfReps: 20,
  },
];

const muscleGroupId = {
  1: "chest",
  2: "legs",
  3: "core",
};

// const userRatings = {}
// const users = {}
// const userRatingComment = {}
