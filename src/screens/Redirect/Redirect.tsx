import { Image, View } from 'react-native';

import { Button } from '../../components';

import { redirectStyles } from './Redirect.styles';

const Logo = () => (
	<Image
		source={require('../../assets/images/logo-teddy.webp')}
		style={{ width: 160, height: 80 }}
	/>
);

interface RedirectProps {
	onEnterAppPress: () => void;
}

const Redirect: React.FC<RedirectProps> = ({ onEnterAppPress }) => (
	<View style={redirectStyles.container}>
		<View style={redirectStyles.logo}>
			<Logo />
		</View>

		<Button
			block
			style={redirectStyles.button}
			onPress={onEnterAppPress}
		>
				Entrar
		</Button>
	</View>
);

export default Redirect;
