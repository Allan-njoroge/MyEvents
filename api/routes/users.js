import express from 'express'
import { updateUser } from '../controllers/usersController.js'

const router = express.Router()

router.put('/update', updateUser)

export default router
