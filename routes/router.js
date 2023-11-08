// To define routes for client requests

// import express
const express = require('express');

// import controllers
const roomController = require('../controllers/roomsController')
const usersController = require('../controllers/usersController')
const adminPageController = require('../controllers/adminPageController')
const adminController = require('../controllers/adminController')

// Using express create object for router class inorder to setup path
const router = new express.Router()

// Use router object to resolve client request

    // get all rooms api request
    router.get('/rooms/all-rooms',roomController.getAllRooms)

    // View a particular room api request
    router.get('/rooms/view-room/:id',roomController.viewRoom)

    router.post('/users/new-user',usersController.signUp)

    router.post('/users/login',usersController.login)

    router.post('/admin/admin-login',adminController.adminLogin)

    router.post('/bookings/new-booking',adminPageController.addBookings)

    router.get('/bookings/all-bookings',adminPageController.getAllBookings)

// Export routes
module.exports = router