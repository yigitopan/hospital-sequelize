import db from '../../api/src/models';

class UserRoleService {
    static async addUserRole(req, res) {
		try {
			const { user_id, role_id } = req.body;
            const data = {
				user_id, 
                role_id
			};
			// if (await db.UserRole.findOne({ where: { name: name } })) {
			//	res.status(409);
			//	return { type: false, message: 'UserRole already exists' };
			// }

			const userRole = await db.UserRole.create(data);
			res.status(201);
			return { data: userRole, type: true, message: 'UserRole added successfully' };
		}
		catch (error) {
			throw error;
		}
	}


	static async getAllUserRoles(req, res) {
		try {
			const userRoles = await db.UserRole.findAll();
			res.status(200);
			return { type: true, data: userRoles, message: 'UserRoles fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default UserRoleService;
