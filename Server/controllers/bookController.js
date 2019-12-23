const db = require('../models');

//What do we want to do?
//Important thing: Back end just handles communication with the Mongo database.
// Front end will handle interaction with the google books api.
//1. We want to add books to the db. This is a 'create' command.
//2. We want to list all items in the db, sorted alphabetically by author. This is a 'findAll' command.