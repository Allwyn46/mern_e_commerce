import CommonImgUpload from '@/components/admin_comps/CommonImgUpload'
import CommonForm from '@/components/common/CommonForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config/config'
import React, { useState } from 'react'
import { Fragment } from 'react'

const initialFormData = {
    image: null,
    title: '',
    description: '',
    category: '',
    brand: '',
    price: '',
    salePrice: '',
    totalStock: '',
}

const AdminProds = () => {

    const [openAddProductSheet, setOpenAddProductSheet] = useState(false)
    const [formData, setFormData] = useState(initialFormData)
    const [imageFile, setImageFile] = useState(null)
    const [uploadedImageUrl, setUploadedImageUrl] = useState('')

    const submit = () => {

    }

    return (
        <Fragment>
            <div className='mb-5 w-full flex justify-end'>
                <Button onClick={() => setOpenAddProductSheet(true)}>
                    Add New Product
                </Button>
            </div>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>

            </div>
            <Sheet open={openAddProductSheet} onOpenChange={() => { setOpenAddProductSheet(false) }}>
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader className="mb-3">
                        <SheetTitle className="font-out_semi text-xl">Add New Product</SheetTitle>
                    </SheetHeader>
                    <CommonImgUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} />
                    <div className='py-6'>
                        <CommonForm
                            formControls={addProductFormElements}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText="Add Product"
                            onSubmit={submit}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProds