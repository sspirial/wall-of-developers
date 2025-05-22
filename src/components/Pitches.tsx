import "../App.css";
import data from "../data.json";

export function Pitches() {
  return (
    <section id="pitches" className="pitchesSection">
      <h2 className="pitchesTitle">Pitches at Pwani Innovation Hackathon</h2>
      <div className="pitchesList">
        {data.pitches.map((pitch: any, idx: number) => (
          <div className="pitchCard" key={idx}>
            <h3 className="pitchTitle">{pitch.title}</h3>
            <p className="teamName">
              <strong>Team:</strong> {pitch.team}
            </p>
            <p className="description">{pitch.description}</p>
            <p className="members">
              <strong>Members:</strong> {pitch.members.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
