import { Outlet } from "react-router"
import { Toaster } from "sonner"

import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <>
      <Toaster visibleToasts={5} theme="dark" position="bottom-right" richColors={true} />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
