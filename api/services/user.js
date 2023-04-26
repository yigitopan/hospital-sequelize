import db from '../../api/src/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserService {

	static async removeUser(req, res) {
		try {
			const { tc } = req.body;

			const user = await db.User.findOne({ where: { tc: tc } });
			if (!user) {
				res.status(409);
				return { type: false, message: 'User cannot be found.' };
			}
			else {
				user.is_removed = true;
				await user.save();
			}

			res.status(201);
			return { data: user, type: true, message: 'Users status has been moved to removed' };
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllUsers(req, res) {
		try {
			const users = await db.User.findAll();
			res.status(200);
			return { type: true, data: users, message: 'Users fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async addUser(req, res) {
		try {
		  const { name, surname, tc, password } = req.body;
	  
		  // Hash the password
		  const hashedPassword = await bcrypt.hash(password, 10);
	  
		  // Create a new user record in the database
		  try {
				const user = await db.User.create({
					name,
					surname,
					tc,
					password: hashedPassword
		  });
				res.status(200);
				return { type: true, data: user, message: 'User signed up successfully' };
		  }
			catch (error) {
				throw error;
			}
	  
		}
		catch (error) {
		  console.error(error);
		  res.status(500).send({ error: 'Unable to create user' });
		}
	  }
	  
	  static async login(req, res) {
		const { tc, password } = req.body;

		try {
			const user = await db.User.findOne({ where: { tc } });
			const isValidPass = await bcrypt.compare(password, user.password);

			if (!user || !isValidPass) {
				res.status(401);
				return ({ error: 'Invalid email or password' });
			}

			const token = jwt.sign({ userId: user.id }, 'gozgozgoztepe');
			req.session.token = token;

			res.status(200);
			return { type: true, data: {token, user}, message: 'User logged in successfully' };
		}
		catch (err) {
			// eslint-disable-next-line no-undef
			next();
		}
	  }

}

export default UserService;
