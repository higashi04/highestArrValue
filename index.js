const numbers = [0, 1, 2, 3, 4, 5, 55, 6, 89, 78642, 782154, 9, 15, 23];

const encuentraElMayor = (arr) => {
    if(!Array.isArray(arr) || arr.length === 0) {
        throw new Error("Error: debe de proveer un arreglo")
    }

    arr.forEach(value => {
        if(isNaN(value)) {
            throw new Error("Error: el arreglo debe de contener solo números")
        }
    })

    return Math.max(...arr);
}

try {
    const valorMayor = encuentraElMayor(numbers);
    console.log(`El valor más alto es: ${valorMayor}`);
} catch(error) {
    console.error(error);
}