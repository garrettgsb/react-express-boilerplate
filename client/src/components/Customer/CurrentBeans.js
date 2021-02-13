function CurrentBeans(props) {
  const beanCount = props.currentBeans;

  return(
    <div>
      <p>Current beans:</p>
      <h3>{beanCount}</h3>
    </div>
  )
}

export default CurrentBeans;