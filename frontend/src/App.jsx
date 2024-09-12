import { Route, Routes } from 'react-router-dom'
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
import ShoppingHome from './pages/shopping/ShoppingHome'
import ShoppingProducts from './pages/shopping/ShoppingProducts'
import Checkout from './pages/shopping/Checkout'
import ShoppingAccount from './pages/shopping/ShoppingAccount'
import CheckAuth from './components/common/CheckAuth'
import UnAuth from './pages/others/UnAuth'

function App() {

  const isAuthenticated = false;
  const user = {
    name: 'Allwyn',
    role: 'user'
  };

  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      <Routes>

        {/* AUTH ROUTES */}

        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        {/* ADMIN ROUTES */}

        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProds />} />
          <Route path='features' element={<AdminFeatures />} />
        </Route>

        {/* SHOPPING ROUTES */}

        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <ShoppingLayout />
          </CheckAuth>
        }>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='products' element={<ShoppingProducts />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='account' element={<ShoppingAccount />} />
        </Route>

        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorized' element={<UnAuth />} />

      </Routes>
    </div>
  )
}

export default App
