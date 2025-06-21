import FMain from "./pages/FMain/FMain";
import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
import About from "./pages/About/About";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about/",
    component: About,
  },
  // {
  //   path: "/login/",
  //   component: Login,
  // },
];

export default routes;
