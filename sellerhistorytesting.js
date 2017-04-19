var expect    = require("chai").expect;
var request = require("request");

//first login success

describe("sellerhistory ", function() {
    var url = "http://localhost:3005/sellerhistory?userId=mukesh123";
    it("it checks the aunthentication", function(done) {
        request(url, function(error, response, body) {
            expect(body).to.equal("success");
            done();
        });
    });
});

//failer case of rajesh
/*
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




