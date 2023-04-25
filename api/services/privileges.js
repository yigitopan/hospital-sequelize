import db from '../../api/src/models';

class PrivilegeService {
    static async addPrivilege(req, res) {
		try {
			const { name } = req.body;
            const data = {
				name
			};
			if (await db.Privilege.findOne({ where: { name: name } })) {
				res.status(409);
				return { type: false, message: 'Privilege already exists' };
			}

			const privilege = await db.Privilege.create(data);
			res.status(201);
			return { data: privilege, type: true, message: 'Privilege added successfully' };
		}
		catch (error) {
			throw error;
		}
	}


	static async getAllPrivileges(req, res) {
		try {
			const privileges = await db.Privilege.findAll();
			res.status(200);
			return { type: true, data: privileges, message: 'Roles fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default PrivilegeService;
