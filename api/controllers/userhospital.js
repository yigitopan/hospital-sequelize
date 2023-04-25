import UserHospitalService from "../services/userhospital";

class UserHospital {
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
