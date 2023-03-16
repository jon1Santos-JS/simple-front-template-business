import { SetStateAction, useState } from 'react';

const useInputCheck = () => {
    const [isFirstCheck, setFirstCheck] = useState(true);

    const changeInputState = (state: string) => {
        if (isFirstCheck) return '';
        return state === '' ? 'has-empty-value' : '';
    };

    function onCheckInputLength(
        targetValue: string,
        length: number,
        setValue: (value: SetStateAction<string>) => void,
    ) {
        if (!(targetValue.length <= length)) return;
        setValue(targetValue);
    }

    return { changeInputState, onCheckInputLength, setFirstCheck };
};

export default useInputCheck;
