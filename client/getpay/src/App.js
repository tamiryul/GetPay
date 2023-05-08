import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import InvoiceList from './components/InvoiceList/InvoiceList.js';
import NewInvoice from './components/NewInvoice/NewInvoice.js';
import Profile from './components/Profile/Profile.js';
import Header from './components/Header/Header.js';
import Links from './components/Links/Links.js';
import {Provider} from './components/Context/';
import ProfilesList from './components/profilesList/ProfilesList';




function App() {

  const allInvoices = [ {supplier:"Osem", debt:235},
                        {supplier:"Osem", debt:159},
                        {supplier:"Strauss", debt:98},
                        {supplier:"Strauss", debt:208},
                        {supplier:"Neto", debt:306},
                        {supplier:"Dip", debt:288},
                        {supplier:"Delifrost", debt:350},
                      ]

  const [debts, setDebts] = useState(allInvoices)
  const addDebt = (Debt) => {
        setDebts ([...debts, Debt])}
  
  const Debts = debts.map(item => item.debt).reduce((prev , curr, index) => prev + curr, 0);

  const [totalDebts, setTotalDebts] = useState(Debts)

  
  const [invoices, setInvoices] = useState (allInvoices)
  const [invoiceCounter, setInvoiceCounter] = useState(invoices.length)

  const addInvoice = (invoice) => {
        setInvoices ([...invoices, invoice])
  }


  return (
    <Provider>
        <div className="App">
          <Header />
            <BrowserRouter>
            <Links />
                <Routes>
                    <Route exact path="/main" element={<InvoiceList invoiceCounter = {invoiceCounter} addDebt = {addDebt} invoices = {invoices} totalDebts = {totalDebts} />} />
                    <Route exact path="/NewInvoice" element={<NewInvoice addInvoice = {addInvoice} />} />
                    <Route exact path="/Profile" element={<Profile />}/>
                    <Route exact path="/ProfilesList" element={<ProfilesList />}/>
                </Routes>
            </BrowserRouter>
        </div>
    </Provider>
      
  );
}

export default App;
