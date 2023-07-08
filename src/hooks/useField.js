import React from 'react';

const useField = (type) => {
	const [value, setValue] = React.useState('');

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const reset = () => {
		setValue('');
	};

	return {
		type,
		value,
		onChange,
		reset,
	};
};

export default useField;
