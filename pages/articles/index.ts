import {connect} from 'react-redux'
import Articles from "../../src/components/articles/index";
import {apiGetArticles} from "../../src/services/Api";

const mapDispatchToProps = {
}

export const getServerSideProps = async () => {
    const response = await apiGetArticles().then((response) => response);
    const articles = response.data;
    return {props: {articles}};
}

export default connect(state => state, mapDispatchToProps)(Articles);
