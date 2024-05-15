    const obj = {
        first: "First",
        second: "Second"
    }

    const keys = Object.keys(obj);
    const values = Object.values(obj);
    let result = '';

    for (let i = 0; i < keys.length; i += 1) {
        if (i < keys.length - 1) {
            result += `${keys[i]} - ${values[i]}, `;
        } else {
            result += `${keys[i]} - ${values[i]}`;
        }
    }

    console.log(result)