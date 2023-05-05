import UserService from '../services/user';

class User {

	/**
	 * @typedef Userlogin
	 * @property {string} tc
	 * @property {string} password
	 */
	/**
	 * Logs a user in.
	 * @route POST /user/login
	 * @group User - Operations about user
	 * @param {Userlogin.model} body.body - TC and password of the user.
	 * @returns {object} 200 - An object containing the token and user information.
	 * @returns {object} 401 - An error message indicating that the email or password is invalid.
	 */
	static async login(req, res) {
		try {
			const result = await UserService.login(req, res);
			if (result.type) {
				console.log('loggedin');
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
	 * @typedef Usersignup
	 * @property {string} name
	 * @property {string} surname
	 * @property {string} tc
	 * @property {string} password
	 */
	/**
	 * Registers a new user.
	 * @route POST /user/add
	 * @group User - Operations about user
	 * @param {Usersignup.model} body.body - Attributes of the user.
	 * @returns {object} 201 - An object containing added user information.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
	static async addUser(req, res) {
		try {
			const result = await UserService.addUser(req, res);
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
	 * @typedef Userremove
	 * @property {string} tc
	 */
	/**
	 * Sets the is_removed attribute of user to true.
	 * @route POST /user/remove
	 * @group User - Operations about user
	 * @param {Userremove.model} body.body - The TC of the user.
	 * @returns {object} 201 - An object containing added user information.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
	 */
	static async removeUser(req, res) {
		try {
			const result = await UserService.removeUser(req, res);
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
	 * This function comment is parsed by doctrine
	 * @route GET /user/get
	 * @group User - Operations about user
	 * @returns {object} 200 - An array of user info
	 * @returns {Error}  default - Unexpected error
	 *
	 */
	static async getAllUsers(req, res) {
		try {
			const result = await UserService.getAllUsers(req, res);
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

export default User;
