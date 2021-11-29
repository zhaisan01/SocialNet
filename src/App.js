// import React, { useState } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Dialog from "./components/dialogs/dialog";
import Header from "./components/header/header";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/havbar";
import News from "./components/News/News";
import Profile from "./components/profile/Profile.jsx";
import Setting from "./components/Set/Set.jsx";

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route
              path='/profile'
              element={
                <Profile
                  post={props.state.profilePage.post}
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path='/dialogs'
              element={
                <Dialog
                  massege={props.state.massegePage.massege}
                  user={props.state.massegePage.user}
                />
              }
            />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
