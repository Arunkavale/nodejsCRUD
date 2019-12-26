const request = require('supertest');
const mongoose = require('mongoose');
const {User} = require('../models/user-model');

let server 
describe('/api/v1/user',()=>{
    beforeEach(()=>{server = require('../server'); 
        
    });
    afterEach(async ()=> {
        server.close();
        await User.remove({})
    })

    describe(' POST /create',()=>{
        it('should user register',async()=>{
            await User.insertMany([{
                "name":"Arun",
                "phone":9766999425 ,
                "email":"arunkavale@gmail.com",
                "deepartmet":"Full stack developer"},
                {	"name":"Ak",
                "phone":9766999425 ,
                "email":"arukavasle@gmail.com",
                "deepartmet":"Full stack developer"}
            ])
            const res = await request(server).get('/api/v1/user/read');
            expect(res.status).toBe(200);
            expect(res.body.length).toBe(2);
        });
    })
});