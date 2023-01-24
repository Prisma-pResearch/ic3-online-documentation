import { Row } from 'antd';
import React from 'react'
import ExcelRowCategory from './excel-row-category';
import styles from './styles.module.css';

const ExcelHandleTable2 = (table) => {
    // const Table = data[0]
    const Table = table.table[0]
    const Table_name = Table.Category_name
    const color = (Table_name) => {
        switch (Table_name) {
            case 'Patient Info':
                return 'pink';
            case 'Other':
                return '#erdcs53';
            default:
                return  '#f3f3f3'
        }
    }

    return (
        <div className={styles.table}>
            <div className={`${styles.table_title} ${styles.row} `} >{Table_name} </div>
            <div className={`${styles.content}`}>
                <div className={`${styles.row} ${styles.title_cell}`}>
                    <div className={`${styles.cell} ${styles.cellTable_name}`}>Table Name</div>
                    <div className={`${styles.cell} ${styles.cellDescription}`}>Description</div>
                    {/* <div className={`${styles.cell} ${styles.cellTags}`}>Tags</div> */}
                    <div className={`${styles.cell} ${styles.cellAction}`}>Action</div>
                </div >
                <div  >

                    {Table.Columns.map(row => (
                        <ExcelRowCategory table={row} />

                    ))}
                </div>

            </div>


        </div>
    )
}

export default ExcelHandleTable2
