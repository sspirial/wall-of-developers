import React from "react";
import "../App.css";
import data from "../data.json";

const InfoPanel: React.FC = () => {
  return (
    <div id="panel" className="infoPanel">
      <h2 className="theme">{data.theme}</h2>
      <p className="info">
        <strong>Date:</strong> {data.date}
      </p>
      <p className="info">
        <strong>Venue:</strong> {data.venue}
      </p>
      <h3 className="heading">Highlights:</h3>
      <ul className="highlights">
        {data.highlights.map((item: string, idx: number) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <h3 className="heading">Target Audience:</h3>
      <p className="targetAudience">{data.targetAudience}</p>
    </div>
  );
};

export default InfoPanel;
