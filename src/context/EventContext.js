import React, { useState, createContext,useEffect  } from "react";
import axios from 'axios';
export const EventContext = createContext();

export const EventProvider = props => {
  
  const [dataEvents, setdataEvents] =  useState([])
  const [ statusForm, setStatusForm] =  useState("create")

  useEffect(() => {
    if (dataEvents.length === 0 ) {
      axios.get(`https://management-event-api.herokuapp.com/event`)
        .then(res => {
          setdataEvents(res.data)
        })
    }
  })

  
  return (
    <EventContext.Provider value={[dataEvents, setdataEvents,
                                   statusForm, setStatusForm]}>
      {props.children}
    </EventContext.Provider>
  );
};