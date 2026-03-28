"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function Home() {
    const [query, setQuery] = useState("");

    return (
        <StyledDiv>
            <h1>Search Freepik Icons</h1>
            <p>Enter a keyword below to find icons</p>
            <input
                type="text"
                value={query}
                placeholder="e.g. arrow, house, star"
                onChange={(e) => setQuery(e.target.value)}
            />
            <Link href={`/${query}`}>Search Icons</Link>
        </StyledDiv>
    );
}
