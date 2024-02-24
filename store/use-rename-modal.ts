import {create} from "zustand"

const defaultValues = {id:"", title:""};

interface IrenameModal {
    isOpen:boolean;
    initialValues:typeof defaultValues;
    onOpen: (id:string,title:string)=>void;
    onClose: ()=>void;
}


export const useRenameModal = create<IrenameModal>(set=>({
    isOpen:false,

    onClose: ()=>set({isOpen:false,initialValues:defaultValues}),
    initialValues:defaultValues,
    onOpen: (id,title)=>set({isOpen:true,initialValues:{id,title}})
}))
