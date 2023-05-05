import UserRoleService from '../services/userrole';

class UserRole {

	/**
	 * @typedef UserRoleAdd
	 * @property {integer} user_id
	 * @property {integer} role_id
	 * @property {string} address
	 */
	/**
	 * Adds a new UserRole.
	 * @route POST /userrole/add
	 * @group UserRole - Operations about UserRoles
	 * @param {UserRoleAdd.model} body.body - Foreign keys.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
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

	/**
	 * Gets all the UserRoles
	 * @route GET /userrole/get
	 * @group UserRole - Operations about UserRoles
	 * @returns {object} 200 - List of UserRoles
	 * @returns {Error}  401 - Unexpected error
	 *
	 */
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
