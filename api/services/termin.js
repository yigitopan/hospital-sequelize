import db from '../../api/src/models';

class TerminService {

	static async addTermin(req, res) {
		try {
			const { date, doctor_id, user_id, hospital_id } = req.body;
			const data = {
				date,
				doctor_id,
				user_id,
				hospital_id,
				is_removed: false
			};

			const doctorUser = await db.User.findOne({
				where: { id: doctor_id },
				include: [ {
				  model: db.Role,
				  where: { name: 'DOCTOR' }
				} ]
			  });
			  
			  if (!(doctorUser && doctorUser.Roles && doctorUser.Roles.length > 0)) {
				return { type: false, message: 'This person is not a doctor.' };
			  }

			const termin = await db.Termin.create(data);
			res.status(201);
			return { data: termin, type: true, message: 'Termin added successfully' };
		}
		catch (error) {
			throw error;
		}
	}

	static async removeTermin(req, res) {
		try {
			const { id } = req.body;

			const termin = await db.Termin.findOne({ where: { id: id } });
			if (!termin) {
				res.status(409);
				return { type: false, message: 'Termin cannot be found.' };
			}
			else {
				termin.is_removed = true;
				await termin.save();
			}

			res.status(200);
			return { data: termin, type: true, message: 'Termins status has been moved to removed' };
		}
		catch (error) {
			throw error;
		}
	}

	static async getAllTermins(req, res) {
		try {
			const termins = await db.Termin.findAll();
			res.status(200);
			return { type: true, data: termins, message: 'Termins fetched successfully' };
		}
		catch (error) {
			throw error;
		}
	}

}

export default TerminService;
