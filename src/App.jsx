import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Hämta sidorna
import { Home } from "./pages/home";
import { AddCard } from "./pages/addCard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      //errorElement: <Error/>
    },
    {
      path: "/addCard",
      element: <AddCard />,
      //errorElement: <Error/>
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
