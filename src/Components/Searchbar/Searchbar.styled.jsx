import styled from "@emotion/styled";

export const Div = styled.div`
	top: 0;
	left: 0;
	position: sticky;
	z-index: 1100;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 75px;
	padding-right: 24px;
	padding-left: 24px;
	padding-top: 12px;
	padding-bottom: 12px;
	color: #fff;
	background-color: #3f51b5;
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Form = styled.form`
	display: flex;
	align-items: center;
	max-width: 600px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
`;
export const Input = styled.input`
	display: flex;
	align-items: center;
	width: 250px;
	height: 35px;
	background-color: #fff;
	border-radius: 3px;
	overflow: hidden;
	cursor: pointer;
	outline: none;
	border: none;
`;
export const Button = styled.button`
	position: relative;
	display: inline-block;
	width: 40px;
	height: 35px;
	border: 0;
	background-size: 40%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.6;
	transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
	cursor: pointer;
	outline: none;
	&:hover {
		opacity: 1;
	}
`;
export const Span = styled.span`
	position: absolute;
	top: 13px;
	left: 13px;
`;
