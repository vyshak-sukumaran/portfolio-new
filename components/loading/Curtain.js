import React, { useEffect, useRef, useState } from 'react'
import styles from './Curtain.module.css'

const Curtain = () => {
    const curtainRef = useRef(null)

    useEffect(() => {
        const curtainElem = curtainRef.current
        if (!curtainElem) return

        const handleAnimationEnd = (e) => {
            curtainElem.style.display = "none"
        }
        curtainElem.addEventListener("animationend", handleAnimationEnd)

        return () => {
            curtainElem.removeEventListener("animationend", handleAnimationEnd)
        }
    }, [])
    return (
        <div ref={curtainRef} className={styles.main}>
            <div className={`${styles.flex} ${styles.curtain}`}>
                <div className={`${styles.progressBar} ${styles.progressGrowAnimation}`}></div>
            </div>
        </div>
    )
}

export default Curtain