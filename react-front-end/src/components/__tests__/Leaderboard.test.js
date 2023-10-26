import React from "react";
import '@testing-library/jest-dom'
import _ from 'lodash'
import { getAllByText, getByText, render, waitForElement, getAllByTestId, getByTestId } from "@testing-library/react";
import Leaderboard from "../Leaderboard";

describe("Leaderboard", () => {

  xit("renders without crashing", async () => {

    const { container } = render(<Leaderboard />);
    await waitForElement(() => getAllByText(container, "Player 1"))

    expect(getByText(container, "PlayerOne")).toBeInTheDocument()

  });

  xit("orders the highest score first", async () => {

    const { container, debug } = render(<Leaderboard />);
    const scoresElementArray = await waitForElement(() => getAllByTestId(container, "score"))

    //create scores, and sorted scores
    const scores = scoresElementArray.map((score) => {
      return score.textContent
    })
    const scoresSorted = scores.slice().sort((a, b) => a - b)

    //equality test scores
    expect(scores).toEqual(scoresSorted)

  });

  it("orders by scores and time", async () => {

    const { container, debug } = render(<Leaderboard />);

    const rowElementArray = await waitForElement(() => getAllByTestId(container, "row"))
    const time = await waitForElement(() => getAllByTestId(container, "time"))

    //create rows from dom elements
    const rows = rowElementArray.map((row) => {
      return {
        name: getByTestId(row, "name").textContent,
        score: getByTestId(row, "score").textContent,
        time: getByTestId(row, "time").textContent
      }
    })

    //sort rows to create array of expected values
    const scoreSorted = rows.slice().sort((a, b) => b.score - a.score)
    const timeScoreSorted = scoreSorted.slice().sort((a, b) => {
        return b.score - a.score || a.time - b.time 
    })
    const timeArray = time.map((row) => row.textContent)
    const timeSortedArray = timeScoreSorted.map((row) => row.time)

    expect(timeArray).toEqual(timeSortedArray)
  });

})