import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Heading from './components/Heading';
import CombinedApp from './components/CombinedApp';
import Operators from './components/Operators';
import Result from './components/Result';
import Message from './components/Message';

function App() {
  return (
    <div className="App bg-black vh-100 ">
      <div  className='d-flex  flex-column justify-content-center align-items-start h-100 w-100 bg-black container' >
         <Heading />
         <CombinedApp />
         {/* <Operators />
         <Result />
         <Message /> */}
      </div>
     
    </div>
  );
}

export default App;
