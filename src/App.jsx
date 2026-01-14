import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from './context/ConfigContext'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  )
}

export default App
