import React from "react";
import ListComponent from "./Component";
import PostContainer from "./post/Container";
import { connect } from "react-redux";
import { posts } from "../../redux/actions";

class ListContainer extends React.Component {
    constructor(props) {
        super(props);

        this.genList = this.genList.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.loadPosts();
    }

    genList() {
        return this.props.posts.map((post, i) => {
            return (
                <PostContainer post={post} key={post.title + i} id={post._id} />
            );
        });
    }

    // handleDelete(id) {
    //     this.props.deletePost(id);
    // }
    //
    // handleUpVote(id) {
    //     this.props.editPost(id, this.state.inputs);
    // }

    render() {
        return <ListComponent genList={this.genList} />;
    }
}

const mapStatetoProps = state => {
    return { posts: state.posts };
};

export default connect(mapStatetoProps, posts)(ListContainer);
