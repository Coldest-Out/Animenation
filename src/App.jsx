import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import './App.css'

const router = createBrowserRouter([
  {
    path:'/',
    element:<span>Home</span>
  },
  {
    path:'/products/:id',
    element:<span>Category</span>
  },
  {
    path:'/product/:id',
    element:<span>Product</span>
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
