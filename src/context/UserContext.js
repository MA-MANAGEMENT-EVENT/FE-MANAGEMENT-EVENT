import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import userdata from "../Data/user";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const iniateUser = currentUser ? currentUser : {role:"guest"};

  const [user, setUser] = useState(iniateUser);
  const [daftarUser, setDaftarUser] = useState([]);

  useEffect(() => {
    if (daftarUser.length === 0) {
      // axios.get(`url`)
      // .then(res => {

      //     setDaftarUser(res.data.map(el=>{ return {
      //       id: el.id,
      //       username: el.username,
      //       password: el.password,
      //       role: el.role,
      //     }
      //   }))
      // })
console.log(userdata)
setDaftarUser(userdata)
    
   
    }
  }, [daftarUser]);

  return (
    <UserContext.Provider value={[user, setUser, daftarUser, setDaftarUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
