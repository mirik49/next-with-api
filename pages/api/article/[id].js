const fs = require("fs");

export default function articlesHandler(req, res) {
    const {
        query: {id},
        method,
    } = req;
    const content = fs.readFileSync("./articles.json", "utf8");
    const articles = JSON.parse(content);
    let article = null;

    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id === parseInt(id)) {
            article = articles[i];
            break;
        }
    }

    switch (method) {
        case 'GET':

            if (article) {
                res.status(200).json(article)
            } else {
                res.status(404).send();
            }

            break
        default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}
