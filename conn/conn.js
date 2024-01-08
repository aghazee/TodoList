const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://aghazeeshan5594:kyifLHbbnBbrUrn4@cluster0.ums54mq.mongodb.net/nodeJsTodoList?retryWrites=true&w=majority"
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
