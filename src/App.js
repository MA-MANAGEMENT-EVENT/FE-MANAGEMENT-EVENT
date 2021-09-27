import "./App.css";
import Template from "./templates/Template";
import { UserProvider } from "./context/UserContext";
function App() {
  return (
    <UserProvider>
      <Template />
    </UserProvider>
  );
}

export default App;
