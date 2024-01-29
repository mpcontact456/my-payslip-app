import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Payslip {
  id: number;
  fromDate: string;
  toDate: string;
  file: string; // File path or URL
}

interface PayslipListProps {
  payslips: Payslip[];
}

const PayslipList: React.FC<PayslipListProps> = ({ payslips }) => {
  const navigate = useNavigate();

  const handlePayslipClick = (id: number) => {
    navigate(`/payslip/${id}`);
  };

  return (
    <div>
      <h1>Payslips</h1>
      <ul>
        {payslips.map((payslip) => (
          <li key={payslip.id} onClick={() => handlePayslipClick(payslip.id)}>
            {`${payslip.fromDate} to ${payslip.toDate}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PayslipList;
