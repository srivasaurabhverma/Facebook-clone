import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./Stateprovider";
import Wedegets from "./Wedegets";

function App() {
   const [{user},dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Wedegets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
