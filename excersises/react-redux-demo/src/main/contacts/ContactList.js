import React from "react";
import Contact from "./ContactComponent";
import { connect } from "react-redux";
import { removeFirstContact } from "../../redux/actions/index.js";

function ContactList(props) {
    const styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };
    return (
        <div style={styles}>
            {props.contactList.map((contact, i) => {
                return (
                    <Contact key={contact.firstName + i} contact={contact} />
                );
            })}
            <button onClick={props.removeFirstContact}>Buh Bye!</button>
        </div>
    );
}

const mapStateToProps = state => {
    return state;
};

export default connect(mapStateToProps, { removeFirstContact })(ContactList);
