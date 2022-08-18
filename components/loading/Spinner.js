import React from 'react'
import styles from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.cover}>
                <div className={styles.main}></div>
            </div>
        </div>
    )
}

export default Spinner