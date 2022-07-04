const express = require("express");
const app = express();
const  userRouter = require("./routes/user");

const PORT = 3000;

//app.use(mylogger);

//静的ファイルを使う
app.use(express.static("public"));

//テンプレートエンジンejsの指定
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    //console.log("helo node.js")
    //res.send("<h1>こんにちは</h1>");
    //res.status(404).json({msg: "エラーです"});
    res.render("index", {text: "node.jsとExpress"});
})

//ルーティング
app.use("/user", userRouter);
//app.use("/auth", authRouter);
//app.use("/customer", customerRouter);
//app.use("/product", productRouter);

//ミドルウェア
function mylogger(req,res, next){
    console.log(req.originalUrl);
}

app.listen(PORT, () => console.log("サーバーが起動しました"));