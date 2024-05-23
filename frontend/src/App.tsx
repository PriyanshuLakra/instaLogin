import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Insta } from './pages/Insta'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/instagram" element={<Insta />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App