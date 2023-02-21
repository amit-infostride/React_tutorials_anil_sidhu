// import logo from './logo.svg';
import './App.css';
// import User from './components/User';
// import { ClickEventAndFunc } from './components/ClickEventAndFunc';
// import State from './components/State';
//  import StudentProps from './components/StudentProps';
// import GetInputBoxValue from './components/GetInputBoxValue';
// import HideShowToggle from './components/HideShowToggle';
// import HandleFormData from './components/HandleFormData';
// import BasicFormValidation from './components/BasicFormValidation'
// import ConditionalRendering from './components/ConditionalRendering';
// import PassFuncProps from './components/PassFuncProps';
// import PassFunc2 from './components/PassFunc2';
// import ConstructorFirstLifecycle from './components/ConstructorFirstLifecycle';
// import RenderLifeCycle from './components/RenderLifeCycle'
// import {useState} from 'react';
// import ComponentDidMountLifeCycle from './components/ComponentDidMountLifeCycle';
// import ComponentWillUnmount from './components/ComponentWillUnmount';
// import Hook from './components/Hook';
// import UseEffectHook from './UseEffectHook';
// import UseEffectWithStateAndProps from './components/UseEffectWithStateAndProps';
// ---------------------------------------------------
// import UseEffectWithProps from './components/UseEffectWithProps';
// import React, { useState } from 'react';
// --------------------------------------------------------
// import StyleInReact from './components/StyleInReact';
// import Bootstrap from './components/Bootstrap';
import HandleArrayWithList from './components/HandleArrayWithList';






function App() {

  // ----------------------------
  // {/* pass function as a props */}

  // function getData() {
  //   alert('hello from app')
  // }

  // -----------------------------

  // -----------------------------
  // Render Life cycle
  // const[name,setName ] = useState('anil')

  // ----------------use effect with props-------------

  // const [data, setData] = useState(10)
  // const [count, setCount] = useState(100);

  // ---------------------------------------

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
      {/* <BasicFormValidation /> */}

      {/* conditional rendering */}
      {/* <ConditionalRendering /> */}

      {/* pass function as a props */}   {/* pass function as a props  upar function ko uncomment karna hai   */}
      {/* <PassFuncProps data={getData} /> */}

      {/* <PassFunc2 /> */}

      {/* constructor life cycle */}
      {/* <ConstructorFirstLifecycle /> */}

      {/* Render life cycle */}

      {/* _______________________________________________________________ */}
      {/* Render life cycle props pe update  */}
      {/* <RenderLifeCycle  name={name}/> */}
      {/* <button onClick={()=>setName('sidhu')}>Update Name</button> */}


      {/* Render life cycle state pe update       / Render Life cycle  ko uncomment karna hai upar */}
      {/* <RenderLifeCycle  /> */}
      {/* _______________________________________________________________________- */}

      {/* Componenet did mount  */}
      {/* <ComponentDidMountLifeCycle/> */}

      {/* component will unmount */}
      {/* <ComponentWillUnmount /> */}
      {/* and Studentcompomnrn weill update ko bhi cjhalana hai  */}

      {/* Hooks */}
      {/* <Hook/> */}

      {/* UseEFfect hook */}
      {/* <UseEffectHook /> */}

      {/* useEffect on specific props and specific state  ke upar update kar sakte hai */}
      {/* <UseEffectWithStateAndProps /> */}

      {/* _______________________________________________________________________- */}
      {/* use effect with props */}
      {/* upar  function app ke niche use effect with props ko uncomment karo */}
      {/* <UseEffectWithProps count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setData(data + 1)}>Update data</button> */}
      {/* _______________________________________________________________________- */}

      {/* <StyleInReact/> */}

    {/* // bootstrap in react */}
     {/* <Bootstrap /> */}

  {/* handle array with list */}
  <HandleArrayWithList/>


    </div>
  );
}

export default App;
