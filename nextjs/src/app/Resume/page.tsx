import React from 'react';
import styles from '../../styles/Resume.module.css';
import Title from '../../components/Title/Title';

function Resume () {
    return( 
    <div className={styles.resumeWrapper}>
        <div className={styles.resume}>
            <Title title='RESUM&Eacute;'></Title>
            <div className={styles.iframeWrapper}>
                <iframe src="https://drive.google.com/file/d/1pr8NumqUzFy8dqAA1IHWvflCmehDQtzT/preview" width="640" height="820"></iframe>
            </div>
        </div>
    </div>
    )
}

export default Resume;
  
