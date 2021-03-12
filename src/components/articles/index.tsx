import React from "react";
import {NextPage} from "next";
import Link from "next/link";

interface Props {
    articles: {}
}


const Articles: NextPage<Props> = ({articles}) => {

    return (
        <ul className="articles__list">
            {Object.keys(articles).map(index => {
                const {title, id, descriptions} = articles[index];
                return (
                    <li key={title} className="articles__item">
                        <Link href={`/articles/${id}`}>
                            <a>
                                <p>{title}</p>
                                <p>{descriptions}</p>
                            </a>
                        </Link>

                    </li>
                )
            })}
        </ul>
    )
}

export default Articles;
