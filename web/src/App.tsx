import { useEffect } from "react";
import { App, View, f7ready } from "framework7-react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// import { CssBaseline } from "@mui/material";
// import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  loadAllLibraries,
  loadAllLibrariesMaster,
  getData,
} from "./store/components/library/library";

import LeftPanel from "./panels/LeftPanel";
import Login from "./popup/Login/Login";
import Profile from "./popup/Profile/Profile";
import Register from "./popup/Register/Register";
import ChangeSite from "./popovers/ChangeSite";
import DynamicForm from "./popup/DynamicForm/DynamicForm";
import ReloadPrompt from "./ReloadPrompt";

import routes from "./routes";
import theme from "./styles/theme";

import "./App.scss";
import "./styles/theme-overrides.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const f7params = {
  // Array with app routes
  routes,
  // App Name
  name: "Food Ecommerce App",
  // ...
};

// function App() {
//   return (
//     <>
//       <CssBaseline />
//       <BrowserRouter>
//         <div className="container">
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//           <Footer />
//         </div>
//       </BrowserRouter>
//     </>
//   );
// }

function AppMain() {
  const dispatch = useAppDispatch();

  const allLibraries = useAppSelector(getData("library"));
  const allLibrariesMaster = useAppSelector(getData("libraryMaster"));

  console.log({ allLibraries });
  console.log({ allLibrariesMaster });

  useEffect(() => {
    dispatch(loadAllLibraries());
    dispatch(loadAllLibrariesMaster());
    f7ready((f7) => {
      // f7.dialog.alert("Component mounted");
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App {...f7params}>
        <View main url="/">
          <LeftPanel />
          <Login />
          <Profile />
          <Register />
          <DynamicForm />
          <ChangeSite />
          <Outlet />
          <ReloadPrompt />
        </View>
      </App>
    </ThemeProvider>
  );
}
export default AppMain;
