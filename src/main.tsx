import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import './index.css'
import App from './App'
import { Counter, PassGenerator, Carousel, TodoList } from './components'

// const routes = createBrowserRouter([
//   {
//     path: '/',
//     Component: App,
//     children: [
//       {
//         path: 'counter',
//         Component: Counter
//       },
//       {
//         path: 'pass-generator',
//         Component: PassGenerator
//       },
//       {
//        path: 'carousel',
//        Component: Carousel
//       }
//     ]
//   }
// ]);

{/*
  Why use element vs Component:
  https://reactrouter.com/en/main/start/faq#why-does-route-have-an-element-prop-instead-of-render-or-component
*/}

const routes = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='counter' element={<Counter />} />
    <Route path='pass-generator' element={<PassGenerator />} />
    <Route path='carousel' element={<Carousel />} />
    <Route path='todo' element={<TodoList />} />
  </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
