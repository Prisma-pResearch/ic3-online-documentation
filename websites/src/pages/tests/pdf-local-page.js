import { Button } from 'antd'
import React from 'react'
import PdfLocal from '../../components/files-pdf/pdf-local'

const PdfLocalPage = () => {
    const  Pdffile =  './elephant.pdf'
  return (
    <div>
        <PdfLocal Pdffile={ Pdffile}></PdfLocal>
    </div>
  )
}

export default PdfLocalPage
