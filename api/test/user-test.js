import chai, {expect} from 'chai';
import { it, describe, beforeEach } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);

describe('/user', () => {
	let agent = chai.request.agent(app);
	beforeEach((done) => {
		agent
			.post('/user/login')
			//.send({ tc: '3041041', password: '123456' }) User without privilege returns 401 - test fails.
			.send({ tc: '0', password: '123456' }) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/get should GET all the users', (done) => {
		agent
			.get('/user/get')
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should add dummy user into db', (done) => {
		agent
			.post('/user/add')
			.send({ tc: '123', password: '123456'}) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(201);
				done();        
			}).catch((err) => done(err));
	});

	it('/remove should remove the user by TC', (done) => {
		agent
			.post('/user/remove')
			.send({ tc: '123'}) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});
});