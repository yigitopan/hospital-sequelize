import HospitalService from '../services/hospital';

class Hospital {

	/**
	 * @swagger
	 * tags:
	 *   name: Hospital
	 *   description: APIs for hospital management
	 */

	/**
	 * @swagger
	 * /hospital/add:
	 *   post:
	 *     tags:
	 *       - Hospital
	 *     description: Add new Hospital
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Hospital attributes
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             name:
	 *               type: string
	 *             address:
	 *               type: string
	 *     responses:
	 *       201:
	 *         description: Successfully added
	 *       401:
	 *         description: Invalid inputs
	 */

	static async addHospital(req, res) {
		try {
			const result = await HospitalService.addHospital(req, res);
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
	 * /hospital/remove:
	 *   post:
	 *     tags:
	 *       - Hospital
	 *     description: Remove a Hospital
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Hospital attributes
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
	 *         description: Invalid inputs
	 */

	static async removeHospital(req, res) {
		try {
			const result = await HospitalService.removeHospital(req, res);
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
	 * /hospital/get:
	 *   get:
	 *     tags:
	 *       - Hospital
	 *     description: Get all hospitals
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
	 *               address:
	 *                 type: string
	 */
	static async getAllHospital(req, res) {
		try {
			const result = await HospitalService.getAllHospitals(req, res);
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

export default Hospital;
