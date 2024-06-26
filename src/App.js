// src/App.js
import React, { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { HashRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import InvitePage from "./InvitePage";

const tele = window.Telegram.WebApp;

const App = () => {
  const [inviteCount, setInviteCount] = useState(0);

  useEffect(() => {
    tele.ready();
  })

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  const joinChannel = () => {
    window.open("https://t.me/yourchannel", "_blank");
  };

  const visitWebsite = () => {
    window.open("https://yourwebsite.com", "_blank");
  };

  const inviteFriends = () => {
    // Navigate to the InvitePage with inviteCount as a query parameter
    window.location.href = `/invite?inviteCount=${inviteCount}`;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>Your Solana Ebook Invites</h1>
              <p>{inviteCount} Invites</p>
              <button onClick={joinChannel}>Join our Channel</button>
              <button onClick={visitWebsite}>Visit our Website</button>
              <button onClick={inviteFriends}>Invite Friends</button>
            </div>
          }
        />
        <Route path="/invite" element={<InvitePage />} />
      </Routes>
    </Router>
  );
};

export default App;
