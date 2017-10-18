import React from "react";
import { Link } from "react-router-dom";

import PortfolioComponent from "./Component";

export default class PortfolioContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            galleries: []
        };

        this.searchById = this.searchById.bind(this);
        this.genLinks = this.genLinks.bind(this);
    }
    componentDidMount() {
        this.setState({
            galleries: [
                {
                    title: "Newborn Gallery",
                    _id: "12345f11",
                    imgUrl:
                        "https://woodmancyphotography.com/wp-content/uploads/2017/03/26-409-pp_gallery/bright_turquoise_newborn_baby_reno_nevada-1024x684%28pp_w768_h513%29.jpg"
                },
                {
                    title: "Wedding Gallery",
                    _id: "12345f12",
                    imgUrl:
                        "https://woodmancyphotography.com/wp-content/uploads/2017/03/26-409-pp_gallery/wedding_reno_nevada_june_bride_groom(pp_w768_h512).jpg"
                },
                {
                    title: "Maternity Gallery",
                    _id: "12345f13",
                    imgUrl:
                        "https://woodmancyphotography.com/wp-content/uploads/2017/03/20161026-DSC_9313.jpg"
                }
            ]
        });
    }

    searchById(id) {
        return this.state.galleries.find(gallery => {
            return id === gallery._id;
        });
    }

    genLinks() {
        return this.state.galleries.map(gallery => {
            return (
                <div className="link">
                    <Link key={gallery._id} to={`/portfolio/${gallery._id}`}>
                        <h2 className="link-text galleryTitle">
                            {gallery.title}
                        </h2>
                        <img
                            className="galleryImage"
                            src={gallery.imgUrl}
                            alt=""
                        />
                    </Link>
                </div>
            );
        });
    }

    render() {
        return (
            <PortfolioComponent
                searchById={this.searchById}
                genLinks={this.genLinks}
            />
        );
    }
}
