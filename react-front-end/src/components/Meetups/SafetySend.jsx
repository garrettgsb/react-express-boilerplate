import React from 'react'

const SafetySend = () => {

  state = {
    text: {
      recipient: '',
      textmessage: ''
    }
  }

  sendText = () => {
    const { text } = this.state

    // pass variables in query string
    fetch(`http://localhost:8080/text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .catch(err => console.log(err))
  }

  const { text } = this.state;
  
  const spacer = {
    margin: 8
  }
  const textArea = {
    borderRadius: 4
  }

  return (
    <div className='textArea' style={{marginTop:10 }}>
      <h2> Send Text Message </h2>
      <label> Your Phone Number </label>
      <br />
      <input value = {text.recipient} 
        onChange={e => this.setState({ text: { ...text, recipient: e.target.value} })} />
      <div style={spacer} />
      <label> Message </label>
      <br />
      <textarea rows={3} value={text.textmessage} style={textArea} 
        onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })}/>
      <div style={spacer} />
      <button onClick={this.sendText}> Send Text </button>
    </div>
  )
}

export default SafetySend
