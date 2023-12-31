import './App.css';
import { illustration_1_mobile } from './assets/illustrations/mobile';
import { pino_logo } from './assets/logo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='uc__main flex-column'>
      <div className='flex-centered flex-column'>
        <img src={pino_logo} alt='Pino Loqo' className='uc__main_pino-logo'/>
        <div className='uc__main_soon-text'>
          Tezliklə.
        </div>
      </div>
      <img src={illustration_1_mobile} alt="Pino İllustrasiya" className='uc__main_illustration-mobile'/>
    </div>
  );
}

export default App;
