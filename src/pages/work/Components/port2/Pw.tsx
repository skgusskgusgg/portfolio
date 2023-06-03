import React from "react";
import Nav from "../nav/SideNav";
import Container from "../Container";
import port from "../../data/portfolio.json";

export default function Pw() {
    return (
        <>
            <Container data={port[1]} />
        </>
    );
}
