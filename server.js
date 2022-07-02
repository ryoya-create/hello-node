const express = require("express");
const app = express();
const  userRouter = require("./routes/user");

const PORT = 3000;

app.get("/", (req,res) => {
    //console.log("helo node.js")
    res.send("<h1>こんにちは</h1>");
    //res.status(404).json({msg: "エラーです"});
})

//ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => console.log("サーバーが起動しました"));