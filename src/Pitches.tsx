import styles from './Pitches.module.css';

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

export function Pitches() {  return (    <section id="pitches" className={styles.pitchesSection}>
      <h2 className={styles.pitchesTitle}>Pitches at Pwani Innovation Hackathon</h2>
      <div className={styles.pitchesList}>
        {pitchesData.map((pitch, idx) => (
          <div className={styles.pitchCard} key={idx}>
            <h3 className={styles.pitchTitle}>{pitch.title}</h3>
            <p className={styles.teamName}>
              <strong>Team:</strong> {pitch.team}
            </p>
            <p className={styles.description}>{pitch.description}</p>
            <p className={styles.members}>
              <strong>Members:</strong> {pitch.members.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
