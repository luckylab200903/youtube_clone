import React from "react";
import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincomponent from "./components/Maincomponent";
import WatchPage from "./components/WatchPage";

function App() {
  // const isMenuOpen=useSelector(store=>store.app)
  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
          path:"/",
          element:<Maincomponent/>
        },
        {
          path:"watch",
          element:<WatchPage/>
        }
      ]
    }
  ]
)
  return (
    <Provider store={store}>
      <div>
        <Header />
        <RouterProvider router={AppRouter}/>
      </div>
    </Provider>
  );
}

export default App;
