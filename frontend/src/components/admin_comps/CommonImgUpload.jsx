import React, { useEffect, useRef } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FileIcon, UploadCloudIcon, XIcon } from 'lucide-react'
import { Button } from '../ui/button'
import axios from 'axios'

const CommonImgUpload = ({ file, setFile, uploadedImageUrl, setUploadedImageUrl }) => {

    const inputRef = useRef(null)

    const handleImageFileChange = (e) => {
        const selectedFile = e.target.files?.[0]
        if (selectedFile) {
            setFile(selectedFile)
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        const droppedFile = e.dataTransfer.files?.[0]
        if (droppedFile) setFile(droppedFile)
    }

    const handleFileRemove = (e) => {
        setFile(null)
        if (inputRef.current) {
            inputRef.current.value = ""
        }
    }

    // const handleCloudinaryUpload = async () => {
    //     const data = new FormData();
    //     data.append('my_file', file)
    //     const response = await axios.post('http://localhost:5000/api/admin/products/upload_image', data)
    //     // console.log(response.data);
    //     if (response) setUploadedImageUrl(response.data)
    // }

    const handleCloudinaryUpload = async () => {
        if (!file) {
            console.error("No file selected for upload.");
            return;
        }

        const data = new FormData();
        data.append('my_file', file);

        try {
            const response = await axios.post('http://localhost:5000/api/admin/products/upload_image', data);
            if (response && response.data) {
                setUploadedImageUrl(response.data);
            }
        } catch (error) {
            console.log("Upload failed:", error);
        }
    }


    useEffect(() => {
        if (file !== null) handleCloudinaryUpload()
    }, [file])


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
                        : <div className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <FileIcon className='w-8 text-primary h-8 mr-2' />
                            </div>
                            <p className='text-sm font-out_med'>
                                {file.name}
                            </p>

                            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" onClick={handleFileRemove}>
                                <XIcon className='w-4 h-4' /><span className='sr-only'>Remove</span>
                            </Button>
                        </div>
                }
            </div>
        </div>
    )
}

export default CommonImgUpload