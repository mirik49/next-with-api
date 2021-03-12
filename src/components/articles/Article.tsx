import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import {useRouter} from 'next/router'
import {apiGetArticle} from "../../services/Api";

interface ArticleProps {
    article: {
        title: string,
        description: string
    };
}

const Article: NextPage<ArticleProps> = ({article}) => {

    console.log(article, "front")

    return (
        <div className="article">
            <h1>
                {article.title}
            </h1>
            <p>
                {article.description}
            </p>
        </div>
    )
}

export default Article;
