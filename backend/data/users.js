import bcrypt from "bcryptjs"

const users = [
    {
        name : "Admin User",
        email: "admin@emmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name : "John Doe",
        email: "john@emmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    },
    {
        name : "Jane Doe ",
        email: "jane@emmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false
    }
]

export default users