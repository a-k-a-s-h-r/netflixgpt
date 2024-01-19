import React, { useEffect } from 'react';
import { Login } from './Login';
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    const appRouting = createBrowserRouter(
        [
            {path: '/',
             element: <Login />
            },
            {path: '/Browse',
             element: <Browse />
            }
        ]
    )
    

  return (
    <div>
        <RouterProvider router={appRouting} />
    </div>
  )
}

export default Body