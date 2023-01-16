import React, { useState } from 'react'
import { read, utils, writeFile } from 'xlsx';
import ParseExcel from '../../components/files-excel/excel-local';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider, UploadProps, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { readFile } from 'fs';

const ExcelFile = () => {
  const [fileName, setFileName] = useState(null);
  const [colums, setColums] = useState([[]]);
  // const [file, setFile] = useState(null);


  const handleFile = async (e) => {
    const file = e.target.files[0];
    const data = await file.arrayBuffer();

    setFileName(file.name);
    console.log("test")
    const workbook = read(data);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet, { header: 1 });
    console.log(jsonData);
    setColums(jsonData);
    // setFile(jsonData);

   
    
  }

  const outputFile = () => {
    const table = document.getElementById("TableUpload");
    const newTable = utils.table_to_book(table);
    writeFile(newTable, "testFileOutput.xlsx")

  }


  return (
    <div>

      <input type="file" onChange={(e) => handleFile(e)} id="actual-btn" style={{display: "none"}}></input>
    
      <Button>
      <label for="actual-btn" >Choose File new</label>
      </Button>
          
      {fileName && (<Button onClick={outputFile} type="primary" icon={<DownloadOutlined />} size="small" style={{marginLeft: "2rem"}}>Download the File</Button>)}
      
      {fileName && (
        <div>
          <p>File Name : {fileName} </p>

        </div>

      )}
     

      <table id="TableUpload">
        <thead>
          {colums[0].map(x => <th>{x}</th>)}
        </thead>
        <tbody>
          {colums.slice(1).map(row =>

            <tr>
              {row.map(col => <td>{col}</td>)}
            </tr>
          )}
        </tbody>
      </table>

      
    </div>
  )
}

export default ExcelFile
