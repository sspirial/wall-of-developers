import React from 'react';
import styles from './InfoPanel.module.css';

const InfoPanel: React.FC = () => {
  return (
    <div className={styles.infoPanel}>
      <h2 className={styles.theme}>Empowering Innovation for a Sustainable Future</h2>
      
      <p className={styles.info}><strong>Date:</strong> May 15–17, 2025</p>
      <p className={styles.info}><strong>Venue:</strong> Swahilipot Hub, Mombasa</p>

      <h3 className={styles.heading}>Highlights:</h3>
      <ul className={styles.highlights}>
        <li>Tech Exhibitions</li>
        <li>Startup Pitches</li>
        <li>Workshops & Demos</li>
        <li>Panel Discussions</li>
        <li>Networking Sessions</li>
      </ul>

      <h3 className={styles.heading}>Target Audience:</h3>      <p className={styles.targetAudience}>
        Innovators, Startups, Investors, Students, and Development Partners
      </p>
    </div>
  );
};

export default InfoPanel;
