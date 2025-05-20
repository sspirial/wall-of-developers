const pitchesData = [
  {
    title: "Smart Water Monitoring",
    team: "AquaTech",
    description:
      "A real-time IoT solution for monitoring water usage and quality in coastal communities.",
    members: ["Fatma Ali", "John Mwangi", "Aisha Omar"],
  },
  {
    title: "Blue Economy Marketplace",
    team: "Pwani Traders",
    description:
      "A digital platform connecting local fishermen and artisans to buyers, promoting sustainable trade.",
    members: ["Salim Yusuf", "Grace Otieno", "Peter Kimani"],
  },
  {
    title: "Eco-Tourism App",
    team: "Safari Innovators",
    description:
      "A mobile app that curates eco-friendly tourism experiences along the Kenyan coast.",
    members: ["Mary Wambui", "Ali Bakari", "Susan Njeri"],
  },
];

export function Pitches() {
  return (
    <section className="pitches-section">
      <h2 className="pitches-title">Pitches at Pwani Innovation Hackathon</h2>
      <div className="pitches-list">
        {pitchesData.map((pitch, idx) => (
          <div className="pitch-card" key={idx}>
            <h3>{pitch.title}</h3>
            <p>
              <strong>Team:</strong> {pitch.team}
            </p>
            <p>{pitch.description}</p>
            <p>
              <strong>Members:</strong> {pitch.members.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
