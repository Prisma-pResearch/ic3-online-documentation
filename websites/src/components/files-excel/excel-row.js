import { Button } from 'antd';
import React, { useState } from 'react'
import ExcelHandleTable2 from './excel-table-category';
import ExcelHandleTable3 from './excel-table-table';
import ExcelTag from './excel-tag';
import styles from './styles.module.css';
const ExcelRow = ({ table }) => {
  console.log("row ↓")
  console.dir(table)
  console.log("row ↑")
  const row = table
  console.dir(row)
  const [showSub, setShowSub] = useState(false)
  const clickTheButton = () => {
    setShowSub(!showSub)
  }


  return (
    <div>
      <div>
        <div className={` ${styles.content} ${styles.row}`} >
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellTable_name}`}>
            {row.Column_name}
            
          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellDescription}`}>
            {row.Description.length > 106 ? row.Description.slice(0, 106) : row.Description}
            {row.Description.length > 107 && <span>...</span>} &nbsp;
            {/* {row.discription} */}

          </div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellColumn_Type}`}>{row.Column_Type}</div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellRequired}`}>{row.Required}</div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellIndicator}`}>{row.indicators.map(indicator => <ExcelTag Tag={indicator}></ExcelTag>)}</div>
          <div className={`${styles.cell} ${styles.centent_cell} ${styles.cellAction}`}>
        {console.log('你好')}
       
            {row.data != null && <Button className={`${styles.cellActionTag}`} onClick={clickTheButton}>Show Statistics</Button>}
          </div>
        </div>

      </div>
      {console.dir(row)}

      {/* <div className={`${styles.content} ${styles.row} ${styles.cellTags}`}>{row.tags.map(tag => <ExcelTag Tag={tag}></ExcelTag>)}</div> */}
      {showSub && <div className={`${styles.subTable}`}> {row.data }</div>}


    </div>
  )
}

export default ExcelRow
