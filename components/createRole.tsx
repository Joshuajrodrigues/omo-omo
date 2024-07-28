"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { createRole } from '@/actions/roles'

const CreateRole = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen}>
                <DialogTrigger asChild>
                    <Button onClick={handleOpen}>Create new role </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className='space-y-3'>
                        <DialogTitle>Create role</DialogTitle>
                        <DialogDescription >
                            <form className='space-y-3' action={async (formData: FormData) => {

                                const roleName: string = formData.get('roleName') as string;

                                await createRole({ roleName })
                                handleClose()
                            }}>
                                <Input name='roleName' required aria-required />
                                <Button type="submit" >Create</Button>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateRole