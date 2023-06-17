
import './App.css';
import Header from './components/Header'
import Home from './views/Home';
import MyComponent from './demo/sendTransac';
function App() {
  return (
    <div className="App">
      <Header/>

      <div>
        <Home/>
      </div>
      <div>
        <MyComponent/>
      </div>
    </div>
  );
}

export default App;
