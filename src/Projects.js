import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from './sample.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Projects = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log(numPages)
        setPageNumber(numPages)
    }

    return (
        <div style={{ position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', display: 'flex' }}>
            <Document onLoadSuccess={onDocumentLoadSuccess} file={pdfFile}>
                <Page pageNumber={pageNumber} />
            </Document>
        </div>
    )
}

export default Projects;