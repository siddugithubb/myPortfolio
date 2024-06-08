import React from 'react';
import Pageheader from '../../components/Pageheader';
import {BsFileEarmarkTextFill} from 'react-icons/bs'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import './style.scss';

export default function Resume() {
  const resumeUrl = '/Resume.pdf';
  return (
    <section>
    <Pageheader
    headerText="Resume"
    icon = {<BsFileEarmarkTextFill size={40} />}
    />
    <div className="resume-container">
      <h1>My Resume</h1>
      <div className="resume-viewer">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`}>
          <Viewer fileUrl={resumeUrl} />
        </Worker>
      </div>
      <Button 
        variant="contained" 
        color='secondary'
        startIcon={<DownloadIcon />} 
        href={resumeUrl} 
        download="Resume.pdf"
        className="download-button"
      >
        Download Resume
      </Button>
    </div>
  </section>
  )
}
