import { Provider } from "react-redux";
import store from "./app/store";
import AppRouter from "./router/Router";
const App = () => {
  
  return (
    <div>
      <Provider store={store}>
        < AppRouter / >
      </Provider>
      
    </div>
  );
};

export default App;
