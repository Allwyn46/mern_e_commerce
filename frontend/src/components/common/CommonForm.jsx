import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const fieldTypes = {
    INPUT: 'input',
    SELECT: 'select',
    TEXTAREA: 'textarea'
}

const CommonForm = ({ formControls, formData, setFormData, onSubmit, buttonText }) => {

    // RENDERING INPUTS BASED ON COMPONENT TYPE MENTIONED IN THE CONFIG JS

    const renderInputs = (controlItem) => {
        let element = null

        // SETTING THE INPUT VALUES AS THE NAMES INITIALLY

        const controlValue = formData[controlItem.name || '']

        switch (controlItem.componentType) {
            case fieldTypes.INPUT:
                element = <Input
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    type={controlItem.type}
                    value={controlValue}
                    onChange={(event) => setFormData({
                        ...formData,
                        [controlItem.name]: event.target.value
                    })}
                />
                break;

            case fieldTypes.SELECT:
                element = (
                    <Select onValueChange={(value) => setFormData({ ...formData, [controlItem.name]: value })} value={controlValue}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder={controlItem.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                controlItem.options && controlItem.options.length > 0
                                    ? controlItem.options.map((option) => (
                                        <SelectItem key={option.id} value={option.id}>
                                            {option.label}
                                        </SelectItem>
                                    ))
                                    : null
                            }
                        </SelectContent>
                    </Select>
                )
                break;

            case fieldTypes.TEXTAREA:
                element = (
                    <Textarea
                        name={controlItem.name}
                        placeholder={controlItem.placeholder}
                        id={controlItem.name}
                        value={controlValue}
                        onChange={(event) => setFormData({
                            ...formData,
                            [controlItem.name]: event.target.value
                        })}
                    />
                )
                break;

            default:
                element = <Input
                    name={controlItem.name}
                    placeholder={controlItem.placeholder}
                    id={controlItem.name}
                    type={controlItem.type}
                    value={controlValue}
                    onChange={(event) => setFormData({
                        ...formData,
                        [controlItem.name]: event.target.value
                    })}
                />
                break;
        }

        return element
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-3'>
                {
                    formControls.map((control) => (
                        <div key={control.name} className='grid w-full gap-1.5 mb-2'>
                            <Label className="mb-1 text-left">
                                {control.label}
                            </Label>

                            {/* RENDERING DYNAMIC INPUTS */}

                            {renderInputs(control)}
                        </div>
                    ))
                }
            </div>

            <Button type="submit" className="mt-3 w-full">
                {buttonText || 'Submit'}
            </Button>

        </form>
    )
}

export default CommonForm