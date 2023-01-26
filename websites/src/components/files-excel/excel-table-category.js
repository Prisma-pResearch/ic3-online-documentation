import { Row } from 'antd';
import React from 'react'
import ExcelRowCategory from './excel-row-category';
import styles from './styles.module.css';

const ExcelHandleTable2 = ({table}) => {
    // const Table = data[0]
    console.dir(table)
    const Table = table
    const Category_name = Table.Category_name

    function get_bg_color(a) {
        switch (a) {
            case "Administrative Data":
                return { backgroundColor: '#ffc0cb', color: "#6B202B" };
            case "Demographic Info":
                return { backgroundColor: '#A1C7E6', color: "#1A1157" };
            case "Health Economics Data":
                return { backgroundColor: '#F0EE6E', color: "#574A2E" };
            case "Health System Data":
                return { backgroundColor: '#BFB6F0', color: "#461857" };
            case "Medical History":
                return { backgroundColor: '#F0A98D', color: "#46270B" };
            case "Outcomes Data":
                return { backgroundColor: '#A3F0C3', color: "#165731" };
            default:
                return { backgroundColor: '#ffc0cb', color: "#6B202B" }
        }
    }
    function get_sub_title_bg_color(a) {
        switch (a) {
            case "Administrative Data":
                return { backgroundColor: '#ffc0cb40'};
            case "Demographic Info":
                return { backgroundColor: '#ABD3E850'};
            case "Health Economics Data":
                return { backgroundColor: '#F0EE6E40'};
            case "Health System Data":
                return { backgroundColor: '#BFB6F040'};
            case "Medical History":
                return { backgroundColor: '#F0A98D40'};
            case "Outcomes Data":
                return { backgroundColor: '#A3F0C340'};
            default:
                return { backgroundColor: '#ffc0cb40'};
        }
    }

    const title_bg_color = get_bg_color(Category_name)
    const sub_title_bg_color = get_sub_title_bg_color(Category_name)

    return (
        <div className={styles.table}>
            <div className={`${styles.table_title} ${styles.row} `} style={title_bg_color}>{Category_name} </div>
            <div className={`${styles.content}`}>
                <div className={`${styles.row} ${styles.title_cell}`} style={sub_title_bg_color}>
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
