let users = JSON.parse(localStorage.getItem('users')) || [
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
];

export function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 500);
    });
}

export function writeData(newUsers){
    users = newUsers;
    localStorage.setItem('users', JSON.stringify(users));
}