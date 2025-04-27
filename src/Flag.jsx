import { useEffect, useState } from "react";

export function Flag({ country }) {
	const [flagUrl, setFlagUrl] = useState("");

	useEffect(() => {
		const url = `https://flagsapi.com/${country}/flat/64.png`;
		setFlagUrl(url);
	}, []);

	return (
		<div className="flag">
			<p>{country}</p>
			<img src={flagUrl} alt="" />
		</div>
	);
}
