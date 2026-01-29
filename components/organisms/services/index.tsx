import { servicesTypes } from "@/lib/constants";

import { SectionPrincipalBanner, Service, ServicesPrincipal } from "@/components/atoms";

const Services = () => (
	<div>
		<SectionPrincipalBanner
			title="Soluciones y servicios"
			subtitle="Soluciones y servicios gráficos"
		/>
		<div className="pt-10">
			<ServicesPrincipal />
		</div>
		<div className="py-10">
			{servicesTypes.map((elm) => (
				<Service key={elm.title} {...elm} />
			))}
		</div>
	</div>
);

export default Services;
