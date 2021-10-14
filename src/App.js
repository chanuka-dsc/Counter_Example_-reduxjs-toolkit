import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Fragment>
      <Header />
      {loggedIn && <UserProfile />}
      {!loggedIn && <Auth />}
      {loggedIn && <Counter />}
    </Fragment>
  );
}

export default App;
