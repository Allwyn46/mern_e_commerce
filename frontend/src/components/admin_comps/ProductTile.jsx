import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { SquarePen, Trash } from 'lucide-react'

const ProductTile = ({ prod, setcurrentid, setOpen, setFormData, handleDelete }) => {
    console.log(prod)
    return (
        <Card className="w-full max-w-sm mx-auto">
            <div>
                <div className='relative'>
                    <img
                        src={prod?.image}
                        alt={prod?.title}
                        className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                </div>
                <CardHeader>
                    <CardTitle>{prod?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <div className='flex justify-between items-center mb-2'>
                            <span className={`${prod?.salePrice > 0 ? 'line-through' : ''}text-lg font-out_med text-primary`}>
                                ${prod?.price}
                            </span>
                            <span className='text-lg font-out_semi'>
                                ${prod?.salePrice}
                            </span>
                        </div>
                    </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-4 items-center">
                    <Button variant="outline" onClick={() => {
                        setOpen(true)
                        setcurrentid(prod?._id)
                        setFormData(prod)
                    }}>
                        <SquarePen />
                    </Button>
                    <Button variant="destructive" onClick={() => handleDelete(prod?._id)}>
                        <Trash />
                    </Button>
                </CardFooter>
            </div>

        </Card>
    )
}

export default ProductTile