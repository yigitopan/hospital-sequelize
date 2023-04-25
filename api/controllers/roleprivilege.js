import RolePrivilegeService from "../services/roleprivelege";

class RolePrivilege {
    static async addRolePrivilege(req, res) {
		try {
			const result = await RolePrivilegeService.addRolePrivilege(req, res);
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

	static async getAllRolePrivileges(req, res) {
		try {
			const result = await RolePrivilegeService.getAllRolePrivileges(req, res);
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

export default RolePrivilege;
