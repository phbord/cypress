import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="container my-4">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
