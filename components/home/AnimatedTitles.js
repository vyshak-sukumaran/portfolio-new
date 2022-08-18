import React from 'react'
import styles from './AnimatedTitles.module.css'

const AnimatedTitles = () => {
  return (
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
            <span>Vyshak</span>
            <span>Sukumaran</span>
        </h1>

        <h2 className={styles.description}>Web Developer</h2>
    </div>
  )
}

export default AnimatedTitles