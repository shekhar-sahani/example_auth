import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GoogleLoginComponent from "./GoogleLoginComponent";
// import FacebookLoginComponent from "./FacebookLoginComponent";

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <GoogleLoginComponent />
      {/* <FacebookLoginComponent /> */}
    </div>
  );
}

export default App;
