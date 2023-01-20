import React from 'react'
// import data from './menu-json.json'

const ExcelHandleTable = (data) => {
    const Table = data.table


    const titleLine = Object.keys(Table.columns[0]);
    const bodyRows = Table.columns;
    // const test = bodyRows.map(row => Object.values(row).slice(0, 2).map(cell => console.dir(cell)))

    console.log(bodyRows[0].columns == null)

    return (
        <table>
            <div> {Table.Table_name}</div>
            <div>{Table.discription}</div>
            <thead>
                <tr>
                    {titleLine.map(cell => <th key={cell}> {cell}</th>)}

                </tr>
            </thead>
            <tbody>
                {
                    bodyRows.map(row =>
                        <tr>

                            {titleLine.map(title =>
                                <td>{row[title]}</td>
                            )}

                            {/* <tr>
                                {console.log(row.columns == null)}
                                {row.columns != null && <ExcelHandleTable table={row} styles={{location:"absolute"}}></ExcelHandleTable>}
                            </tr> */}
                        </tr>
                    )
                }
            </tbody>

        </table>
    )
}

export default ExcelHandleTable
