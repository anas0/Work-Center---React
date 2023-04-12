import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/job-details/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('featured-jobs.json')
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('featured-jobs.json')
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
