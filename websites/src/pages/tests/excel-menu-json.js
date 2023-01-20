import React from 'react'
import ExcelHandleTable from './excel-handle-table'
import data from './menu-json.json'

const ExcelMenuJson = () => {
  const Table = data[0]
  const titleLine = Object.keys(Table.columns[0]);
  const bodyRows = Table.columns;
  // const test = bodyRows.map(row => Object.values(row).slice(0, 2).map(cell => console.dir(cell)))

  return (
    <div>
      <table>
        <div> {Table.Table_name}</div>
        <div> {Table.discription}</div>
        <thead>
          <tr>
            {titleLine.map(cell => <th>{cell}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            bodyRows.map(row => <tr>
              {titleLine.map(title =>
                <td>{row[title]}</td>
              )}

            </tr>)
          }
        </tbody>
      </table>

      <ExcelHandleTable table={Table} />
      <ExcelHandleTable2 table = {data}/>
    </div>
  )
}

export default ExcelMenuJson
