import jwt from 'jsonwebtoken';
import db from '../src/models';

class Utils {

	static async createToken(user) {
		const token = jwt.sign({ id: user.id, email: user.email, username: user.username }, process.env.JWT_SECRET, {
			expiresIn: '180d'
		});

		return token;
	}

	static async decodeToken(token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			const user = await db.Users.findOne({
				where: { id: decoded.id },
				attributes: { exclude: [ 'password' ] }
			});

			if (user) {
				return user;
			}
			else {
				return null;
			}
		}
		catch (error) {
			return null;
		}
	}

	static authorizeUser(permId) {
		return async (req, res, next) => {
			try {
				const user = await db.Users.findOne({
					where: { id: req.session.user.id },
					include: {
						model: db.Roles,
						include: {
							model: db.Permissions,
							where: { id: permId },
							through: []
						},
						through: []
					}
				});

				const userInfo = JSON.parse(JSON.stringify(user));

				if (userInfo.Roles.length > 0 && userInfo.Roles[0].Permissions[0].id === permId) {
					next();
				}
				else {
					return res.status(401).json({ type: false, message: 'Unauthorized' });
				}
			}
			catch (error) {
				return res.status(500).json({ type: false, message: error.message });
			}
		};
	}

	static async authorizeBySession(req, res, next) {
		try {
			if (req.session.user && req.cookies['connect.sid']) {
				next();
			}
			else {
				const token = await db.Users.findOne({
					where: { id: req.cookies.userId},
					attributes: [ 'refreshToken' ]
				});

				if (token.refreshToken) {
					const user = await Utils.decodeToken(token.refreshToken);
					req.session.user = {
						id: user.id,
						email: user.email,
						username: user.username
					};
					next();
				}
				else {
					res.status(401);
					return res.json({ type: false, message: 'Unauthorized' });
				}
			}
		}
		catch (error) {
			res.status(500);
			return res.json({ type: false, message: error.message });
		}
	}

	static async authorizeSysAdmin(req, res, next) {
		try {
			const user = await db.Users.findOne({
				where: { id: req.session.user.id },
				include: {
					model: db.Roles,
					where: { id: 1 },
					through: []
				}
			});

			const userInfo = JSON.parse(JSON.stringify(user));

			if (user && userInfo.Roles.length > 0 && userInfo.Roles[0].id === 1) {
				next();
			}
			else {
				res.status(401);
				return res.json({ type: false, message: 'Unauthorized' });
			}
		}
		catch (error) {
			res.status(500);
			return res.json({ type: false, message: error.message });
		}
	}

}

export default Utils;