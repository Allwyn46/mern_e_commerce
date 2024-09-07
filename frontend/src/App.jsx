import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLayout from './components/auth/AuthLayout'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AdminLayout from './components/admin_comps/AdminLayout'
import AdminDashboard from './pages/admin-panel/AdminDashboard'
import AdminOrders from './pages/admin-panel/AdminOrders'
import AdminProds from './pages/admin-panel/AdminProds'
import AdminFeatures from './pages/admin-panel/AdminFeatures'
import ShoppingLayout from './components/shopping_comps/ShoppingLayout'
import NotFound from './pages/others/NotFound'

function App() {

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>

        {/* AUTH ROUTES */}

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* ADMIN ROUTES */}

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProds />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>

        {/* SHOPPING ROUTES */}

        <Route path='/shop' element={<ShoppingLayout />}>
          <Route />
        </Route>

        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App
