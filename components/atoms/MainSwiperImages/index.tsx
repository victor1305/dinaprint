"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface SlidesProps {
	slides: Array<{
		backImage: string;
		title: string;
		image: string;
		url: string;
	}>;
}

const MainSwiperImages = ({ slides }: SlidesProps) => (
	<Swiper
		centeredSlides={true}
		autoplay={{
			delay: 5000,
			disableOnInteraction: false,
		}}
		loop={true}
		pagination={{
			clickable: true,
		}}
		speed={10}
		navigation={true}
		modules={[EffectFade, Autoplay, Pagination, Navigation]}
		effect="fade"
	>
		{slides.map((slide) => (
			<SwiperSlide key={slide.title}>
				<div style={{ backgroundImage: `url(${slide.backImage})` }} className="h-[464px] bg-center">
					<div className="!animate-swip-main p-8 h-full mx-auto lg:max-w-[360px] flex justify-center flex-col items-center">
						<h4 className="text-[35px] font-bold text-white pb-4 text-center">{slide.title}</h4>
						<Image src={slide.image} width={100} height={120} alt="slide image" />
						<Link
							href={slide.url}
							className="mt-8 text-base font-semibold bg-primary py-2.5 px-6 text-white hover:shadow-xl"
						>
							VER MÁS
						</Link>
					</div>
				</div>
			</SwiperSlide>
		))}
	</Swiper>
);

export default MainSwiperImages;
