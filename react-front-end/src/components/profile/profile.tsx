import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { UserInfo, MainInfo, Button } from "./profile.components";
import { Redirect } from "react-router-dom";
import Avatar from 'avataaars';

interface User {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  facebook?: string;
}

export const Profile = () => {

  // const userID = window.localStorage.getItem('userID');
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    // Axios.get(`/profile/${userID}`)
    Axios.get(`/profile`, {params: {user: localStorage.userID}})
      .then((res) => {
        // console.log(res.data)
        setUser(res.data)
      })
      .catch(err => console.log(err));
  }, [])

  const logout = () => {
    Axios.post(`/logout`)
      .then((res) => {
        setUser(res.data)
        localStorage.setItem('userID', '0')
      })
      .then(() => console.log('USER IN LOGOUT IS', user))
      .catch(err => console.log(err));
  }

  return (
    !user ? <Redirect to='/' /> :
      <UserInfo onSubmit={logout}>
        <MainInfo>
          <Avatar
            avatarStyle='Circle'
            topType='LongHairFrida'
            accessoriesType='Wayfarers'
            facialHairType='Blank'
            clotheType='Overall'
            clotheColor='White'
            eyeType='Surprised'
            eyebrowType='UpDown'
            mouthType='Smile'
            skinColor='Pale'
          />
          <p>Hello! {user.first_name}</p>
          <p>{user.email}</p>
          <p>{user.facebook}</p>
          <Button type="submit">Login Out</Button>
        </MainInfo>
      </UserInfo>
  )
};