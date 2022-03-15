// import './App.css';
import Routing from "./Routing";
import { Provider } from "react-redux";
import store from './store/store'

//import Sneakervault from "./Sneakervault";

function App() {
  return (
    <>
    <Provider store={store}>
        {/* <Sneakervault/> */}
        <Routing />
    </Provider>
    </>
  );
}

export default App;
