import React from 'react'
import styles from './header.module.scss'
import ian from '/public/images/ian.jpg'

export default function Header() {
    return (
        <div className={`${styles.root_style}`}>
            <img src={ian.src} className={`${styles.header_image}`} alt="Ian" />
            <div className={`${styles.page_title}`}>
                <h1>This is me!</h1>
                <div className={`${styles.header_intro}`}>
                    <p>My name's Ian, and welcome to my site! This is less of a portfolio site and more of an introduction to myself with a bit extra.
                        This site is mostly for fun, so if I referenced it in a job application it means I don't have any other projects to showcase yet.
                    </p>
                </div>
            </div>
        </div>
    )
}