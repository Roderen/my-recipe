import 'normalize.css';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider } from 'react-query';

const quertClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={quertClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
