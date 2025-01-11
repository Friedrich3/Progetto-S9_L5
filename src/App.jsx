import "bootstrap/dist/css/bootstrap.min.css"
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MyHome from "./components/MyHome";
import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/SettingsPage";



function App() {
  return <>
  <MyNavbar />
  {/* <MyHome /> */}
  {/* <AccountPage /> */}
  <SettingsPage />
  <MyFooter />
  </>;
}

export default App;
