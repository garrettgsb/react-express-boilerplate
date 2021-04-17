import React, {createContext, useState, useMemo } from 'react'

export default function MeetupsProvider(props) {
  const [meetup, setMeetup] = useState('');

  const value = useMemo(() => ({meetup, setMeetup}), [meetup, setMeetup])

  return (
    <MeetupsContext.Provider value={value}>
      {props.children}
    </MeetupsContext.Provider>
  )
}

export const MeetupsContext = createContext();