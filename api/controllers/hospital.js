import HospitalService from '../services/hospital';

class Hospital {
    static async addHospital(req, res) {
		console.log("adh")
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
