import type React from "react";

import { MainLast, MainLocal, MainPrincipal, MainSecond, MainWhy } from "@/components/atoms";
import { MainSwiper } from "@/components/molecules";

const Main: React.FC = () => (
	<>
		<MainPrincipal />
		<div className="mt-20">
			<MainSecond />
		</div>
		<div className="mt-20">
			<MainWhy />
		</div>
		<div className="mt-20">
			<MainSwiper />
		</div>
		<div className="mt-20">
			<MainLocal />
		</div>
		<div className="mt-20 mb-20">
			<MainLast />
		</div>
	</>
);

export default Main;
