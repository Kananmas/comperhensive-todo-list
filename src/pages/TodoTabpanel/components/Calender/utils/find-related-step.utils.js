export const findRelatedStep = function (steps , day) {
    const targetDate = new Date(day);
    var target = steps.find((item) => {
        const itemDate = new Date(item.startDate);
        return itemDate.toDateString() === targetDate.toDateString();
    });


    return target;
}