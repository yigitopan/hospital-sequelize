import UserHospitalService from '../services/userhospital';

class UserHospital {

	/**
	 * @typedef UserHospitalAdd
	 * @property {integer} user_id
	 * @property {integer} hospital_id
	 */
	/**
	 * Adds a new UserHospital.
	 * @route POST /userhospital/add
	 * @group UserHospital - Operations about UserHospital
	 * @param {UserHospitalAdd.model} body.body - Foreign keys.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
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
	 * Gets all the UserHospitals
	 * @route GET /userhospital/get
	 * @group UserHospital - Operations about UserHospital
	 * @returns {object} 200 - List of UserHospitals
	 * @returns {Error}  401 - Unexpected error
	 *
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
