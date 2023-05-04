'use strict';
const { User, Role, UserRole, Privilege, Hospital, RolePrivilege, Termin, UserHospital  } = require('../models');

//import { User, Role, UserRole, Privilege, Hospital, RolePrivilege, Termin, UserHospital } from '../models';

/** @type {import('sequelize-cli').Migration} */
export async function up() {

	const users = await User.bulkCreate([
		{ name: 'ADMIN', surname: 'ADMIN', tc: '0', 
			password: '$2b$10$YuQmwTjYB0zMhas4kCZms.3Jbj9ygOapFYqXfCHEPrDH82I1ng/Sa' },
		{ name: 'Yiğit', surname: 'Opan', tc: '3041041', 
			password: '$2b$10$YuQmwTjYB0zMhas4kCZms.3Jbj9ygOapFYqXfCHEPrDH82I1ng/Sa' },
		{ name: 'Burak', surname: 'Sever', tc: '2024024', 
			password: '$2b$10$YuQmwTjYB0zMhas4kCZms.3Jbj9ygOapFYqXfCHEPrDH82I1ng/Sa' },
		{ name: 'Test', surname: 'User', tc: '202402424', 
		password: '$2b$10$YuQmwTjYB0zMhas4kCZms.3Jbj9ygOapFYqXfCHEPrDH82I1ng/Sa' }
	]);

	const roles = await Role.bulkCreate([
		{ name: 'ADMIN' },
		{ name: 'DOCTOR' }
	]);

	const hospitals = await Hospital.bulkCreate([
		{ name: 'FSM Hastanesi', address: 'Kavacık' }
	]);

	const privileges = await Privilege.bulkCreate([
		{ name: 'REMOVE_USER' },
		{ name: 'GET_ALL_USERS' },
		{ name: 'ADD_HOSPITAL' },
		{ name: 'REMOVE_HOSPITAL' },
		{ name: 'GET_ALL_HOSPITALS' },
		{ name: 'GET_ALL_PRIVILEGES' },
		{ name: 'ADD_PRIVILEGE' },
		{ name: 'ADD_ROLE' },
		{ name: 'GET_ALL_ROLES' },
		{ name: 'GET_ALL_TERMINS' },
		{ name: 'ADD_TERMIN' },
		{ name: 'REMOVE_TERMIN' },
		{ name: 'ADD_ROLEPRIVILEGE' },
		{ name: 'GET_ROLEPRIVILEGES' },
		{ name: 'REMOVE_ROLEPRIVILEGE' },
		{ name: 'ADD_USERHOSPITAL' },
		{ name: 'GET_USERHOSPITALS' },
		{ name: 'REMOVE_USERHOSPITAL' },
		{ name: 'ADD_USERROLE' },
		{ name: 'REMOVE_USERROLE' },
		{ name: 'GET_ALL_USERROLES' }
	]);

	await Termin.bulkCreate([
		{
			date: new Date(),
			user_id: users[1].id,
			doctor_id: users[2].id,
			hospital_id: hospitals[0].id
		}
	]),

	await UserRole.bulkCreate([
		{ user_id: users[0].id, role_id: roles[0].id },
		{ user_id: users[2].id, role_id: roles[1].id } // Burak is a Doctor
	]);

	await UserHospital.bulkCreate([
		{ user_id: users[2].id, hospital_id: roles[0].id } // Burak is a Doctor
	]);

	await RolePrivilege.bulkCreate([
		{ role_id: roles[0].id, privilege_id: privileges[0].id },
		{ role_id: roles[0].id, privilege_id: privileges[1].id },
		{ role_id: roles[0].id, privilege_id: privileges[2].id },
		{ role_id: roles[0].id, privilege_id: privileges[3].id },
		{ role_id: roles[0].id, privilege_id: privileges[4].id },
		{ role_id: roles[0].id, privilege_id: privileges[5].id },
		{ role_id: roles[0].id, privilege_id: privileges[6].id },
		{ role_id: roles[0].id, privilege_id: privileges[7].id },
		{ role_id: roles[0].id, privilege_id: privileges[8].id },
		{ role_id: roles[0].id, privilege_id: privileges[9].id },
		{ role_id: roles[0].id, privilege_id: privileges[10].id },
		{ role_id: roles[0].id, privilege_id: privileges[11].id },
		{ role_id: roles[0].id, privilege_id: privileges[12].id },
		{ role_id: roles[0].id, privilege_id: privileges[13].id },
		{ role_id: roles[0].id, privilege_id: privileges[14].id },
		{ role_id: roles[0].id, privilege_id: privileges[15].id },
		{ role_id: roles[0].id, privilege_id: privileges[16].id },
		{ role_id: roles[0].id, privilege_id: privileges[17].id },
		{ role_id: roles[0].id, privilege_id: privileges[18].id },
		{ role_id: roles[0].id, privilege_id: privileges[19].id },
		{ role_id: roles[0].id, privilege_id: privileges[20].id }
	]);
}
export async function down(queryInterface) {
	await queryInterface.bulkDelete('Users', null, {});
	await queryInterface.bulkDelete('Hospitals', null, {});
	await queryInterface.bulkDelete('Roles', null, {});
	await queryInterface.bulkDelete('Privileges', null, {});
	await queryInterface.bulkDelete('Termin', null, {});
	await queryInterface.bulkDelete('UserRole', null, {});
	await queryInterface.bulkDelete('UserHospital', null, {});
	await queryInterface.bulkDelete('RolePrivilege', null, {});

}
