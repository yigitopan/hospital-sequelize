import RolePrivilegeService from '../services/roleprivilege';

class RolePrivilege {

	/**
	 * @swagger
	 * tags:
	 *   name: RolePrivilege
	 *   description: APIs for RolePrivileges
	 */

	/**
	 * @swagger
	 * /roleprivilege/add:
	 *   post:
	 *     tags:
	 *       - RolePrivilege
	 *     description: Binds a privilege with a role
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
	 *             role_id:
	 *               type: integer
	 *             privilege_id:
	 *               type: integer
	 *     responses:
	 *       201:
	 *         description: Successfully added
	 *       401:
	 *         description: Invalid credentials
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
	 * @swagger
	 * /roleprivilege/get:
	 *   get:
	 *     tags:
	 *       - RolePrivilege
	 *     description: Get all RolePrivileges
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
	 *               role_id:
	 *                 type: integer
	 *               privilege_id:
	 *                 type: integer
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
