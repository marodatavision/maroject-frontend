import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Sanctum, useSanctum } from 'react-sanctum';
import { ISanctumConfig } from './react-types/App-types';

const sanctumConfig: ISanctumConfig = {
  apiUrl: "http://127.0.0.1/",
  csrfCookieRoute: "sanctum/csrf-cookie",
  signInRoute: "login",
  signOutRoute: "logout",
  userObjectRoute: "api/user"
}

function App() {

  return (
    <div className="App">
      <Sanctum config={sanctumConfig}>
        {
          
        }
      </Sanctum>
    </div>
  );
}

export default App;
