import React from 'react';
import { Route, Routes } from 'react-router';
import { Page } from './components/Page/Page';
import { AlfaMadePage } from './pages/AlfaMadePage';
import { CartPage } from './pages/CartPage';
import { ContactsPage } from './pages/ContactsPage';
import { CustomMadePage } from './pages/CustomMadePage';
import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<HomePage />} />
        <Route path="/by-alfa" element={<AlfaMadePage />}/>
        <Route path="/custom" element={<CustomMadePage />}/>
        <Route path="/contacts" element={<ContactsPage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
