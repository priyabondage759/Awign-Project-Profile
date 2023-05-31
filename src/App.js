import "./styles.css";
// import "./App.css";
import hub from "./hub.jpg";
import { ProfileList } from "./Components/ProfileList";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hub} width='200' alt="logo" />
      </header>
      <ProfileList />
    </div>
  );
}
