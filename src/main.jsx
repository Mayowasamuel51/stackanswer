import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './layout/Login'
import Dashboard from './layout/Dashboard';
import axios from "axios";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
// routes/pages
import AskAQuestion from './pages/AskAQuestion';
import SeeAllQuestions from './pages/SeeAllQuestions';
import MeetTheTeam, { questionLoader } from './pages/MeetTheTeam';
import CreateAnswer from './components/CreateAnswer';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "createanswer/:question/:problem_title/:id",
    element: <CreateAnswer />,

  },

  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "questions/ask",
        element: <AskAQuestion />
      },
      {
        path: "questions/see-all",
        element: <SeeAllQuestions />
      },
      {
        path: "team",
        element: <MeetTheTeam />,
        loader: questionLoader

      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>

  </React.StrictMode>,
)
