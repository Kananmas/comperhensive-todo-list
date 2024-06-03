import { createContext } from "react";

const words = {
    en:{
        steptitle:"Title",
        title:"Title",
        priorty:"Priority",
        startdate:"Start",
        enddate:"End",
        plannedenddate:"Closing Date",
        stepdiscription:"Discription",
        discription:"Discription",
        logout:"Log Out"
    }
    ,
    fa:{
        steptitle:"عنوان مرحله",
        title:"عنوان",
        priorty:"الویت",
        startdate:"روز شروع",
        enddate:"روز پایان",
        plannedenddate:"مهلت انجام تا",
        stepdiscription:"توضیحات مرحله",
        discription:"توضیحات",
        signin:"ورود کاربر",
        signup:"ثبت نام",
        logout:"خروج کاربر"
    }
}


export const context = {
    lang:"en",
    words:words
}

const  setContext = () => {

}

export const dictionaryContext = createContext([context, setContext]); 