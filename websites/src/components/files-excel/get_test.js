import * as xlsx from 'xlsx';
import excelFile from './excel/excelfile.xlsx'//get file location url from react src folder


// get file from the imported url
var request = new XMLHttpRequest();
request.open('GET', excelFile, true);
request.responseType = "arraybuffer";
request.onload = function() {


    
    /* convert data to binary string */
    var data = new Uint8Array(request.response);
    var arr = new Array();
    for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
    data = arr.join("");

    //using xlsx library convert file to json
    const workbook = xlsx.read(data, { type: "binary" })
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const json = xlsx.utils.sheet_to_json(worksheet)
    console.log(json)
};
request.send();