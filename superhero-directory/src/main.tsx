import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SuperheroListPage } from '~pages/superhero-list/superhero-list-page';
import { SuperheroPage } from '~pages/superhero/superhero-page';

import { Theme } from '@radix-ui/themes';

import { Layout } from './app/layout/layout';
import { Providers } from './app/providers';
import './root.css';

import '@radix-ui/themes/styles.css';

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Theme>
          <Layout>
            <Routes>
              <Route path="/" element={<SuperheroListPage />} />
              <Route path=":id" element={<SuperheroPage />} />
            </Routes>
          </Layout>
        </Theme>
      </BrowserRouter>
    </Providers>
  );
}

export default App;

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
