import { Provider } from "react-redux";
import Body from "../src/components/Body";
import appStore from "./utils/appStore";



function App() {


  
  return (
    <div>
      <Provider store = {appStore}>
        
      <Body />
      </Provider>
    </div>
  );
}

export default App;
