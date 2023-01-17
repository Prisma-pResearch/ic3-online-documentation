


const xlsx = require('xlsx')

let filePath = "./TextExcel2.xlsx"

const wb = xlsx.readFile(filePath)
const ws = wb.Sheets['Sheet2']

const data = xlsx.utils.sheet_to_json(ws)

let jsonData = []
// get first row
let firstRow = Object.keys(data[0])
jsonData.push(firstRow)

// get rest rows
data.map(row => {
    let value = Object.values(row)
    jsonData.push(value)
   
})


console.log(jsonData)
