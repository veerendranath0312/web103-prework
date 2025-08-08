import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

import "./index.css"
import App from "./App.jsx"
import ShowCreatorsPage from "./pages/ShowCreators/ShowCreatorsPage.jsx"
import AddCreatorPage from "./pages/AddCreator/AddCreatorPage.jsx"
import EditCreatorPage from "./pages/EditCreator/EditCreatorPage.jsx"
import ViewCreatorPage from "./pages/ViewCreator/ViewCreatorPage.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<ShowCreatorsPage />} />
          <Route path="add" element={<AddCreatorPage />} />
          <Route path="edit/:id" element={<EditCreatorPage />} />
          <Route path="view/:id" element={<ViewCreatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
