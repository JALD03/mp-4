"use client";

import styled from "styled-components";
import { useParams } from "next/navigation";
import IconCard from "@/app/components/iconCard";
import { Types } from "@/app/interfaces/types";
import {useState} from "react";
import {useEffect} from "react";


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function QueryPage() {
    const params = useParams();
    const [data, setData] = useState<Types[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/icons?query=${params.query}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then((json) => {
                setData(json?.data || []);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [params.query]);

    if (error) return <div>Failed to load icons. Please try again later.</div>;
    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>Icons for &quot;{params.query}&quot;</h1>
            <Container>
                {data.map((icon: Types) => (
                    <IconCard key={icon.id} {...icon} />
                ))}
            </Container>
        </div>
    );
}