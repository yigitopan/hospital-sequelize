import TerminService from '../services/termin';

class Termin {

	/**
	 * @swagger
	 * tags:
	 *   name: Termin
	 *   description: APIs for termin management
	 */

	/**
	 * @swagger
	 * /termin/add:
	 *   post:
	 *     tags:
	 *       - Termin
	 *     description: Create new termin
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Termin data
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             date:
	 *               type: string
	 *             doctor_id:
	 *               type: integer
	 *             user_id:
	 *               type: integer
	 *             hospital_id:
	 *               type: integer
	 *     responses:
	 *       201:
	 *         description: Successfully logged in
	 *       401:
	 *         description: Invalid credentials
	 */
	static async addTermin(req, res) {
		try {
			const result = await TerminService.addTermin(req, res);
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
	 * /termin/remove:
	 *   post:
	 *     tags:
	 *       - Termin
	 *     description: Remove a termin
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Termin data
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             id:
	 *               type: integer
	 *     responses:
	 *       200:
	 *         description: Successfully removed
	 *       401:
	 *         description: Invalid credentials
	 */
	static async removeTermin(req, res) {
		try {
			const result = await TerminService.removeTermin(req, res);
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
	 * /termin/get:
	 *   get:
	 *     tags:
	 *       - Termin
	 *     description: Get all termins
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
	 *               date:
	 *                 type: string
	 *               doctor_id:
	 *                 type: integer
	 *               user_id:
	 *                 type: integer
	 *               hospital_id:
	 *                 type: integer
	 */
	static async getAllTermins(req, res) {
		try {
			const result = await TerminService.getAllTermins(req, res);
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

export default Termin;
