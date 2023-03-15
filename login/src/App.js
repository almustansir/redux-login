import { useSelector } from "react-redux";
import "./App.css";
import LoginComp from "./components/LoginComp";
import LogoutComp from "./components/LogoutComp";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return <div className="App">{user ? <LogoutComp /> : <LoginComp />}</div>;
}

export default App;
