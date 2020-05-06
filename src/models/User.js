module.exports = {
    name: "User",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        login: {
            type: "string"
        },
        password: {
            type: "string"
        }
    }
}