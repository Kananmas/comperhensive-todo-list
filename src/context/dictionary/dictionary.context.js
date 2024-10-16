import { createContext } from "react";

const words = {
    en: {
        steptitle: "Title",
        title: "Title",
        priority: "Priority",
        startdate: "Start",
        enddate: "End",
        plannedenddate: "Closing Date",
        stepdiscription: "Discription",
        discription: "Discription",
        signin: "Sign In",
        signup: "Sign Up",
        logout: "Log Out",
        english: "English",
        persian: "Persian",
        chinese: "Chinese",
        edittodo: "Edit Todo",
        todosteps: "Todo Steps",
        timeline:"Time Line",
        calender:"Calender",
        showdetails:"Show Details",
        username:"User Name",
        email:"Email",
        password:"Password",
        name:"Name",
        description:"Description",
        "no end date specified": "NO END DATE SPECIFIED"
    }
    ,
    fa: {
        steptitle: "عنوان مرحله",
        title: "عنوان",
        priority: "اولویت",
        startdate: "روز شروع",
        enddate: "روز پایان",
        plannedenddate: "مهلت انجام تا",
        stepdiscription: "توضیحات مرحله",
        discription: "توضیحات",
        signin: "ورود کاربر",
        signup: "ثبت نام",
        logout: "خروج کاربر",
        english: "انگلیسی",
        persian: "فارسی",
        chinese:"چینی",
        edittodo: "تغییر جزییات",
        todosteps: "مراحل کار",
        timeline:"خط زمانی",
        calender:"تقویم کار",
        actions:"اقدامات",
        isdone:"تمام شده؟",
        text:"عنوان",
        id:"شناسه",
        delete:"حذف",
        showdetails:"نامیش جزییات",
        username:"نام کاربری",
        email:"ایمیل",
        password:"کلمه عبور",
        name:"نام",
        description:"توضیحات",
        stepindex:"اولویت مرحله",
        high:"بالا",
        medium:"معمولی",
        low:"پایین",
        "no end date specified": "تاریخی مشخص نشده"
    },
    ch: {
        steptitle: "阶段标题",
        title: "标题",
        priority: "优先级",
        startdate: "开始日期",
        enddate: "结束日期",
        plannedenddate: "预计完成日期", // More natural translation
        stepdiscription: "阶段描述",
        discription: "描述",
        signin: "用户登录",
        signup: "用户注册",
        logout: "用户注销",
        english: "英语",
        persian: "波斯语",
        chinese:"汉语",
        edittodo: "编辑任务",
        todosteps: "任务步骤",
        timeline: "时间线",
        calender: "工作日历",
        actions: "操作",
        isdone: "完成了嗎？", 
        text: "标题",
        id: "标识符",
        delete: "删除",
        showdetails: "显示详细信息",
        username:"用户名",
        email:"电子邮件",
        password:"密码",
        name:"姓名",
        description:"描述",
        stepindex:"步骤优先级",
        high:"高的",
        low:"低的",
        medium:"中等的",
        "no end date specified": "未指定结束日期",
      }
}


export const context = {
    lang: "en",
    words: words
}

const setContext = () => {

}

export const dictionaryContext = createContext([context, setContext]); 