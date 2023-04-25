import db from '../../src/models';

class UserService {
    static async addUser(req, res) {
		try {
			const { name, surname, tc } = req.body;
			const data = {
				name,
				surname,
				tc,
                is_removed: false
			};

			if (await db.User.findOne({ where: { tc: tc } })) {
				res.status(409);
				return { type: false, message: 'User already exists' };
			}

			const user = await db.User.create(data);
			res.status(201);
			return { data: user, type: true, message: 'User added successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async removeUser(req, res) {
		try {
			const { tc } = req.body;

			const user = await db.User.findOne({ where: { tc: tc } })
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

}

export default UserService;
