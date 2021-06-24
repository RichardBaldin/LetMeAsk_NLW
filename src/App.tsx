import { BrowserRouter, Route, Switch } from "react-router-dom";
//Switch não deixa com que duas rotas sejam chamadas ao mesmo tempo
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { AuthContextṔrovider } from "./contexts/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextṔrovider>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextṔrovider>
    </BrowserRouter>
  );
}

export default App;
