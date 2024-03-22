export function todoForm(data = {}) {
    return [
        {name:"text" , title:"Title" , type:"input"  , placeholder:"todo title" , defaultValue:data.text},
        {name:"priority", title:"Priority" , defaultValue:data.priority , type:"select" , defaultValue:"low", options:[
            {value:"low" , text:"Low"},
            {value:"medium" , text:"Medium"},
            {value:"high" , text:"High"},   
        ]},
        {name:"startDate", title:"Start Date" , type:"date" , defaultValue:new Date() , defaultValue:data.startDate},
        {name:"plannedEndDate", title:"Planned Date" , type:"date" , defaultValue:new Date() , defaultValue:data.plannedEndDate},
        {name:"endDate", title:"End Date" , type:"date" , defaultValue:new Date() , defaultValue:data.endDate},

    ]
}