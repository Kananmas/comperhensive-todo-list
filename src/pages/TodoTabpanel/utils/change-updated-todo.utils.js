export function changeUpdatedTodo(data = [] , target) {
    return data.map((item) => {
        if(item.id != target.id) return item;
        return target;
    });
}