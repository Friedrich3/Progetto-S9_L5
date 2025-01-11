import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import AccountPage from "./components/AccountPage";



function App() {
  return <>
  <MyNavbar />
  {/* <MyHome /> */}
  <AccountPage />
  <MyFooter />
  </>;
}

export default App;
