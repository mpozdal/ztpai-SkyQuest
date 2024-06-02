function FormInput({ data }) {
	return (
		<>
			<label className="w-[100px] text-xl" htmlFor={data.text}>
				{data.text}:
			</label>
			<input
				className="p-2 rounded-[50px]"
				type={data.type}
				id={data.text}
				name={data.text}
				value={data.value}
				onChange={(e) => data.onChange(e.currentTarget.value)}
			/>
		</>
	);
}

export default FormInput;
