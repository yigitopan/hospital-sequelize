import HospitalService from '../services/hospital';

class Hospital {

	/**
	 * @typedef Hospitaladd
	 * @property {string} name
	 * @property {string} address
	 */
	/**
	 * Adds a new hospital.
	 * @route POST /hospital/add
	 * @group Hospital - Operations about hospital
	 * @param {Hospitaladd.model} body.body - The name of the hospital.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
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
	 * @typedef HospitalRemove
	 * @property {integer} id
	 */
	/**
	 * Sets the is_removed attribute of hospital to true.
	 * @route POST /hospital/remove
	 * @group Hospital - Operations about hospital
	 * @param {HospitalRemove.model} body.body - The id of the hospital.
	 * @returns {object} 200 - Removed succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
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
	 * Gets all the hospitals
	 * @route GET /hospital/get
	 * @group Hospital - Operations about hospital
	 * @returns {object} 200 - List of hospital s
	 * @returns {Error}  401 - Unexpected error
	 *
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
