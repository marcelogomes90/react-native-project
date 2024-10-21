import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

export const useBottomSheet = () => {
	const ref = useRef<BottomSheetModal>(null);

	const open = useCallback(() => {
		if (ref.current) {
			ref.current.present();
		}
	}, []);

	const close = useCallback(() => {
		if (ref.current) {
			ref.current.dismiss();
		}
	}, []);

	return {
		bottomSheetRef: ref,
		snapPoints: ['25%', '50%', '100%'],
		open,
		close
	};
};
