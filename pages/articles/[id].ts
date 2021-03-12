import {connect} from 'react-redux'
import Article from "../../src/components/articles/Article";
import {apiGetArticle, apiGetArticles} from "../../src/services/Api";

const mapDispatchToProps = {
}

export const getServerSideProps = async (context) => {
    const id = context.query.id;
    const response = await apiGetArticle(id).then(response => response);
    const article = response.data;
    return {props: {article}};
}

export default connect(state => state, mapDispatchToProps)(Article);
