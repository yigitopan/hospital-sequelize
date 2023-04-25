import db from '../../api/src/models';

class UserHospitalService {

	static async addUserHospital(req, res) {
		try {
			const { user_id, hospital_id } = req.body;
			const data = {
				user_id,
				hospital_id
			};
			/*
			 *  if (await db.UserHospital.findOne({ where: { name: name } })) {
			 * 	res.status(409);
			 * 	return { type: false, message: 'UserHospital already exists' };
			 *  }
			 */

			const userHospital = await db.UserHospital.create(data);
			res.status(201);
			return { data: userHospital, type: true, message: 'UserHospital added successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllUserHospitals(req, res) {
		try {
			const userHospitals = await db.UserHospital.findAll();
			res.status(200);
			return { type: true, data: userHospitals, message: 'UserHospitals fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default UserHospitalService;
