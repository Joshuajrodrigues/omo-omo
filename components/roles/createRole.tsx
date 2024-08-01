"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { createRole, deleteRole, editRole } from '@/actions/roles'
import { toast } from "sonner"
import { Trash } from 'lucide-react'

//TODO rename this to something generic
const CreateRole = ({ trigger, title, initialValue, action, id }:
    { trigger: any, id?: string, title: any, initialValue?: any, action: "Create" | "Edit" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('')
    useEffect(() => {
        console.log("initialValue", initialValue);

        setValue(initialValue)
    }, [initialValue])
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button onClick={handleOpen}> {trigger}</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader className='space-y-3'>

                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription >
                            <form className='space-y-3' action={async (formData: FormData) => {

                                if (action === "Create") {
                                    const roleName: string = formData.get('roleName') as string;
                                    await createRole({ roleName })
                                    toast.success("Role has been created.")
                                    handleClose()

                                } else if (action === "Edit") {
                                    const roleName: string = formData.get('roleName') as string;
                                    await editRole({ roleName, id: id! })
                                    toast.success("Role has been edited.")
                                    handleClose()
                                }
                            }}>
                                <Input value={value} onChange={(e) => setValue(e.target.value)} name='roleName' required aria-required />
                                <div className=' flex flex-row-reverse items-center justify-center gap-10'>
                                    <Button type="submit" >{action}</Button>
                                    {
                                        action === "Edit" &&
                                        <Button type="button" variant={"destructive"} onClick={async () => {
                                            await deleteRole({ id: id! })
                                            handleClose()
                                            toast.success("Role has been deleted.")
                                        }} >
                                            <Trash />
                                        </Button>
                                    }
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default CreateRole