import RoleService from '../services/role';

class Role {

	/**
	 * @swagger
	 * tags:
	 *   name: Role
	 *   description: APIs for role management
	 */

	/**
	 * @swagger
	 * /role/add:
	 *   post:
	 *     tags:
	 *       - Role
	 *     description: Adds a new role
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Name of the role
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             name:
	 *               type: string
	 *     responses:
	 *       201:
	 *         description: Successfully added 
	 *       401:
	 *         description: Invalid credentials
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
	 * @swagger
	 * /role/get:
	 *   get:
	 *     tags:
	 *       - Role
	 *     description: Get all roles
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
