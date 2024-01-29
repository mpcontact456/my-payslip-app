import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PayslipList from './components/PayslipList';
import PayslipDetails from './components/PayslipDetails';

const payslips = [
  { id: 1, fromDate: '2022-01-01', toDate: '2022-01-15', file: 'https://user-images.githubusercontent.com/236501/105104854-e5e42e80-5a67-11eb-8cb8-46fccb079062.png' },
  { id: 2, fromDate: '2022-02-01', toDate: '2022-02-15', file: 'https://dontpaniclabs.com/wp-content/uploads/2019/11/ionic-capacitor.png' },
  { id: 3, fromDate: '2022-03-01', toDate: '2022-03-15', file: 'https://dontpaniclabs.com/wp-content/uploads/2019/11/ionic-capacitor.png' },
  { id: 4, fromDate: '2022-04-01', toDate: '2022-04-15', file: 'https://dontpaniclabs.com/wp-content/uploads/2019/11/ionic-capacitor.png' },
  { id: 5, fromDate: '2022-05-01', toDate: '2022-05-15', file: 'https://dontpaniclabs.com/wp-content/uploads/2019/11/ionic-capacitor.png' },

  // Add more payslips as needed
];

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<PayslipList payslips={payslips} />} />
      <Route path='/payslip/:id' element={<PayslipDetails payslips={payslips} />} />
      </Routes>
    </Router>
  );
};

export default App;
