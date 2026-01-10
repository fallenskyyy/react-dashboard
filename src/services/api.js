export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({email: "1234", password: "1234"});
        }, 500)
    })
}