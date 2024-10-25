import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import FormApi from './components/FormApi';
import TableApi from './components/TableApi';
import { useEffect } from 'react';
import { getUserAction } from './redux/actions/userActions';
import { useDispatch } from 'react-redux';
import Chart from './components/Chart';
import FormValidate from './components/FormValidate';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserAction())
  }, [])
  return (
    
    <div>
     {/* <Comp1/>
     <Comp2/> */}
     {/* <FormApi/>
     <TableApi/> */}
     {/* <Chart/> */}
     <FormValidate/>
    </div>
  );
}

export default App;
