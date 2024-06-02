'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import saveUser from '../api/saveUser';

//Components
import Header from "../components/homeHeader"

// Last edited by Ene
const HomePage = () => {
  const { isSignedIn, isLoaded, user } = useUser();
  useEffect(() => {
    if (isSignedIn && isLoaded && user) {
      const userData = {
        id: user.id,
        email: user.primaryEmailAddress?.emailAddress, 
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
      }
      console.log('logged in')
      saveUser(userData); // Directly call the action with user data
    } else {
      console.log('not logged in')
    }
  }, [isSignedIn, isLoaded, user]);
  return (
    <div>
        <Header />
    </div>
  )
}

export default HomePage