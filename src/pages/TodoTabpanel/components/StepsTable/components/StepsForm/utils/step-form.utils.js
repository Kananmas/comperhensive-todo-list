export const stepForm = (data={}) => {
    return [
        {name:"stepIndex" , title:"Step Priorty" , type:"number" , defaultValue:data.stepIndex},
        {name:"stepTitle" , title:"Title" , type:"input" , defaultValue:data.stepTitle},
        {name:"stepDescription" , title:"Description" , type:"input" , defaultValue:data.stepDiscription},
        {name:"startDate" , title:"Started" , type:"date" , defaultValue:data.startDate},
        {name:"endDate" , title:"Ended" , type:"date" , defaultValue:data.endDate}
    ]
}