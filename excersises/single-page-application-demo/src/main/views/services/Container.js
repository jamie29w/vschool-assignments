import React from "react";
import { Link } from "react-router-dom";

import ServicesComponent from "./Component";

export default class ServicesContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            services: []
        };
        this.genLinks = this.genLinks.bind(this);
        this.searchById = this.searchById.bind(this);
    }
    componentDidMount() {
        this.setState({
            services: [
                {
                    title: "mow lawn",
                    price: 50,
                    _id: "123456f12"
                },
                {
                    title: "rake leaves",
                    price: 30,
                    _id: "123456f13"
                },
                {
                    title: "mulch leaves",
                    price: 40,
                    _id: "123456f14"
                }
            ]
        });
    }

    searchById(id) {
        return this.state.services.find(service => {
            return id === service._id;
        });
    }

    genLinks() {
        return this.state.services.map(service => {
            return (
                <Link key={service._id} to={`/services/${service._id}`}>
                    {service.title}
                </Link>
            );
        });
    }

    render() {
        return (
            <ServicesComponent
                searchById={this.searchById}
                genLinks={this.genLinks}
            />
        );
    }
}
