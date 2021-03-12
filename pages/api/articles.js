const fs = require("fs");

export default function handler(req, res) {
    const articles = fs.readFileSync("./articles.json", "utf8");
    res.status(200).json(articles);
}
