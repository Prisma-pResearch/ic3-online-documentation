import { Row } from 'antd';
import React from 'react'
import ExcelRow from './excel-row';
import styles from './styles.module.css';

const ExcelHandleTable3 = (table, index) => {
    // const Table = data[0]
    const Table = table.table
    const Table_name = Table.Table_name
    const color_P = index
    console.dir(color_P)

    function get_bg_color(a) {
        switch (a) {
            case 1:
                return { backgroundColor: '#ffc0cb', color: "#6B202B" };
            case 2:
                return { backgroundColor: '#A1C7E6', color: "#1A1157" };
            case 3:
                return { backgroundColor: '#F0EE6E', color: "#574A2E" };
            case 4:
                return { backgroundColor: '#BFB6F0', color: "#461857" };
            case 5:
                return { backgroundColor: '#F0A98D', color: "#46270B" };
            case 0:
                return { backgroundColor: '#A3F0C3', color: "#165731" };
            default:
                return { backgroundColor: '#ffc0cb', color: "#6B202B" }
        }
    }
    function get_sub_title_bg_color(a) {
        switch (a) {
            case 1:
                return { backgroundColor: '#ffc0cb40'};
            case 2:
                return { backgroundColor: '#ABD3E850'};
            case 3:
                return { backgroundColor: '#F0EE6E40'};
            case 4:
                return { backgroundColor: '#BFB6F040'};
            case 5:
                return { backgroundColor: '#F0A98D40'};
            case 0:
                return { backgroundColor: '#A3F0C340'};
            default:
                return { backgroundColor: '#ffc0cb40'};
        }
    }

    const title_bg_color = get_bg_color(color_P)
    const sub_title_bg_color = get_sub_title_bg_color(color_P)

    return (
        <div className={styles.table} style={{minWidth:"56rem"}}>
        <div className={`${styles.table_title} ${styles.row}`} style={title_bg_color}>{Table_name} </div>
        <div className={`${styles.content}`}>
            <div className={`${styles.row} ${styles.title_cell}`} style={sub_title_bg_color}>
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
