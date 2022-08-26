import React from 'react'
import styles from './AnimatedTitles.module.css'

const AnimatedTitles = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>
            <h1 className={styles.top}>Vyshak</h1>
            <h1 className={styles.top}>Sukumaran</h1>
        </div>
    </div>
  )
}

export default AnimatedTitles