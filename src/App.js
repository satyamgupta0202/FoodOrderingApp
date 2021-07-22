import Header from "./components/Layout/header";
import React ,{Fragment} from 'react'
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header/>
    <Meals/>
    </Fragment>
  );
}

export default App;
