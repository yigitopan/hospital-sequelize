import PrivilegeService from "../services/privileges";

class Privilege {
    static async addPrivilege(req, res) {
		try {
			const result = await PrivilegeService.addPrivilege(req, res);
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

	static async getAllPrivileges(req, res) {
		try {
			const result = await PrivilegeService.getAllPrivileges(req, res);
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

export default Privilege;
