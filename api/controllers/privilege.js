import PrivilegeService from '../services/privileges';

class Privilege {

	/**
	 * @typedef PrivilegeAdd
	 * @property {string} name
	 */
	/**
	 * Adds a new privilege.
	 * @route POST /privilege/add
	 * @group Privilege - Operations about privilege
	 * @param {PrivilegeAdd.model} body.body - The name of the privilege.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
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

	/**
	 * Gets all the Privileges
	 * @route GET /privilege/get
	 * @group Privilege - Operations about privilege
	 * @returns {object} 200 - List of privileges
	 * @returns {Error}  401 - Unexpected error
	 *
	 */
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
