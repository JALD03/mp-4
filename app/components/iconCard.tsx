import styled from "styled-components";
import { Types } from "@/app/interfaces/types";

const IconCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 160px;
    border-radius: 10px;
    text-align: center;
`;

export default function IconCard(props: Types) {
    const thumb = props.thumbnails?.[0]?.url;

    return (
        <IconCardWrapper className="icon-card">
            {thumb && <img src={thumb} alt={props.name} width={64} height={64} />}
            <h3>{props.name}</h3>
            <p>{props.family?.name}</p>
        </IconCardWrapper>
    );
}