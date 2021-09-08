export function delSpace(arr) {
    const newArr = []
    arr.forEach(element => {
        if (element !== "") {
            newArr.push(element)
        }
    });
    return newArr
}