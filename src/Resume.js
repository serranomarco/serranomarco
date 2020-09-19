import React, { useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import pdfFile from './sample.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setPageNumber(numPages)
    }
    return (
        <div style={{ backgroundColor: 'black', position: 'absolute', top: '70px', left: '0px', right: '0px', bottom: '0px', display: 'flex', padding: '5px 10%', justifyContent: 'space-around' }}>
            <Document onLoadSuccess={onDocumentLoadSuccess} file={pdfFile}>
                <Page scale={0.9} pageNumber={pageNumber} />
            </Document>
            <div style={{ backgroundColor: 'white', alignSelf: 'center', padding: '20px', borderRadius: '5px' }}>
                <h1 style={{ color: 'black', margin: '0 0 10px 0' }}>Resume</h1>
                <a href='https://spotify-clone-app.s3-us-west-2.amazonaws.com/Marco+Serrano+Resume.pdf' target='_blank' rel='noopener noreferrer'>View PDF</a>
            </div>
        </div>
    )
}

export default Resume