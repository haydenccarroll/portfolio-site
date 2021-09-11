import React from "react";
import { Document, Page, pdfjs } from "react-pdf";


import ResumeFile from "./../../assets/pdf/resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
    return (
        <div className="resume-section" >
            <div className="section-title">
                <h1>Resume</h1>
            </div>
            <div className="resume-content-wrapper">
                <Document file={ResumeFile} className="resume-document"> <Page renderMode="svg" pageNumber={1}  scale={1}/> </Document>
                <a href={ResumeFile} alt="Resume link" download>Click to download Resume</a>
            </div>
        </div>
    );
}