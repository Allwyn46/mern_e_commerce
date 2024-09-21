import { UserCog } from 'lucide-react'
import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlignCenterVertical, ContainerIcon, PackageSearch, PocketKnife } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet';

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

const MenuItems = ({ setOpen }) => {

  const navigate = useNavigate();

  return (
    <nav className='mt-8 flex flex-col gap-2'>
      {
        adminMenuItems.map((menuItem, index) => (
          <div className='font-out_reg cursor-pointer flex items-center gap-2 rounded px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground' key={menuItem.id} onClick={() => navigate(menuItem.path)}>
            {menuItem.icon}
            <span>{menuItem.label}</span>
          </div>
        ))
      }
    </nav>
  )
}

const AdminSidebar = ({ open, setOpen }) => {

  const navigate = useNavigate();

  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className='flex flex-col h-full'>
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5"><UserCog /> Admin Panel</SheetTitle>
            </SheetHeader>
            <MenuItems />
          </div>
        </SheetContent>
      </Sheet>
      <aside className='hidden w-64 flex-col border-r bg-background p-6 lg:flex'>
        <div onClick={() => {
          navigate('/admin/dashboard')
          setOpen ? setOpen(false) : null
        }} className='flex items-center gap-2'>
          <UserCog />
          <h1 className='font-out_med text-lg cursor-pointer'>
            Admin Panel
          </h1>
        </div>
        <MenuItems setOpen={setOpen} />
      </aside>
    </Fragment>
  )
}

export default AdminSidebar