import React from 'react'
import ExcelHandleTable2 from './excel-table-category'
// import data from './menu-json.json'


const Excel = (datas) => {


  return (
    <div>
      {datas.datas.map(data =>
        (<ExcelHandleTable2 table={data} />))}

    </div>
  )
}

export default Excel;
