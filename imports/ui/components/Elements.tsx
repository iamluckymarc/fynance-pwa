import React from 'react'
import styled from '@emotion/styled'


// export const OverflowText = styled.div`
// 	width: 11rem;
// 	font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
// 	font-weight: 500;
// 	white-space: nowrap;
// 	display: inline-block;
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// 	text-align: ${(props) => (props.format ? props.format : 'inherit')};
// 	margin: ${(props) => (props.margin ? props.margin : '0px 0px -4px 0px')};
// 	color: ${(props) => (props.color ? props.color : props.theme.colors.darkGrey)};
// 	justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
// `;

// export const ApplicationIcon = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	font-size: ${(props) => (props.size ? props.size : '1rem')};
// 	width: ${(props) => (props.width ? props.width : '50px')};
// 	height: ${(props) => (props.height ? props.height : '50px')};
// 	background-size: cover;
// 	flex-grow: 0;
// 	flex-shrink: 0;
// 	margin: ${(props) => (props.margin ? props.margin : '0px 0px')};
// 	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0px')};
// 	background-repeat: no-repeat;
// 	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
// 	background-position: center;
// 	background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
// `;


interface IIconBox extends JSX.Element {
    width: string,
    height: string
    borderRadius: string,
    margin: string,
    backgroundColor: string,
    backgroundSize: string,
    src: string
}

export const IconBox = styled.div<IIconBox>`
	display: flex;
	flex-direction: column;
	width: ${(props) => (props.width ? props.width : '50px')};
	height: ${(props) => (props.height ? props.height : '50px')};
	background-size: cover;
	flex-grow: 0;
	flex-shrink: 0;
	border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '0px')};
	margin: ${(props) => (props.margin ? props.margin : 'inherit')};
	background-repeat: no-repeat;
	background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
	background-position: center;
	background-size: ${(props) => (props.backgroundSize ? props.backgroundSize : 'cover')};
	background-image: ${(props) => (props.src ? `url(${props.src})` : 'none')};
`;