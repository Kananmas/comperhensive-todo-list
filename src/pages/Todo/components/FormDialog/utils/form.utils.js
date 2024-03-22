export function todoForm() {
    return [
        {name:"text" , title:"Title" , type:"input"  , placeholder:"todo title"},
        {name:"priority", title:"Priority" , type:"select" , defaultValue:"low", options:[
            {value:"low" , text:"Low"},
            {value:"medium" , text:"Medium"},
            {value:"high" , text:"High"},   
        ]},
        {name:"startDate", title:"Start Date" , type:"date" , defaultValue:new Date()},
        {name:"plannedEndDate", title:"Planned Date" , type:"date" , defaultValue:new Date()},
        {name:"endDate", title:"End Date" , type:"date" , defaultValue:new Date()},

    ]
}