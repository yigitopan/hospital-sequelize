import UserHospitalService from '../services/userhospital';

class UserHospital {

	/**
	 * @swagger
	 * tags:
	 *   name: UserHospital
	 *   description: APIs for UserHospitals
	 */

	/**
	 * @swagger
	 * /userhospital/add:
	 *   post:
	 *     tags:
	 *       - UserHospital
	 *     description: Binds a user with hospital
	 *     produces:
	 *       - application/json
	 *     parameters:
	 *       - name: body
	 *         description: Foreign Keys
	 *         in: body
	 *         required: true
	 *         schema:
	 *           type: object
	 *           properties:
	 *             user_id:
	 *               type: integer
	 *             hospital_id:
	 *               type: integer
	 *     responses:
	 *       201:
	 *         description: Successfully added
	 *       401:
	 *         description: Invalid credentials
	 */
	static async addUserHospital(req, res) {
		try {
			const result = await UserHospitalService.addUserHospital(req, res);
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
	 * /userhospital/get:
	 *   get:
	 *     tags:
	 *       - UserHospital
	 *     description: Get all UserHospitals
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
	 *               hospital_id:
	 *                 type: integer
	 */
	static async getAllUserHospitals(req, res) {
		try {
			const result = await UserHospitalService.getAllUserHospitals(req, res);
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

export default UserHospital;
