import React from "react";
import {NextPage} from "next";
import Link from "next/link";

const Index: NextPage = () => {
    return <Link href="/articles"><a className="main-link">Articles</a></Link>
}
export default Index;
