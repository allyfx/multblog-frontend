import { FooterContainer, Phrase } from 'styles/components/Footer';

interface IFooterProps {
	phrase: string;
}

export default function Footer({ phrase }: IFooterProps) {
	return (
		<FooterContainer>
			<Phrase>{phrase}</Phrase>
		</FooterContainer>
	);
};
