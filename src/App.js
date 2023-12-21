
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { WeatherApp } from './components/Weather';
import { Main } from './ui-kit/Main';

function App() {
    const router = createBrowserRouter ( [
      {path:'/' , element: <Main />} ,
      {path:'header' , element: <WeatherApp />} ,
     
    ]

  )
  return (<RouterProvider router={router}></RouterProvider>)
}

export default App;

