import React from 'react'
import styles from './Hexagon.module.css'
import HexIcon from '../../assets/hex.svg'
const Hexagon = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.hex}>
          <HexIcon />
          <span>Figma</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Tailwind</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Material Ui</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Bootstrap</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>React js</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Next js</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Redux</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Python</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Javascript</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>HTML</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>CSS</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Django</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Fastapi</span>
        </div>
        <div className={styles.hex}>
          <HexIcon />
          <span>Docker</span>
        </div>
        
      </div>

    </div>
  )
}

export default Hexagon