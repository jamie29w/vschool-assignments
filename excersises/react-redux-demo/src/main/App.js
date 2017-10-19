import React from "react";
import Counter from "./Counter";
import ContactList from "./contacts/ContactList";

export default function App(props) {
    const styles = {
        position: "relative",
        top: "30%"
    };
    return (
        <div style={styles}>
            <Counter />
            <ContactList />
        </div>
    );
}
