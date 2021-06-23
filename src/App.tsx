import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextṔrovider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextṔrovider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextṔrovider>
    </BrowserRouter>
  );
}

export default App;
