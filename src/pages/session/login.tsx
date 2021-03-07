import { useState } from "react";
import { useRouter } from 'next/router'
import Head from 'next/head';
import Input from "components/Input";
import Button from "components/Button";
import Services from "services";
import {
	LoginContainer,
	LoginForm,
	LoginMessage,
	GoBackContainer
} from "styles/pages/Login";

interface IData {
	email: string;
	password: string;
}

export default function Login() {
	const router = useRouter();
	const [data, setData] = useState<IData>({
		email: "",
		password: "",
	});
	const handleSubmit = async () => {
		const response = await Services.Session.login(data);
		console.log(response);
	};
	const handleGoBack = () => {
		router.back();
	};
	return (
		<>
			<LoginContainer>
				<Head>
					<link rel="shortcut icon" href="../favicon.png" type="image/png"/>

					<title>Login - MultBlog</title>
				</Head>

				<LoginMessage>
					<h2>Olá, bem-vindo(a) de volta!</h2>
					<p>Que bom te ver de volta, estamos esperando para ouvir o que você tem a compartilhar.</p>
				</LoginMessage>

				<LoginForm>
					<h2>Quase lá!</h2>
					<Input
						placeholder="Digite seu email"
						onChange={(e) => setData({ ...data, email: e.target.value })}
						value={data.email}
					/>
					<Input
						placeholder="Digite sua senha"
						onChange={(e) => setData({ ...data, password: e.target.value })}
						value={data.password}
					/>
					<Button onClick={handleSubmit}>Logar</Button>
				</LoginForm>

				<GoBackContainer>
					<img src="../icons/goback.svg" alt="Voltar"/>
					<span onClick={handleGoBack}>Voltar</span>
				</GoBackContainer>
			</LoginContainer>
		</>
	);
}
