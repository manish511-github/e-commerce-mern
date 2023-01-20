const express=require("express");
const {authController,getUserProfile,registerUser,
updateUserProfile}=require("../controllers/userController");
const {protect}=require("../middlewares/authMiddleware");

const router=express.Router();
//uswr regiosteration
router.route('/').post(registerUser);
router.post("/login",authController);
router.route("/profile").get(protect,getUserProfile).put(protect,updateUserProfile)
module.exports=router;
