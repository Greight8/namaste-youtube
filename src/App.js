import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;