import {createConnection, Connection} from "typeorm";
require('dotenv').config()

const connection = await createConnection({
    type: "postgres",
    host: process.env.HOST_DATABASE,
    port: process.env.PORT_DATABASE,
    username: process.env.USERNAME_DATABASE,
    password: process.env.PASSWORD_DATABASE,
    database: process.env.NAME_DATABASE
});

/*
var typeorm = require("typeorm");

typeorm.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "admin",
    database: "test",
    synchronize: true,
    entitySchemas: [
        require("./entity/Post"),
        require("./entity/Category")
    ]
}).then(function (connection) {

    var category1 = {
        name: "TypeScript"
    };
    var category2 = {
        name: "Programming"
    };

    var post = {
        title: "Control flow based type analysis",
        text: "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.",
        categories: [
            category1, category2
        ]
    };

    var postRepository = connection.getRepository("Post");
    postRepository.save(post)
        .then(function(savedPost) {
            console.log("Post has been saved: ", savedPost);
            console.log("Now lets load all posts: ");

            return postRepository.find();
        })
        .then(function(allPosts) {
            console.log("All posts: ", allPosts);
        });


}).catch(function(error) {
    console.log("Error: ", error);
});
*/