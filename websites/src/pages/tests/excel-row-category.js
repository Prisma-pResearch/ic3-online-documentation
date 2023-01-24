import { Button } from 'antd';
import React, { useState } from 'react'
import ExcelHandleTable2 from './excel-table-category';
import ExcelHandleTable3 from './excel-table-table';
import ExcelTag from './excel-tag';
import styles from './styles.module.css';
const ExcelRowCategory = ({ table }) => {
  console.log("row ↓")
  console.dir(table)
  console.log("row ↑")
  const row = table
  const [showSub, setShowSub] = useState(false)
  const clickTheButton = () => {
    setShowSub(!showSub)
  }


  return (
    <div>
      <div>
        <div className={` ${styles.content} ${styles.row}`}>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTable_name}`}>
            {row.Table_name}
            
          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellDiscription}`}>
            {row.discription.length > 106 ? row.discription.slice(0, 106) : row.discription}
            {row.discription.length > 107 && <span>...</span>} &nbsp;
            {/* {row.discription} */}

          </div>
          {/* <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTags}`}>{row.tags.map(tag => <ExcelTag Tag={tag}></ExcelTag>)}</div> */}
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellAction}`}>

            
            {row.columns != null && <Button className={`${styles.cellActionTag}`} onClick={clickTheButton}>Show Table</Button>}
          </div>
        </div>

      </div>
     

      {/* <div className={`${styles.content} ${styles.row} ${styles.cellTags}`}>{row.tags.map(tag => <ExcelTag Tag={tag}></ExcelTag>)}</div> */}
      {showSub && <div className={`${styles.subTable}`}><ExcelHandleTable3 table={row} > </ExcelHandleTable3> </div>}


    </div>
  )
}

export default ExcelRowCategory
