import { Row } from 'antd';
import React from 'react'
import ExcelRow from './excel-row';
import styles from './styles.module.css';

const ExcelHandleTable3 = (table) => {
    // const Table = data[0]
    const Table = table.table
    const Table_name = Table.Table_name
    return (
        <div className={styles.table} style={{minWidth:"56rem"}}>
        <div className={`${styles.table_title} ${styles.row}`}>{Table_name} </div>
        <div className={`${styles.content}`}>
            <div className={`${styles.row} ${styles.title_cell}`}>
                <div className={`${styles.cell} ${styles.cellTable_name}`}>Column Name</div>
                <div className={`${styles.cell} ${styles.cellDescription}`}>Description</div>
                <div className={`${styles.cell} ${styles.cellColumn_Type}`}>Column Type</div>
                <div className={`${styles.cell} ${styles.cellRequired}`}>Required</div>
                <div className={`${styles.cell} ${styles.cellIndicator}`}>Indicator</div>
                <div className={`${styles.cell} ${styles.cellTags}`}>Action</div>
            </div >
            <div  >

                {Table.Columns.map(row => (
                    <ExcelRow table={row} />

                ))}
            </div>

        </div>


    </div>
    )
}

export default ExcelHandleTable3
