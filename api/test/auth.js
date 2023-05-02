import Auth from '../helpers/auth';
import { expect } from 'chai';
import { it, describe } from 'mocha';
import jwt from 'jsonwebtoken';
import sinon from 'sinon';

describe('Auth-Middleware', function(){

	it('should return a 401 status if no session token is present', async function() {
		const req = {
			session: {
				token: null
			}
		};
	
		const res = {
			status: function(code) {
				expect(code).to.equal(401);
				return this;
			},
			json: function(data) {
				expect(data).to.have.property('message', 'Unauthorized access');
			}
		};
	
		const next = () => {};
	
		const requestHandler = Auth.requireAuth(1);
		await requestHandler(req, res, next);
	});
	
	it('should return a 500 status if token is invalid', async function() {
		const req = {
			session: {
				token: 'asdasd'
			}
		};
	
		const res = {
			status: function(code) {
				expect(code).to.equal(500);
				return this;
			},
			json: function(data) {
				expect(data).to.have.property('message', 'Invalid Token');
			}
		};
	
		const next = () => {};
	
		const requestHandler = Auth.requireAuth(1);
		await requestHandler(req, res, next);
	});

	it('should have a userId when token is valid', async function() {
		const req = {
			session: {
				token: 'asdasd'
			}
		};
	
		sinon.stub(jwt, 'verify');

		jwt.verify.returns({ userId: 'abc' });

		const requestHandler = Auth.requireAuth(1);
		requestHandler(req, {}, () => {});

		expect(req).to.have.property('userId');
		expect(req).to.have.property('userId', 'abc');

	});
	
});
