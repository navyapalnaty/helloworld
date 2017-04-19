var expect    = require("chai").expect;
var request = require("request");

//first login success

describe("registrationTesting", function() {
    var url = "http://localhost:3005/registration?name=prernaprem&userId=prer3498&pass=234ert" +
        "&address=ergdjajgdhhd&email=ere@gmail.com&mobileNo=9085545210";
    it("it checks the aunthentication", function(done) {
        request(url, function(error, response, body) {
            expect(body).to.equal("success");
            done();
        });
    });
});

/*
 //failer case of rajesh
 describe("logIn verification ", function() {
 var url = "http://localhost:3005/loginVerify?userId=mukesh123&password=mukesh12&tableName=registration";
 it("it checks the aunthentication", function(done) {
 request(url, function(error, response, body) {
 expect(body).to.equal("unsuccess");
 done();
 });
 });
 });
 */




