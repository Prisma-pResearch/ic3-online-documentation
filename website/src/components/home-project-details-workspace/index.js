import React from 'react'
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const WorkspaceBox = ({ Title, LinkTo, Update}) => {
    return (
      <Link  to={LinkTo} style={{textDecorationLine: "none", alignItems:"center"}}>
      <div className={` ${styles.featureDatasetBox}`}>
       
          <div  style={{width:'12rem', fontWeight:'500', marginTop:'1rem'}}>
            {Title}
          </div>
          <div style={{marginTop:'0.5rem'}}>
            <div style={{fontSize:'0.6rem', fontWeight:'300', marginTop:'1rem'}}>
              update: {Update}
            </div>
          </div>
      </div>
      </Link>
    )
}

export default WorkspaceBox
