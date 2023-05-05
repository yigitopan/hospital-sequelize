import RolePrivilegeService from '../services/roleprivilege';

class RolePrivilege {

	/**
	 * @typedef RolePrivilegeAdd
	 * @property {string} name
	 * @property {string} address
	 */
	/**
	 * Adds a new RolePrivilege.
	 * @route POST /roleprivilege/add
	 * @group RolePrivilege - Operations about RolePrivilege
	 * @param {RolePrivilegeAdd.model} body.body - The name of the roleprivilege.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
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
	/**
	 * Gets all the RolePrivileges
	 * @route GET /roleprivilege/get
	 * @group RolePrivilege - Operations about RolePrivilege
	 * @returns {object} 200 - List of RolePrivileges
	 * @returns {Error}  401 - Unexpected error
	 *
	 */
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
