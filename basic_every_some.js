module.exports = function verifyAllExist(users) {

	return function(submittedUsers) {

		return submittedUsers.every(function(submittedUser) {
	
			return users.some(function(user) {
			
				return user.id === submittedUser.id;

			});

		});	

	};

};
