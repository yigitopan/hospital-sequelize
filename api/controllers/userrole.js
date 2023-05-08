import UserRoleService from '../services/userrole';

class UserRole {

	/**
	 * @swagger
	 * tags:
	 *   name: UserRole
	 *   description: APIs for UserRole
	 */

	/**
	 * @swagger
	 * /userrole/add:
	 *   post:
	 *     tags:
	 *       - UserRole
	 *     description: Assign a role to user
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Foreign keys
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             user_id:
	 *               type: integer
	 *             role_id:
	 *               type: integer
	 *     responses:
	 *       201:
	 *         description: Successfully added
	 *       401:
	 *         description: Invalid credentials
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
	 * @swagger
	 * /userrole/get:
	 *   get:
	 *     tags:
	 *       - UserRole
	 *     description: Get all UserRoles
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
	 *               user_id:
	 *                 type: integer
	 *               role_id:
	 *                 type: integer
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
