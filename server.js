const express = require("express");
const app = express();
const userRouter = require("./routes/user");
const db =require("./db/pool");

const PORT = 3000;

//静的ファイルを使う
app.use(express.static("public"));

//テンプレートエンジンejsの指定
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("index", {text: "node.jsとExpress"});
})

//ルーティング
app.use("/user", userRouter);


//ミドルウェア
function mylogger(req,res, next){
    console.log(req.originalUrl);
}

app.listen(PORT, () => console.log("サーバーが起動しました"));