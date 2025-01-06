import CommonImgUpload from '@/components/admin_comps/CommonImgUpload'
import ProductTile from '@/components/admin_comps/ProductTile'
import CommonForm from '@/components/common/CommonForm'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { addProductFormElements } from '@/config/config'
import { addNewProduct, deleteProduct, editProduct, fetchAllProds } from '@/store/admin/product-slice/adminProdSlice'
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
    const [currentSelectedID, setCurrentSelectedID] = useState(null);
    const { productList } = useSelector((state) => state.adminProds);
    const isLoading = useSelector((state) => state.adminProds.isLoading);
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        currentSelectedID !== null
            ? dispatch(editProduct({
                id: currentSelectedID,
                formData
            })).then((data) => {
                if (data?.payload?.success) {
                    dispatch(fetchAllProds())
                    setOpenAddProductSheet(false)
                    setImageFile(null)
                    setFormData(initialFormData)
                    toast('Product Edited Successfully')
                }
            })
            : dispatch(addNewProduct({
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

    const isFormValid = () => {
        return Object.keys(formData).map(key => formData[key] !== '').every(item => item)
    }

    const handleDelete = (prodTobeDeleted) => {
        dispatch(deleteProduct(prodTobeDeleted))
            .then(data => {
                if (data?.payload?.success) {
                    dispatch(fetchAllProds())
                    toast('Product Deleted Successfully')
                }
            })
    }

    useEffect(() => {
        dispatch(fetchAllProds());
    }, [dispatch]);

    return (
        <Fragment>
            <div className='mb-5 w-full flex justify-end'>
                <Button onClick={() => setOpenAddProductSheet(true)}>
                    Add New Product
                </Button>
            </div>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
                {isLoading ? (
                    <p className='font-out_light text-center'>Loading products...</p>
                ) : productList && productList.length > 0 ? (
                    productList.map((prod) => <ProductTile
                        key={prod.id}
                        prod={prod}
                        setcurrentid={setCurrentSelectedID}
                        setOpen={setOpenAddProductSheet}
                        setFormData={setFormData}
                        handleDelete={handleDelete}
                    />)
                ) : (
                    <p className='font-out_light text-center'>No Products Found</p>
                )}
            </div>
            <Sheet open={openAddProductSheet} onOpenChange={() => {
                setOpenAddProductSheet(false)
                setCurrentSelectedID(null)
                setFormData(initialFormData)
            }}>
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader className="mb-3">
                        <SheetTitle className="font-out_semi text-xl">
                            {currentSelectedID !== null ? 'Edit Product' : 'Add New Product'}
                        </SheetTitle>
                    </SheetHeader>
                    <CommonImgUpload
                        file={imageFile}
                        setFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                        currentSelectedID={currentSelectedID !== null}
                    />
                    <div className='py-6'>
                        <CommonForm
                            formControls={addProductFormElements}
                            formData={formData}
                            setFormData={setFormData}
                            buttonText={currentSelectedID !== null ? 'Update' : 'Add Product'}
                            onSubmit={submit}
                            isBtnDisabled={!isFormValid()}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProds