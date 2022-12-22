import React from 'react'
import DatasetBox from '../home-project-details-dataset';
import ProjectBox from '../home-project-details-projectbox'
import WorkspaceBox from '../home-project-details-workspace';
import styles from './styles.module.css';

const ItemShowBox = ({ Title, List }) => {
  const list = List;
  return (
  

      <div className={`${styles.featureBoxShow}`}>
        {
          Title == "Datasets" &&
            List.map(i => <DatasetBox Title={i.name} LinkTo = {i.link} Update = {i.update} NumPatients={i.numPatients}  NumSurgeries={i.numSurgeries}/>)
             
        }

        {
          Title == "Projects" &&
            List.map(i => <ProjectBox Title={i.name} LinkTo = {i.link} />)
            
        }

{
          Title == "Workspaces" &&
            List.map(i => <WorkspaceBox  Title={i.name} LinkTo = {i.link} Update = {i.update} NumPatients={i.numPatients}  NumSurgeries={i.numSurgeries}/>)
            
        }
      </div>

    // </div>
  )
}

export default ItemShowBox
