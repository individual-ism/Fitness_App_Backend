import { Router } from 'express'
import exercisesRoutes from './exercises.js'
import exerciseRecRoutes from './exerciseRecs.js'
import path from "path"
import { nextTick } from "process";

const router = Router()

router.get('/', (req, res) => {
    const __dirname = path.resolve(path.dirname(""))
    let options = {
        root: path.join(__dirname)
    }
    let fileName = "index.html"
    res.sendFile(fileName, options, (err) => {
        if (err) {
            nextTick(err)
        } else {
            console.log("Sent: ", fileName)
        }
    })
})

router.use('/exercises', exercisesRoutes)
router.use('/exerciserecs', exerciseRecRoutes)

export default router