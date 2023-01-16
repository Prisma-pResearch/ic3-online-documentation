import React, { useState } from 'react'
// import * as fs from 'fs';
import excelfile from './test.xlsx'
import { read, utils, writeFile, readFile, XLSX } from 'xlsx';

const ParseExcel = () => {
  // const [fileContent, setFileContent] = useState(null);
  const fileData = readF("./test.xlsx");

  // console.log(fileData)
  // const fs = require('fs-extra')
 
  // const data = fs.readFileSync('./test.xlsx');
 


  return (
    <div>
      {/* <Document file={excelfile}></Document> */}
    </div>
  )
}

export default ParseExcel
