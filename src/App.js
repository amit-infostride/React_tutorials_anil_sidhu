// import logo from './logo.svg';
import './App.css';
// import User from './components/User';
// import { ClickEventAndFunc } from './components/ClickEventAndFunc';
// import State from './components/State';
//  import StudentProps from './components/StudentProps';
// import GetInputBoxValue from './components/GetInputBoxValue';
// import HideShowToggle from './components/HideShowToggle';
// import HandleFormData from './components/HandleFormData';
import BasicFormValidation from './components/BasicFormValidation'

function App() {
  return (
    <div className="App">
    <h1 > React </h1>
      {/* <User /> */}

      {/* CLick event and function */}
       {/* < ClickEventAndFunc />      */}
 
        {/* State */}
       {/* <State /> */}
 
       {/* Props */}

       {/* <StudentProps name ={'anil'} email="anil@gmail.com" other={{address:"mumbai",mobile:"9729292845"}} /> */}
       {/* <StudentProps name ={'peter'}  /> */}
       {/* <StudentProps name ={'priti'}  /> */}

       {/* <StudentProps name={'anil'} /> */}

     {/* input box value */}
     {/* <GetInputBoxValue /> */}

     {/* hide show and toggle */}
     {/* <HideShowToggle />  */}
       
     {/* handle form data */}
     {/* <HandleFormData /> */}

     {/* form validation */}
     <BasicFormValidation />



    </div>
  );
}

export default App;
