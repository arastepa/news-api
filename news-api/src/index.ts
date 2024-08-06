import App from './components/app/app';
import './global.css';

const app: App = new App(process.env.API_URL, process.env.API_KEY);
app.start();
