import db from '../../api/src/models';

class HospitalService {

	static async addHospital(req, res) {
		try {
			const { name, address } = req.body;
			const data = {
				name,
				address,
				is_removed: false
			};

			if (await db.Hospital.findOne({ where: { name: name } })) {
				res.status(409);
				return { type: false, message: 'Hospital already exists' };
			}

			const hospital = await db.Hospital.create(data);
			res.status(201);
			return { data: hospital, type: true, message: 'Hospital added successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async removeHospital(req, res) {
		try {
			const { id } = req.body;

			const hospital = await db.Hospital.findOne({ where: { id: id } });
			if (!hospital) {
				res.status(409);
				return { type: false, message: 'Hospital cannot be found.' };
			}
			else {
				hospital.is_removed = true;
				await hospital.save();
			}

			res.status(201);
			return { data: hospital, type: true, message: 'Hospitals status has been moved to removed' };
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllHospitals(req, res) {
		try {
			const hospitals = await db.Hospital.findAll();
			res.status(200);
			return { type: true, data: hospitals, message: 'Hospitals fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default HospitalService;
