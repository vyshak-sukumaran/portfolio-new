import React, { useEffect, useRef, useState } from 'react'
import styles from './Curtain.module.css'

const Curtain = () => {
    
    return (
        <div className={styles.main}>
            <div className={`${styles.flex} ${styles.curtain}`}>
                <div className={`${styles.progressBar} ${styles.progressGrowAnimation}`}></div>
            </div>
        </div>
    )
}

export default Curtain