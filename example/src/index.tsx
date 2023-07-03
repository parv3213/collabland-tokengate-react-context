import { TokenGateProvider } from 'collabland-tokengate-react-context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <TokenGateProvider>
      <App />
    </TokenGateProvider>
  </React.StrictMode>,
);
