import db from '../../src/models';

class RoleService {
    static async addRole(req, res) {
		try {
			const { name } = req.body;
            const data = {
				name
			};
			if (await db.Role.findOne({ where: { name: name } })) {
				res.status(409);
				return { type: false, message: 'Role already exists' };
			}

			const role = await db.Role.create(data);
			res.status(201);
			return { data: role, type: true, message: 'Role added successfully' };
		}
		catch (error) {
			throw error;
		}
	}


	static async getAllRoles(req, res) {
		try {
			const roles = await db.Role.findAll();
			res.status(200);
			return { type: true, data: roles, message: 'Roles fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default RoleService;
