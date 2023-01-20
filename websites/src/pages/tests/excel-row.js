import { Button } from 'antd';
import React, { useState } from 'react'
import ExcelHandleTable2 from './excel-3';
import ExcelHandleTable3 from './excel-4';
import ExcelTag from './excel-tag';
import styles from './styles.module.css';
const ExcelRow = ({ table }) => {
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
            {row.columns != null && <div className={`${styles.cell_showTable_Button}`} onClick={clickTheButton}> Show Table</div>}
          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellDiscription}`}>
            {row.discription.length > 106 ? row.discription.slice(0, 106) : row.discription}
            {row.discription.length > 107 && <span>...</span>} &nbsp;
            {/* {row.discription} */}

          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTags}`}>{row.tags.map(tag => <ExcelTag Tag={tag}></ExcelTag>)}</div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellAction}`}>

            <Button className={`${styles.cellActionTag}`}>Delete</Button>
          </div>
        </div>

      </div>
      {console.dir(row)}

      {/* <div className={`${styles.content} ${styles.row} ${styles.cellTags}`}>{row.tags.map(tag => <ExcelTag Tag={tag}></ExcelTag>)}</div> */}
      {showSub && <div className={`${styles.subTable}`}><ExcelHandleTable3 table={row} > </ExcelHandleTable3> </div>}


    </div>
  )
}

export default ExcelRow
