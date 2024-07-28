
import { Button } from '@/components/ui/button'
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'

const CreateRole = () => {
    return (
        <>
            <Dialog>
                <DialogTrigger>Create new role</DialogTrigger>
                <DialogContent>
                    <DialogHeader className='space-y-3'>
                        <DialogTitle>Create role</DialogTitle>
                        <DialogDescription >
                            <form className='space-y-3' action="">
                                <Input />
                                <Button>Create</Button>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateRole