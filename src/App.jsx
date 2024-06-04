import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar style={{ position: "sticky" }} />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/services" component={Services} />
          {/* Add other routes here */}
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
