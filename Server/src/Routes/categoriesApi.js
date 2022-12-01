import  express  from "express";
const router = express.Router();
import {createCategory, getCategory, updateCategory, deleteCategory, getCategoryByID} from "../Controllers/CategoryController.js"


//CATEGORY ROUTES

router.post("/",async(req,res,next)=>{
    try {
        const body = req.body;
        const category = await createCategory(body);
        
        res.status(200).json(category)
    } catch (error) {
        next(error)
    }
})

router.get("/",async(req,res,next)=>{
    try {
        const categories = await getCategory();
        if(!categories){
            res.status(404).send("Categories not found")
        }
        res.status(200).json(categories)  
    } catch (error) {
        next(error)
    }
})

router.patch("/:id",async(req,res,next)=>{
    try {
        const id = req.params.id;
        const body = req.body;
        
        const category = await updateCategory(id, body);
        res.status(200).json(category)
        
    } catch (error) {
        next(error)
    }
})

router.delete("/:id",async(req,res,next)=>{
    try {
        const id = req.params.id;

        const category = await deleteCategory(id);
        res.status(200).json(category)
        
    } catch (error) {
        next(error)
    }
})

router.get("/:id",async(req,res,next)=>{
    try {
        const id = req.params.id;
        const category = await getCategoryByID(id);
        if(!category){
            res.status(404).send("This category isn't found")
        }
        res.status(200).json(category)  
    } catch (error) {
        next(error)
    }
})


export default router;