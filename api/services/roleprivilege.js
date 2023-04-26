import db from '../src/models';

class RolePrivilegeService {

	static async addRolePrivilege(req, res) {
		try {
			const { role_id, privilege_id } = req.body;
			const data = {
				role_id,
				privilege_id
			};
			/*
			 *  if (await db.RolePrivilege.findOne({ where: { name: name } })) {
			 * 	res.status(409);
			 * 	return { type: false, message: 'RolePrivilege already exists' };
			 *  }
			 */

			const rolePrivilege = await db.RolePrivilege.create(data);
			res.status(201);
			return { data: rolePrivilege, type: true, message: 'RolePrivilege added successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllRolePrivileges(req, res) {
		try {
			const rolePrivileges = await db.RolePrivilege.findAll();
			res.status(200);
			return { type: true, data: rolePrivileges, message: 'RolePrivileges fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default RolePrivilegeService;
