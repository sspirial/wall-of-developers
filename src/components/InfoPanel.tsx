import React from "react";
import "../App.css";

const InfoPanel: React.FC = () => {
  return (
    <div id="panel" className="infoPanel">
      <h2 className="theme">Empowering Innovation for a Sustainable Future</h2>
      <p className="info">
        <strong>Date:</strong> May 15–17, 2025
      </p>
      <p className="info">
        <strong>Venue:</strong> Swahilipot Hub, Mombasa
      </p>
      <h3 className="heading">Highlights:</h3>
      <ul className="highlights">
        <li>Tech Exhibitions</li>
        <li>Startup Pitches</li>
        <li>Workshops & Demos</li>
        <li>Panel Discussions</li>
        <li>Networking Sessions</li>
      </ul>
      <h3 className="heading">Target Audience:</h3>
      <p className="targetAudience">
        Innovators, Startups, Investors, Students, and Development Partners
      </p>
    </div>
  );
};

export default InfoPanel;
