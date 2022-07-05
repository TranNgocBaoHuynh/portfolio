import React from 'react';
import Viewer,{Worker} from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import file from '../TranHuynh_CV.pdf';

function Resume(){
    return (
        <div className='Res'>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
            <div style={{ height: '750px' }}>
                <Viewer fileUrl={file} />
            </div>
        </Worker>
        </div>
      );
}

export default Resume;