import { findBoxes } from "@/lib/constants";

import { FindBox } from "@/components/atoms";

const FindUs = () => (
	<div>
		<h2 className="text-3xl text-secondary text-center font-medium">ENCUÉNTRANOS EN</h2>
		<div className="relative mt-10 mx-auto max-w-[400px] lg:flex lg:justify-between lg:items-center lg:max-w-[960px]">
			{findBoxes.map((elm) => (
				<div key={elm.title} className="p-2.5">
					<FindBox {...elm} />
				</div>
			))}
		</div>
	</div>
);

export default FindUs;
