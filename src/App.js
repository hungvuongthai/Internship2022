import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import Validate from './components/formik/Formik';

function App() {
  return (
    <Routes>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Route exact path='/read' component={Read} />
        </div>
        <Route path='/update' component={Update} />
        <div style={{ marginTop: 20 }}>
          <Route exact path='/Form' component={Validate} />
        </div>
      </div>
    </Routes>
  );
}
export default App;