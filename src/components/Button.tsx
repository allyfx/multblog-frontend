import { ButtonContainer } from "styles/components/Button";

export default function Button(props) {
	return (
		<ButtonContainer {...props}>{props.children}</ButtonContainer>
	);
};
