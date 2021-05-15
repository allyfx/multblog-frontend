import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
	padding: 0px 124px;
  padding-top: 80px;
  padding-bottom: 40px;
	background: url("../assets/background.png");
	display: flex;
	flex-direction: column;
	align-items: flex-start;
  justify-content: space-evenly;
	h2 {
		font-weight: 700;
		font-size: 36px;
		color: #4B4B5B;
	}
`;

export const LoginForm = styled.div`
	align-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LoginMessage = styled.div`
	width: 450px;
	margin-bottom: 94px;
	p {
		font-weight: 400;
		font-size: 24px;
		color: #979797;
	}
`;

export const GoBackContainer = styled.div`
	cursor: pointer;
	margin-top: 130px;
	font-weight: 400;
	font-size: 24px;
	color: #4B4B5B;
	display: flex;
	align-items: center;
	column-gap: 16px;
`;
