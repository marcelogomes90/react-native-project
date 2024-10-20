import { StyleSheet } from 'react-native';

interface FlexStylesProps {
	flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';
	align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
	gap?: number;
}

export const createFlexStyles = ({
	flexWrap,
	align,
	justify,
	direction,
	gap
}: FlexStylesProps) => {
	const styles: any = {
		display: 'flex',
		flexWrap
	};

	if (align) {
		styles.alignItems = align;
	}

	if (justify) {
		styles.justifyContent = justify;
	}

	if (direction) {
		styles.flexDirection = direction;
	}

	if (gap !== undefined) {
		styles.gap = gap;
	}

	return StyleSheet.create(styles);
};
