import React from 'react';

import { Button, Container, Input, Text } from '../../components';

interface LoginProps {
    onEnterPress: () => void;
    onChangeText: (text: string) => void;
}

const Login: React.FC<LoginProps> = ({ onEnterPress, onChangeText }) => (
	<Container flex padded style={{ justifyContent: 'center' }}>
		<Text textAlign="center" type="h3">Olá, seja Bem-vindo!</Text>
		<Input placeholder="Digite seu nome:" onChangeText={onChangeText}/>
		<Button
			block
			onPress={onEnterPress}
		>
            Entrar
		</Button>
	</Container>
);

export default Login;
