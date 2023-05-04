import chai, {expect} from 'chai';
import { it, describe, beforeEach } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index.js';
import {Hospital} from '../src/models';

chai.use(chaiHttp);

describe('/hospital', () => {
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

	it('/get should get all the hospitals', (done) => {
		agent
			.get('/hospital/get')
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should add dummy hospital into db', (done) => {
		agent
			.post('/hospital/add')
			.send({ name: 'DUMMY HOSPITAL', address: 'DUMMY MH.'}) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(201);
				done();        
			}).catch((err) => done(err));
	});

	it('/remove should remove the hospital by id', (done) => {
		Hospital.findOne({
		  where: { name: 'DUMMY HOSPITAL' }
		}).then((hosp) => {
		  console.log(hosp.id);
		  return agent.post('/hospital/remove').send({ id: hosp.id });
		}).then((res) => {
		  expect(res).to.have.status(200);
		  done();
		}).catch((err) => done(err));
	  });

});