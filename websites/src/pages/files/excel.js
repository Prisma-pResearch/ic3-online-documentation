import React from 'react'
import ExcelHandleTable2 from '../../components/files-excel/excel-table-category'
// import data from './menu-json.json'
import datas from './meta_IDEALIST'

const Excel = () => {


  return (
    <div>
      {datas.map(data =>
        (<ExcelHandleTable2 table={data} />))}

    </div>
  )
}

export default Excel;
