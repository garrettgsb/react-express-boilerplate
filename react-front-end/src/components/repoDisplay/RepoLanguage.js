import React from "react"
import PieChart from "./PieChart"
export default function RepoLanguage(props){
  const data = props.languageData
  console.log (data)
  
  return(
    <div>
      <PieChart data={data}></PieChart>
    </div>
  )
}