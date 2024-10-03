import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const ProductTile = ({ prod }) => {
    return (
        <Card className="w-full max-w-sm mx-auto">
            <div>
                <div className='relative'>
                    <img
                        src={prod?.image}
                        alt={prod?.title}
                        className='w-full h-[300px] object-cover rounded-t-lg'
                    />
                </div>
                <CardHeader>
                    <CardTitle>{prod?.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <div className='flex justify-between items-center mb-2'>
                            <span>
                                ${prod?.price}
                            </span>
                        </div>
                    </CardDescription>
                </CardContent>
            </div>

        </Card>
    )
}

export default ProductTile