import React from "react";
import MemesComponent from "./Component";
import { connect } from "react-redux";
import Meme from "./Meme";
import { memes } from "../../redux/actions/";

class MemesContainer extends React.Component {
    constructor() {
        super();

        this.genList = this.genList.bind(this);
    }

    genList() {
        return this.props.memes.map((meme, i) => {
            return (
                <Meme
                    key={meme.topText + i}
                    meme={meme}
                    memes={memes}
                    index={i}
                />
            );
        });
    }

    render(props) {
        return (
            <div>
                <MemesComponent genList={this.genList} />
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return { memes: state.memes };
};

export default connect(mapStatetoProps, memes)(MemesContainer);
