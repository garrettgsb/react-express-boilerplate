import React from "react"
import PieChart from "./PieChart"
export default function RepoLanguage(props){
  const data = props.languageData
  console.log (data)
  
  return(
    <div onClick={()=>props.back()}>
      <PieChart data={data}></PieChart>
    </div>
  )
}