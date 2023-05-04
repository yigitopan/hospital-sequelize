import chai, {expect} from 'chai';
import { it, describe, beforeEach } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index.js';

chai.use(chaiHttp);

describe('/roleprivileges', () => {
	let agent = chai.request.agent(app);
	beforeEach((done) => {
		agent
			.post('/user/login')
			//.send({ tc: '3041041', password: '123456' }) User without privilege returns 401 - test fails.
			.send({ tc: '0', password: '123456' }) 
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/get should get all the rolePrivileges', (done) => {
		agent
			.get('/roleprivilege/get')
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should add dummy rolePrivilege into db', (done) => {
		agent
			.post('/roleprivilege/add')
			.send({ role_id: 2, privilege_id: 12 }) 
			.then(function (res) {
				expect(res).to.have.status(201);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should FAIL, because of invalid foreign key.', (done) => {
		agent
			.post('/roleprivilege/add')
			.send({ role_id: 31, privilege_id: 12 }) 
			.then(function (res) {
				//violates foreign key constraint
				expect(res.text).to.contain('violates foreign key constraint');
				done();        
			}).catch((err) => done(err));
	});
});