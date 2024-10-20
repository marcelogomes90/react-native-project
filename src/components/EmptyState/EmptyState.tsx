import { Image } from 'react-native';
import { ViewStyle } from 'react-native';

import Container from '../Container';
import Text from '../Text';

const EmptyStateImage = () => (
	<Image
		source={require('../../assets/images/empty-state.png')}
		style={{ width: 200, height: 200, marginBottom: 10, alignSelf: 'center', marginTop: -60 }}
	/>
);

interface EmptyStateProps {
  style?: ViewStyle;
}

const EmptyState = ({ style }: EmptyStateProps) => (
	<Container flex padded style={[{ justifyContent: 'center' }, style]}>
		<EmptyStateImage />
		<Text textAlign="center" type="h3" weight="semiBold">Nenhum item encontrado</Text>
	</Container>
);

export default EmptyState;
