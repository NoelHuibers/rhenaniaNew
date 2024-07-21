"use client";

import Image from "next/image";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Aktivenbilder = () => {
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
            alt="Aktivenbilder"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/0.png"
            width={1200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Aktivenbilder"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/1.jpg"
            width={1200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Aktivenbilder"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/2.png"
            width={1200}
          />
        </CarouselItem>
        <CarouselItem>
          <Image
            alt="Aktivenbilder"
            className="aspect-[2/1] rounded-lg object-cover"
            height={600}
            src="/3.jpg"
            width={1200}
          />
        </CarouselItem>
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default Aktivenbilder;
