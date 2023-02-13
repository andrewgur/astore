import React from 'react';
import { Route, Routes } from 'react-router';
import { Page } from './components/Page/Page';
import { PAGE_ALFA, PAGE_CART, PAGE_CONTACTS, PAGE_CUSTOM, PAGE_POLICY } from './constants/pages';
import { AlfaMadePage } from './pages/AlfaMadePage';
import { CartPage } from './pages/CartPage';
import { ContactsPage } from './pages/ContactsPage';
import { CustomMadePage } from './pages/CustomMadePage';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { PolicyPage } from './pages/PolicyPage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path={PAGE_ALFA} element={<AlfaMadePage />} />
        <Route path={PAGE_CUSTOM} >
          <Route index element={<CustomMadePage />} />
          <Route path=':id' element={<ProductPage />} />
        </Route>
        <Route path={PAGE_CONTACTS} element={<ContactsPage />}/>
        <Route path={PAGE_CART} element={<CartPage />}/>
        <Route path={PAGE_POLICY} element={<PolicyPage />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
