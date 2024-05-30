// src/InvitePage.js
import React from "react";
import { useLocation } from "react-router-dom";
import "./InvitePage.css";

const InvitePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const inviteCount = queryParams.get("inviteCount") || 0;
  const inviteLink = "https://t.me/yourchannel?start=invite_link";

  return (
    <div className="InvitePage">
      <h1>Send this link to your frens</h1>
      <p className="invite-link">{inviteLink}</p>
      <p>
        Send this link to 50 frens and you'll receive our Solana ebook 100% free
      </p>
      <h2>Frens invited:</h2>
      <p>{inviteCount}</p>
    </div>
  );
};

export default InvitePage;
