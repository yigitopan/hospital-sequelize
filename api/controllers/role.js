import RoleService from '../services/role';

class Role {

	/**
	 * @typedef Roleadd
	 * @property {string} name
	 */
	/**
	 * Adds a new role.
	 * @route POST /role/add
	 * @group Role - Operations about role
	 * @param {Roleadd.model} body.body - The name of the role.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
	static async addRole(req, res) {
		try {
			const result = await RoleService.addRole(req, res);
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
	 * Returns all of the roles.
	 * @route GET /role/get
	 * @group Role - Operations about role
	 * @returns {object} 200 - Fetched succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
	static async getAllRoles(req, res) {
		try {
			const result = await RoleService.getAllRoles(req, res);
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

export default Role;
