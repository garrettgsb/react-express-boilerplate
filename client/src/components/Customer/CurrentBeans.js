function CurrentBeans(props) {
  const currentBeans = props.currentBeans;

  return(
    <div>
      <p>Current beans:</p>
      <h3>{currentBeans}</h3>
    </div>
  )
}

export default CurrentBeans;