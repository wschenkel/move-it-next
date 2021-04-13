import styles from '../styles/components/ExperienceBar.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';

export function ExperienceBar() {
    const { experienceToNextLevel, currentExperience } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        <header className={styles.experienceBar} role="header">
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}></div>
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>{currentExperience}xp</span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    )
}