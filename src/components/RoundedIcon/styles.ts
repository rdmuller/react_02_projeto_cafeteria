import styled from "styled-components";

interface IconColor {
    iconColor: "yellowDark" | "gray" | "purple" | "yellow";
}

const ICON_COLORS = {
	yellowDark: "yellow-dark",
	gray: "base-text",
	purple: "purple",
	yellow: "yellow",
} as const;

export const ContainerRoundedIcon = styled.div<IconColor>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 100%;
    background-color: ${props => props.theme.color[ICON_COLORS[props.iconColor]]};
    color: ${props => props.theme.color["white"]};
`;