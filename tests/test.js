import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configuring chai
chai.use(chaiHttp);
chai.should();

describe("Students", () => {
    describe("GET /", () => {
        // Test to get all students record
        it("Should get all students record", (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });

        // Test to get single student record
        it("Should not get a single student record", (done) => {
            const id = 5;
            chai.request(app)
                .get(`${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });
});