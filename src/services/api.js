export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    email: "admin", 
                    password: "1234",
                    isAdmin: true
                },
                {
                    email: "user",
                    password:"12345",
                    isAdmin: false
                }
                    ]);
        }, 500)
    })
}