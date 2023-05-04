import chai, {expect} from 'chai';
import { it, describe, beforeEach } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../../index.js';
import {Termin} from '../src/models';

chai.use(chaiHttp);

describe('/termin', () => {
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

	it('/get should get all the termins', (done) => {
		agent
			.get('/termin/get')
			.then(function (res) {
				expect(res).to.have.status(200);
				done();        
			}).catch((err) => done(err));
	});

	it('/add should add dummy termin into db', (done) => {
		agent
			.post('/termin/add')
			.send({date: new Date(), doctor_id: 3, user_id: 2, hospital_id: 1}) // ADMIN Credentials.
			.then(function (res) {
				expect(res).to.have.status(201);
				done();        
			}).catch((err) => done(err));
	});

	it('/remove should remove the termin by id', (done) => {
		    Termin.findOne({
			    order: [ [ 'createdAt', 'DESC' ] ]
		    })
			.then((termin) => {
		        return agent.post('/termin/remove').send({ id: termin.id });
			})
			.then((res) => {
		        expect(res).to.have.status(200);
		        done();
			})
			.catch((err) => done(err));
	  });

});