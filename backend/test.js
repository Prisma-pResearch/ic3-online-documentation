
// const js = require('js')

const xlsx = require('xlsx')

let filePath = "./TextExcel.xlsx"

const wb = xlsx.readFile(filePath)
const ws = wb.Sheets['Sheet2']


const data = xlsx.utils.sheet_to_json(ws)

console.log(data)