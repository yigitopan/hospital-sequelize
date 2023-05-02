import jwt from 'jsonwebtoken';
import db from '../src/models';
import { Sequelize } from '../src/models';
import { Op } from 'sequelize';
class Auth {

	static requireAuth(privilegeID) {
		return async (req, res, next) => {
			const sessionToken = req.session.token;
        
			if (!sessionToken) {
				return res.status(401).json({ message: 'Unauthorized access' });
			}
        
			try {
				const decodedToken = jwt.verify(sessionToken, 'gozgozgoztepe');
				req.userId = decodedToken.userId;

				const user = await db.User.findOne({
					where: { id: decodedToken.userId },
					attributes: { exclude: [ 'password' ] }
				});

				if (user) {
					const thisUserHasPrivilege = await db.User.findOne({
						where: {
							[Op.and]: [
						  { id: user.id },
						  Sequelize.literal(`EXISTS (
							SELECT * FROM "RolePrivileges" rp
							JOIN "UserRoles" ur ON rp.role_id = ur.role_id
							WHERE ur.user_id = ${user.id} AND rp.privilege_id = ${privilegeID}
						  )`)
							]
					  }
					});

					console.log(thisUserHasPrivilege);

					if (thisUserHasPrivilege) {
						next();
					}

					else {
						return res.status(401).json({ type: false, message: 'This user has no privilege to do this.' });
					}

				}

				else {
					return res.status(401).json({ type: false, message: 'Unauthorized' });
				}

			}
			catch (error) {
				return res.status(500).json({ type: false, message: 'Invalid Token' });
			}
		};
	}

}

export default Auth;