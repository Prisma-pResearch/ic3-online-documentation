import { Button } from 'antd'
import React from 'react'
import PdfLocal from '../../components/files-pdf/pdf-local'
import PdffileNew from './elephant.pdf'

const PdfLocalPage = () => {
    
  return (
    <div>
        <PdfLocal Pdffile={PdffileNew}></PdfLocal>
    </div>
  )
}

export default PdfLocalPage
