import React, { useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { UploadCloudIcon } from 'lucide-react'

const CommonImgUpload = ({ file, setFile, uploadedImageUrl, setUploadedImageUrl }) => {

    const inputRef = useRef(null)

    const handleImageFileChange = (e) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
    }

    const handleDragOver = (e) => {

    }

    const handleDrop = (e) => {

    }

    return (
        <div className='w-full max-w-md mx-auto mt-4'>
            <Label className="text-md font-out_reg mb-4">Upload Image</Label>
            <div onDragOver={handleDragOver} onDrop={handleDrop} className='border-2 border-dashed rounded-lg p-4 mt-2'>
                <Input id="prod_image_upload" type="file" className="hidden" ref={inputRef} onChange={handleImageFileChange} />
                {
                    !file
                        ? <Label htmlFor="prod_image_upload" className="flex flex-col items-center justify-center h-32 cursor-pointer">
                            <UploadCloudIcon className='w-10 h-10 text-muted-foreground mb-3' />
                            <span>Drag & Drop or Click to upload image</span>
                        </Label>
                        : <div></div>
                }
            </div>
        </div>
    )
}

export default CommonImgUpload