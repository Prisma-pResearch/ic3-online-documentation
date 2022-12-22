import React from 'react'
import Link from '@docusaurus/Link';
import styles from './styles.module.css';


const ProjectBox = ({ Title, LinkTo }) => {
  return (
    <Link className={`no-underline`} to={LinkTo} style={{textDecorationLine: "none"}}>
      <div className={`${styles.featureProjectBox}`}>

        <div style={{width:'12rem', textDecorationLine:'none'}}>
          {Title}
        </div>



      </div>
    </Link>
  )
}

export default ProjectBox
