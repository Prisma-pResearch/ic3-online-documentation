import React, { useState } from 'react'
import excelfile from './testExcel.xlsx'
import { read, utils, writeFile, readFile, XLSX } from 'xlsx';

const ParseExcel = () => {
    // const [fileContent, setFileContent] = useState(null);
    // const fileData = readFile("./testExcel");
    // console.log(fileData)

    const filePath = './testExcel.xlsx';
    const workbook = readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    console.log(jsonData);
    
  return (
    <div>
      {/* <Document file={excelfile}></Document> */}
    </div>
  )
}

export default ParseExcel
