import React from "react";
import Container from "../Container";
import port from "../../data/portfolio.json";

export default function Dt() {
    return (
        <>
            <Container data={port[0]} />
        </>
    );
}
