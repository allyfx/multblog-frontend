import { useState } from "react";

import Head from 'next/head';
import { useRouter } from "next/router";

import Input from "components/Input";
import Button from "components/Button";

import api from 'utils/api';

import {
  SigninContainer,
  SigninMessage,
  SigninForm,
  GoBackContainer
} from "styles/pages/Signin";

interface IData {
  name: string;
  email: string;
  password: string;
}

export default function SignIn() {
  const [data, setData] = useState<IData>({
    name: '',
    email: '',
    password: '',
  });
  const router = useRouter();

  async function handleSubmit() {
    try {
      await api.post("/users/create", data);

      router.push("/session/login");
    } catch(err) {
      console.log(err);
    }
  }

  const handleGoBack = () => {
		router.back();
	};

  function handleUpdateData(field: string, value: string) {
    setData({
      ...data,
      [field]: value
    });
  }

  return (
    <SigninContainer>
      <Head>
        <title>SignIn - MultBlog</title>
      </Head>

      <SigninMessage>
        <h2>Preparado(a) para compartilhar suas ideias com o mundo?</h2>
        <p>Junte-se a nós e comece a escrever!</p>
      </SigninMessage>

      <SigninForm>
        <h2>Vamos lá, crie sua conta!</h2>
        <Input
          placeholder="Digite seu nome"
          onChange={(e) => handleUpdateData("name", e.target.value)}
          value={data.name}
        />
        <Input
          placeholder="Digite seu email"
          onChange={(e) => handleUpdateData("email", e.target.value)}
          value={data.email}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => handleUpdateData("password", e.target.value)}
          value={data.password}
        />
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </SigninForm>

      <GoBackContainer>
        <img src="../icons/goback.svg" alt="Voltar"/>
        <span onClick={handleGoBack}>Voltar</span>
      </GoBackContainer>
    </SigninContainer>
  );
}