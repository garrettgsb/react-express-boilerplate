import React, {useState} from "react";

export default function ProgramCard ({program, edit}) {

  const [name, setName] = useState(name)

  const handleSubmit = event => {
    event.preventDefault();
}

  return (
    <div>

      {edit ?

        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder={program.name}
              value={name}
              onChange={(event) => setName(event.target.value)}
              data-testid="student-name-input" 
          />
        </form>  :

        <p>{program.name}</p>}

    </div>
  )
}