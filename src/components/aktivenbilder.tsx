import Image from "next/image";
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "~/components/ui/carousel";

const Aktivenbilder = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Leben als Rhenane
            </h2>
            <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unsere Aktiven erleben viele unvergessliche Momente, die sie
              während ihrer Studienzeit begleiten. Von dem alltäglichen wie
              gemeinsames Lernen, Kochen, Feiern und Sport bis hin zum Segeln,
              Skifahren und Reisen.
            </p>
          </div>
        </div>
        <Carousel className="mx-auto w-full max-w-6xl">
          <CarouselContent>
            <CarouselItem>
              <Image
                alt="Fraternity Event"
                className="aspect-[2/1] rounded-lg object-cover"
                height={600}
                src="/0.png"
                width={1200}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Fraternity Event"
                className="aspect-[2/1] rounded-lg object-cover"
                height={600}
                src="/1.jpg"
                width={1200}
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                alt="Fraternity Event"
                className="aspect-[2/1] rounded-lg object-cover"
                height={600}
                src="/2.png"
                width={1200}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Aktivenbilder;
