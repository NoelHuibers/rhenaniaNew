"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hauscarousel = () => {
  return (
    <Carousel
      className="mx-auto w-full max-w-6xl"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <Image
            alt="Fraternity House"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/Haus0.png"
            width={1200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Fraternity House"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/Haus1.png"
            width={1200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Fraternity House"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/Haus2.png"
            width={1200}
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Hauscarousel;
