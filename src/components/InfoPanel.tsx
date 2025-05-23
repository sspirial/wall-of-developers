import React from "react";
import "../App.css";

const InfoPanel: React.FC = () => {
  return (
    <div id="panel" className="infoPanel">
      {/* Event Info Card */}
      <div className="event-info-card">
        <div className="event-detail">
          <span className="event-label">Event:</span>
          <span className="event-value">Pwani Innovation Week</span>
        </div>
        <div className="event-detail">
          <span className="event-label">Date:</span>
          <span className="event-value">May 15–21, 2025</span>
        </div>
        <div className="event-detail">
          <span className="event-label">Venue:</span>
          <span className="event-value">Swahilipot Hub, Mombasa</span>
        </div>
      </div>

      <div>
        <h2 className="theme">Empowering Innovation for a Sustainable Future</h2>
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
    </div>
  );
};

export default InfoPanel;