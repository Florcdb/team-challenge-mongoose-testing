const request = require ('supertest');
const app = require ('../index');
const { describe } = require('yargs'); 

describe ("testing/posts",async () => {
    const post= {title:"Post",
    body: "Esto es un POST" }
    test ("create Post", async() => {
        let postCount = await post.countDocuments({});
        expect (postCount).toEqual (0); 
        resPost = await request(app).post("/create").send(post).expect(201);
        postCount = await post.countDocuments({});
        expect(postCount).toEqual(1);
    })
})
