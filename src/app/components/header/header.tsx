import React from 'react'
import styles from './header.module.scss'
import ian from '/public/images/ian.jpg'

export default function Header() {
    return (
        <div className={`${styles.root_style}`}>
            <img src={ian.src} width="500px" height="auto" alt="Ian" />
            <div className={`${styles.page_title}`}>
                <h1>This is me!</h1>
            </div>
        </div>
    )
}