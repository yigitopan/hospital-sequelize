import UserService from '../services/user';

class User {

	/**
	 * @swagger
	 * tags:
	 *   name: User
	 *   description: APIs for user management
	 */

	/**
	 * @swagger
	 * /user/login:
	 *   post:
	 *     tags:
	 *       - User
	 *     description: Login a user with their TC and password
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: User's login credentials
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             tc:
	 *               type: string
	 *             password:
	 *               type: string
	 *     responses:
	 *       200:
	 *         description: Successfully logged in
	 *       401:
	 *         description: Invalid credentials
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
	 * @swagger
	 * /user/add:
	 *   post:
	 *     tags:
	 *       - User
	 *     description: Adds new user
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: User's login credentials
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             name:
	 *               type: string
	 *             surname:
	 *               type: string
	 *             tc:
	 *               type: string
	 *             password:
	 *               type: string
	 *     responses:
	 *       201:
	 *         description: Successfully signed up
	 *       401:
	 *         description: Invalid credentials
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
	 * @swagger
	 * /user/get:
	 *   get:
	 *     tags:
	 *       - User
	 *     description: Get all users
	 *     produces:
	 *       - application/json
	 *     responses:
	 *       200:
	 *         description: OK
	 *         schema:
	 *           type: array
	 *           items:
	 *             type: object
	 *             properties:
	 *               id:
	 *                 type: integer
	 *               name:
	 *                 type: string
	 *               surname:
	 *                 type: string
	 *               tc:
	 *                 type: string
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
