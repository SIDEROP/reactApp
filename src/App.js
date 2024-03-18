import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

// page import
import Home from "./pages/Home";
import Loging from "./pages/Loging";
import { useDispatch, useSelector } from "react-redux";
import { userPost } from "./app/slices/user";

const App = () => {

  let {user} = useSelector(state=>state.app)
  let usedis = useDispatch()

  useEffect(()=>{
    let token = localStorage.getItem("token")
    usedis(userPost({token:token}))
  },[])

  if (!user) {
    return <Loging/>
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loging" element={<Loging />} />
      </Routes>
    </>
  );
};

export default App;
