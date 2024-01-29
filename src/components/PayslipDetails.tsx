import React from 'react';
import { useParams } from 'react-router-dom';
import { Capacitor, Plugins } from '@capacitor/core';
const { FileDownload } = Plugins;

interface Payslip {
  id: number;
  fromDate: string;
  toDate: string;
  file: string; // File path or URL
}

const PayslipDetails: React.FC<{ payslips: Payslip[] }> = ({ payslips }) => {
  const { id } = useParams<{ id: string }>();
  const selectedPayslip = payslips.find((payslip) => payslip.id === Number(id));

  if (!selectedPayslip) {
    return <div>Payslip not found</div>;
  }

  const handleDownload = () => {
    // Use Capacitor plugin for native file download
    if (Capacitor.isNative) {
        FileDownload.downloadFile({ fileUrl: selectedPayslip.file })
            .then(() => console.log('File downloaded successfully'))
            .catch((error: any) => console.error('File download failed', error));
    } else {
        // Create a link element
        const link = document.createElement('a');
        link.href = selectedPayslip.file;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        // Trigger a click event on the link
        document.body.appendChild(link);
        link.click();

        // Remove the link from the document
        document.body.removeChild(link);
    }
  };


  return (
    <div>
      <h1>Payslip Details</h1>
      <p>ID: {selectedPayslip.id}</p>
      <p>Period: {`${selectedPayslip.fromDate} to ${selectedPayslip.toDate}`}</p>
      <button onClick={handleDownload}>Download Payslip</button>
    </div>
  );
};

export default PayslipDetails;
