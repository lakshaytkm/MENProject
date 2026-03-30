const express= require("express");
const connectDB= require("./config/database");
const app = express();
const User= require("./models/user");

app.use(express.json());

// SIGNUP API
app.post("/signup", async (req, res)=>{
  //instance creation
  const user= new User(req.body);
  try{
   await user.save();
   res.send("User added successfully");
  }catch(err){
    res.status(400).send("Error adding user");
  }
})

//FEED API
app.get("/feed", async (req,res)=>{
  try{
  const users= await User.find({});
  res.send(users);
  }catch(err){
    res.status(400).send("Some error occured");
  }
})

// FIND USER
app.get("/user", async (req,res)=>{
  try{
  const users= await User.find({email: req.body.email});
  if (users.length===0){
    res.status(404).send("No users found");
  }
  else{
  res.send(users);
  }
  }catch(err){
    res.status(400).send("Some error occured");
  }
})

// DELETE USER
app.delete("/user", async(req,res)=>{
  const userid= req.body.id;
  try{
    const results= await User.findByIdAndDelete({userid});
      if (!results){
        res.status(404).send("No user exists");
      }
      else{
    res.send("User deleted successfully");
      }
  }catch(err){
    res.status(400).send("Some error occured");
  }
})


// UPDATE USER
app.put("/user", async (req, res) => {
  const { id, ...updateData } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id,updateData,{ new: true } );
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("Some error occurred");
  }
});


connectDB()
  .then(() => {
    console.log("connected to database");

    app.listen(7777, () => {
      console.log("server connected");
    });
  })
  .catch((err) => {
    console.log("error:", err);
  });
  