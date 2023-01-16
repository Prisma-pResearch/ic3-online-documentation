import { Button } from 'antd';
import React, { useState } from 'react';
import { Document, Page, pdfjs, View } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import styles from './styles.module.css';


const PdfLocal = ({Pdffile}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const nextPageButton = () => {
        setPageNumber(pageNumber + 1);
    }

    const previousPageButton = () => {
        setPageNumber(pageNumber - 1);
    }
    return (

        <div id = "pdfcontent" className={styles.content}>
            <Document file={Pdffile}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div>Please wait!</div>}
                pageLayout="twoColumnLeft"
            >

                <Page   pageNumber={pageNumber} renderTextLayer={false} />
            </Document>
            <p  className={styles.pageNumber}>
                Page {pageNumber} of {numPages}
            </p>
            <div>
            {pageNumber !== 1 && <Button onClick={previousPageButton}>Previous Page</Button>}
            {pageNumber !== numPages && <Button onClick={nextPageButton}>Next Page</Button>}

            </div>
       
        </div>

    )
}

export default PdfLocal


