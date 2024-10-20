import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { BottomSheetModalProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetModal/types';
import React, { useMemo, useCallback, forwardRef } from 'react';
import { ViewStyle } from 'react-native';
import { Portal } from 'react-native-portalize';

import { createBottomSheetStyles } from './BottomSheet.styles';

interface BottomSheetProps extends BottomSheetModalProps {
  snapPoints: (string | number)[];
  children: React.ReactNode;
  backdropPressDisabled?: boolean;
  padded?: boolean;
  style?: ViewStyle[];
  autoHeight?: boolean;
}

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(({
	snapPoints,
	children,
	backdropPressDisabled,
	padded = false,
	style,
	autoHeight,
	...props
}, ref) => {
	const snapPointsOptions = useMemo(() => snapPoints, [snapPoints]);
	const bottomSheetStyles = createBottomSheetStyles({ padded });

	const renderBackdrop = useCallback((backDropProps: React.ComponentProps<typeof BottomSheetBackdrop>) => (
		<BottomSheetBackdrop
			{...backDropProps}
			appearsOnIndex={1}
			disappearsOnIndex={-1}
			pressBehavior={backdropPressDisabled ? 'none' : 'close'}
		/>
	), [backdropPressDisabled]);

	return (
		<Portal>
			<BottomSheetModal
				ref={ref}
				backdropComponent={renderBackdrop}
				enableDynamicSizing={autoHeight}
				index={0}
				snapPoints={snapPointsOptions}
				style={[bottomSheetStyles.container, style]}
				{...props}
			>
				{children}
			</BottomSheetModal>
		</Portal>
	);
});

export default BottomSheet;
