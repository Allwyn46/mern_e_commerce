import { UserCog } from 'lucide-react'
import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlignCenterVertical, ContainerIcon, PackageSearch, PocketKnife } from "lucide-react";

const adminMenuItems = [
  {
    id: 'admin_dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: <AlignCenterVertical />,
  },
  {
    id: 'admin_orders',
    label: 'Orders',
    path: '/admin/orders',
    icon: <ContainerIcon />,
  },
  {
    id: 'admin_products',
    label: 'Products',
    path: '/admin/products',
    icon: <PackageSearch />,
  },
  {
    id: 'admin_features',
    label: 'Features',
    path: '/admin/features',
    icon: <PocketKnife />,
  },
];

const MenuItems = () => {

  const navigate = useNavigate();

  return (
    <nav className='mt-8 flex flex-col gap-2'>
      {
        adminMenuItems.map((menuItem, index) => (
          <div className='font-out_reg flex items-center gap-2 rounded px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground' key={menuItem.id} onClick={() => navigate(menuItem.path)}>
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        ))
      }
    </nav>
  )
}

const AdminSidebar = () => {

  const navigate = useNavigate();

  return (
    <Fragment>
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
        <div onClick={() => navigate('/admin/dashboard')} className='flex items-center gap-2'>
          <UserCog />
          <h1 className='font-out_med text-lg cursor-pointer'>
            Admin Panel
          </h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  )
}

export default AdminSidebar