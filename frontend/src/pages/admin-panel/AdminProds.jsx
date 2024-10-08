import CommonImgUpload from '@/components/admin_comps/CommonImgUpload'
import CommonForm from '@/components/common/CommonForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config/config'
import { addNewProduct, fetchAllProds } from '@/store/admin/product-slice/adminProdSlice'
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'

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
    const [imageLoadingState, setImageLoadingState] = useState(false)
    const { productList } = useSelector(state => state.adminProds)
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addNewProduct({
            ...formData,
            image: uploadedImageUrl
        })).then((data) => {
            if (data?.payload?.success) {
                dispatch(fetchAllProds())
                setOpenAddProductSheet(false)
                setImageFile(null)
                setFormData(initialFormData)
                toast('Product Added Successfully')
            }
        })
    }

    useEffect(() => {
        dispatch(fetchAllProds)
    }, [dispatch])

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
                    <CommonImgUpload file={imageFile} setFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl} setImageLoadingState={setImageLoadingState} imageLoadingState={imageLoadingState} />
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