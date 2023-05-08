import PrivilegeService from '../services/privileges';

class Privilege {

	/**
	 * @swagger
	 * tags:
	 *   name: Privilige
	 *   description: APIs for privilige management
	 */

	/**
	 * @swagger
	 * /privilige/add:
	 *   post:
	 *     tags:
	 *       - Privilige
	 *     description: Insert Privilige
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: privilige
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
	 * @swagger
	 * /privilege/get:
	 *   get:
	 *     tags:
	 *       - Privilige
	 *     description: Get all priviliges
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
