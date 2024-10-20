import { TextStyle } from 'react-native';

import { COLORS, TEXT } from '../../constants/theme';

interface TextStylesProps {
	type?: keyof typeof TEXT.type;
	weight?: keyof typeof TEXT.weight;
	capitalize?: boolean;
	textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
	shrink?: boolean;
	italic?: boolean;
	color?: string;
}

export const createTextStyles = ({
	type,
	weight,
	capitalize,
	textAlign,
	shrink,
	italic,
	color = COLORS.dark.pure
}: TextStylesProps): TextStyle => ({
	fontFamily: 'Inter',
	fontStyle: italic ? 'italic' : 'normal',
	color: COLORS[color as keyof typeof COLORS]?.pure || color,
	fontSize: type ? TEXT.type[type] : TEXT.type.p,
	textTransform: capitalize ? 'capitalize' : 'none',
	textAlign: textAlign || 'auto',
	flexShrink: shrink ? 1 : 0,
	fontWeight: weight ? TEXT.weight[weight] as TextStyle['fontWeight'] : 'normal'
});
