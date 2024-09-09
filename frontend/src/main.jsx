import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BlogProvider from "./Context/BlogProvider";
import { AuthContextProvider } from "./Chat/context/AuthContext.jsx";
import { SocketContextProvider } from "./Chat/context/SocketContext.jsx";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlogProvider>
    <AuthContextProvider>
				<SocketContextProvider>
					<App />
				</SocketContextProvider>
			</AuthContextProvider>
    </BlogProvider>
  </React.StrictMode>
)
