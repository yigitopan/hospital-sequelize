import TerminService from '../services/termin';

class Termin {

	/**
	 * @typedef TerminAdd
	 * @property {string} date
	 * @property {integer} doctor_id
	 * @property {integer} user_id
	 * @property {integer} hospital_id
	 */
	/**
	 * Adds a new termin.
	 * @route POST /termin/add
	 * @group Termin - Operations about termin
	 * @param {TerminAdd.model} body.body - The name of the termin.
	 * @returns {object} 201 - Added succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
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
	 * @typedef TerminRemove
	 * @property {integer} id
	 */
	/**
	 * Sets the is_removed attribute of Termin to true.
	 * @route POST /termin/remove
	 * @group Termin - Operations about termin
	 * @param {TerminRemove.model} body.body - The id of the termin.
	 * @returns {object} 200 - Removed succesfully message.
	 * @returns {object} 401 - An error message indicating that inputs are invalid.
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
	 * Gets all the termins
	 * @route GET /termin/get
	 * @group Termin - Operations about termins
	 * @returns {object} 200 - List of termins
	 * @returns {Error}  401 - Unexpected error
	 *
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
