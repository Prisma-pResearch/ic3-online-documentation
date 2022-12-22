import React from 'react'
import clsx from 'clsx';
import styles from './styles.module.css';
import { Button } from 'antd';
import HomeProjectDetail from "../home-project-details"


const Feature = ({ url, link, title, description, List }) => {

    return (
        <div className={clsx('col col--4 my-[1rem]')}>
            <div className={styles.featuresUp}>
                <img className={styles.featureSvg} src={url} />
                <div className={styles.featuresTitle}>{title}</div>

            </div>

            <div className={`text--center padding-horiz--md`}>
                <p className={`lg:h-[8rem] ${styles.featuresDescription}`}>{description}</p>
                <div className={styles.alignButtons}>
                    <HomeProjectDetail title={title} />

                    <Button href={link}>Docs</Button>
                </div>

            </div>



        </div>
    )
}

export default Feature


