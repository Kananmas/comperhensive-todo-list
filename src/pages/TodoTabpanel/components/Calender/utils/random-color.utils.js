export const randomColor = () => {
    const colorRangePircker = () => Math.floor(Math.random()  * 255)

    const bgColor = `rgb(${colorRangePircker()} ,
    ${colorRangePircker()} , ${colorRangePircker()})`


    return bgColor;
}