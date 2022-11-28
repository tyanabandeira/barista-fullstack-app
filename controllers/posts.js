const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

module.exports = {
  //getProfile
  getOrder: async (req, res) => {
    try {
      const ordersPending = await Post.find({ orderStatus: "pending" });

      const completeOrders = await Post.find({ orderStatus: "complete" });


      res.render("profile.ejs", { ordersPending: ordersPending, completeOrders: completeOrders });
    } catch (err) {
      console.log(err);
    }
  },

  createOrder: async (req, res) => {
    console.log(req.body)
    try {
      await Post.create({
       customerName: req.body.customerName,
       coffeeFlavor: req.body.coffeeFlavor
      });
      console.log("Order has been created!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  completeOrders: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
         orderStatus: "complete",
         user: req.user.userName
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deleteOrder: async (req, res) => {
    try {
      // Find post by id
      // let post = await Post.findById({ _id: req.params.id });
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Delete order");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
};
