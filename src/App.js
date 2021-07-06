import { Fragment } from "react";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  return (
    <Fragment>
      <Header />
      <Auth />
      <Counter />
      {/* <CounterClass /> */}
    </Fragment>
  );
}

export default App;
