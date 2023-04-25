import UserRoleService from "../services/userrole";

class UserRole {
    static async addUserRole(req, res) {
		try {
			const result = await UserRoleService.addUserRole(req, res);
			if (result.type) {
				return res.json({ data: result.data, type: true, message: result.message });
			}
			else {
				return res.json({ type: false, message: result.message });
			}
		}
		catch (error) {
			return res.json({ type: false, message: error.message });
		}
	}

	static async getAllUserRoles(req, res) {
		try {
			const result = await UserRoleService.getAllUserRoles(req, res);
			if (result.type) {
				return res.json({ data: result.data, type: true, message: result.message });
			}
			else {
				return res.json({ type: false, message: result.message });
			}
		}
		catch (error) {
			return res.json({ type: false, message: error.message });
		}
	}
}

export default UserRole;
