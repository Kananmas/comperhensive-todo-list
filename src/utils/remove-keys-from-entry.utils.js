export function removeKeysFromEntires(obj , filteredKey) {
    return Object.entries(obj).filter(([key ,value]) => {
        return !filteredKey.includes(key)
    })
}