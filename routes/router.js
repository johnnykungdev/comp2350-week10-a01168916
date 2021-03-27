const router = require('express').Router();
// const database = include('databaseConnection');
// const dbModel = include('databaseAccessLayer');
//const dbModel = include('staticData');
const userModel = include('models/web_user')

router.get('/', async (req, res) => {
	console.log("page hit");
	try {
		const users = await userModel.findAll({
			attributes: ['web_user_id', 'first_name', 'last_name', 'email' ]
		})

		if (users === null) {
			res.render('error', {
				message: 'Error connecting to MySQL'
			})
		} else {
			console.log(users)
			res.render('index', {allUsers: users})
		}
	} catch(ex) {
		res.render('error', {
			message: 'Error connecting to MySQL'
		})
		console.log('Error connecting to MySQL')
		console.log(ex)
	}

});

router.post('/addUser', (req, res) => {
	console.log("form submit");
	database.getConnection(function (err, dbConnection) {
		if (err) {
			res.render('error', {message: 'Error connecting to MySQL'});
			console.log("Error connecting to mysql");
			console.log(err);
		}
		else {
			console.log(req.body);
			dbModel.addUser(req.body, (err, result) => {
				if (err) {
					res.render('error', {message: 'Error writing to MySQL'});
					console.log("Error writing to mysql");
					console.log(err);
				}
				else { //success
					res.redirect("/");

					//Output the results of the query to the Heroku Logs
					console.log(result);
				}
			});
			
			dbConnection.release();
		}
	});

});

router.get('/deleteUser', (req, res) => {
	console.log("delete user");
	database.getConnection(function (err, dbConnection) {
		if (err) {
			res.render('error', {message: 'Error connecting to MySQL'});
			console.log("Error connecting to mysql");
			console.log(err);
		}
		else {
			console.log(req.query);

			let userId = req.query.id;
			if (userId) {
				dbModel.deleteUser(userId, (err, result) => {
					if (err) {
						res.render('error', {message: 'Error writing to MySQL'});
						console.log("Error writing to mysql");
						console.log(err);
					}
					else { //success
						res.redirect("/");

						//Output the results of the query to the Heroku Logs
						console.log(result);
					}
				});
			}
			else {
				res.render('error', {message: 'Error on Delete'});
			}
		
			dbConnection.release();
		}
	});
});


module.exports = router;
