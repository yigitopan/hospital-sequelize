import chai, {expect} from 'chai';
import { it, describe, beforeEach } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);

describe('/role', () => {
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

	it('/get should get all the roles', (done) => {
		agent
			.get('/role/get')
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should add dummy role into db', (done) => {
		agent
			.post('/role/add')
			.send({ name: 'ADMINDUMMY'}) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(201);
				done();        
			}).catch((err) => done(err));
	});
});