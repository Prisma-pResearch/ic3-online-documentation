import React, { useState } from 'react'
// import * as fs from 'fs';
import excelfile from './test.xlsx'
import { read, utils, writeFile, readFile, XLSX } from 'xlsx';

const ParseExcel = () => {
  // const [fileContent, setFileContent] = useState(null);
  // const fileData = readFile("./testExcel");
  // console.log(fileData)
  // const fs = require('fs-extra')
  const XLSX = require('xlsx');
  // const data = fs.readFileSync('./test.xlsx');
  const workbook = read(data, { type: 'buffer' });


  return (
    <div>
      {/* <Document file={excelfile}></Document> */}
    </div>
  )
}

export default ParseExcel
