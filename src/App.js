import { Fragment } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!auth ? <Auth /> : <UserProfile />}
      <Counter />
      {/* <CounterClass /> */}
    </Fragment>
  );
}

export default App;
