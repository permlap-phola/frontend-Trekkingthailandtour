import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "@/components/footer/footer";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { XyzTransitionGroup } from "@animxyz/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import TheLine from "@/components/svg/line";
import { sanityClient } from "@/sanity";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
const stylesComputer = {
  fontFamily: "Poppins",
  width: "100%",
  fontWeight: "bold",
  fontSize: "3rem", // Font size for mobile devices
  color: "#41644A",
};
const stylesMobile = {
  fontFamily: "Poppins",
  width: "100%",
  fontWeight: "bold",
  fontSize: "2rem", // Font size for mobile devices
  color: "#41644A",
};
export default function Home({ feedbacks }) {
  const router = useRouter();
  const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTrigger(() => true);
    }, 300);
  }, []);
  return (
    <div className="bg-third-color">
      <Head>
        <title>TREKKING THAILAND TOUR</title>
        <meta
          name="description"
          content="Trekking Thailand Tour -    has been established with love and passion for nature , wildlife, and the beauty of the various Thai local ways of lives. Our experienced tour guides, specialized in each branch of nature, are ready to take you to explore the esthetic touch of Thai nature. คืดถึงเที่ยวที่เขาใหญ่ คิดถึง Trekking Thailand Tour.  
          Experience the wonders of Khao Yoi, Thailand with Trekking Thailand Tour. Our local tour guides will take you on an unforgettable journey through breathtaking landscapes and hidden gems. Book your adventure today!"
        />
        <meta
          name="keywords"
          content="Khao Yai tours, Thailand travel, Wildlife tours, Animal encounters, 
          Khao Yai national park, Eco-tours, Jungle safaris, Wildlife photography, Birdwatching, 
          Elephant encounters, Wildlife sanctuaries, Bat caves, Night safaris, Bird species in Khao Yai,
          Flora and fauna of Khao Yai, Khao Yai wildlife habitats, Cultural immersion,
          Local traditions, Indigenous communities, Traditional arts and crafts, Thai cultural performances,
          Temple visits, Meditation retreats, Thai cooking classes, Traditional Thai massage, Nature exploration,
          Rural villages, Local cuisine, Vineyards and wineries, Waterfalls and natural pools, 
          Adventure activities, Jungle lodges, Wildlife conservation, Nature conservation, Guided hikes, 
          Authentic experiences, Local markets and shopping."
        />
        <meta property="og:title" content="TREKKING THAILAND TOUR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Trekking Thailand Tour (Khao Yai tours) -    has been established with love and passion for nature , wildlife, and the beauty of the various Thai local ways of lives. Our experienced tour guides, specialized in each branch of nature, are ready to take you to explore the esthetic touch of Thai nature. คืดถึงเที่ยวที่เขาใหญ่ คิดถึง Trekking Thailand Tour"
        />
        <meta property="og:image" content="/image/thumbnail/image.jpg" />
        <meta property="og:url" content="https://trekkingthailandtour.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className="hidden md:block">
        <div className="absolute right-0 z-40 lg:top-96 xl:top-40">
          <TheLine />
        </div>
        <header
          className=" w-full md:h-[40rem] lg:h-screen relative
       bg-[url('/image/hero-flip-background.jpg')]  overflow-hidden flex justify-start items-end bg-cover
        bg-[left_calc(50%)_top_calc(20%)]
       "
        >
          <XyzTransitionGroup className="item-group" xyz="fade-50% down-2">
            {trigger && (
              <div className="xl:w-5/12 lg:w-7/12 md:w-8/12 md:relative md:z-50 flex items-start justify-center mb-40 square">
                <div className=" w-full p-5 flex flex-col">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "Love and Passion for Nature",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "Love and Passion for Wild Animals",
                      1000,
                      "Love and Passion for Trekking",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={stylesComputer}
                    repeat={Infinity}
                  />
                  <span className="font-Poppins font-outline-2 font-semibold text-xl md:text-main-color lg:text-supper-main-color uppercase">
                    Trekking Thailand Tour
                  </span>
                  <span className="font-Poppins font-semibold text-base font-outline-2 text-main-color relative z-40">
                    has been established with love and passion for nature ,
                    wildlife, and the beauty of the various Thai local ways of
                    lives. Our experienced tour guides, specialized in each
                    branch of nature, are ready to take you to explore the
                    esthetic touch of Thai nature.
                  </span>
                </div>
              </div>
            )}
          </XyzTransitionGroup>
          <div className="lg:w-[90rem] md:w-96 h-full absolute md:right-0 2xl:-bottom-5 2xl:right-0 z-40  ">
            <Image src="/image/hero-flip.png" fill className="object-cover" />
          </div>
        </header>
        <main className="flex flex-col w-full justify-start items-center">
          <section
            className="w-full bg-third-color  h-[40rem]  items-center relative 
           justify-around flex flex-row-reverse"
          >
            <div
              className="lg:w-4/12 md:h-max  lg:h-80  relative z-40  mb-0  flex justify-end flex-col gap-2 
             items-start"
            >
              <div className="w-full flex items-center ">
                <span className="lg:w-80 md:w-52">
                  <span className="font-bold md:text-2xl lg:text-5xl text-supper-main-color">
                    1 DAY{" "}
                  </span>
                  <span className="text-main-color font-bold md:text-xl lg:text-3xl">
                    Wildlife Photography tour{" "}
                  </span>
                </span>
                <div className="w-16 h-16 bg-slate-400 ring-2 ring-white rounded-full overflow-hidden relative">
                  <Image src="/image/beer.jpg" fill className="object-cover" />
                </div>
              </div>
              <span>at Khaoyai National Park by Guide Beer.</span>
            </div>
            <div className="w-2/4 h-60 gap-5 mt-5 grid grid-cols-3 grid-rows-2">
              <div className="bg-gray-400 col-span-1 row-span-2 rounded-lg overflow-hidden relative">
                <Image
                  src="/image/grid-images-homepage/bird.jpg"
                  fill
                  className="object-cover hover:scale-125 transition duration-150"
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  alt="a picture of the bird"
                  blurDataURL="data:image/jpeg;base64,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WbS1m0C1m1bWbQS1m1bWLQLWbS1m0EtZtW1i0VLWbVtYtBLWLVtZtBLWLVtYtELWLVtYtULWbS1m0QtZtLWbVZq6axpqst6usaujLcrUrnqyg6ytSucrUorpK1K5ytSorpKsrErUoNytSucrUoNyrrEq6DerrGroN6usaug1prOroNaazpoPQaazprLs1prOmg3prGroNaazpoNausaug1prOmg3prGroNaazpojWms6aDWms6aDWms6aDWms6mg1prOpoNampqaC6azqaDWs6mpoLalqWpaC2s2paloFqWpaloFrNpazaKWs2lrNoJazatrFoFrFq2sWgWsWraxaBaxatrFoJaxatrFoFrFpazaCWs2lrF6VMW1i1L0x6Vmx001z9HpUx01rXKdNSiY6SrK5ytSjNjpK1K5StSiO0rUrlK1KNOsrUrnKsqDpK1K5ytSg3K1K5ytaK3q6xq6DWrrGroNaus6aDWms6aD0Gms6aw6taazpoNaazpoN6axpqjems6aDemsaug1prOmg1q6xpoN6axpoN6azpojWmsaaDWms6aDWprOmg1qazpoLqampoLqampoLalqWs2gtqWpazaKtrNpazaC2s2lrNoFrNpaxaBazaWs2gWsWraxaKWsWraxaCWs2lrFoFrFpaxaKWudp105ddKYvXTn12l61i0LFvSagaimoGjWrOmFNTHSdNyuGtTppm8u8rUrjOm5Rix1lalcpWpRl2lalcpWpUV1lalcpWpQdJV1iVZRXTV1z1dBvV1jV0G9NY1dBrTWdNB9/TWdNYdmtNZ00GtXWNNBvTWNNBvV1jTQb01jV1Ua1dY00G9NY00G9NY1dBrTWdTQb01jTQb1NZ00GtTWdNEa1NZ00F01nU0GtZ1NTRVtS1LU0FtZtS1LQW1m1LUtAtZtLWbQLWbS1m0UtZtLWLQLWbS1i1AtYtW1i0VLWLS1jqqpa59dJ105ddaLIddMWlrNTVvxLUAcwAAAAABUAWVudOatSpY7TpuV+edY6Tppi8u0rU6cZW5RjHaVqVxnTU6B2lWVylalQdNa1yla0VvV1jTQdNNY00G9NZ00H39NY01h3b01jTRG9XWNNBvTWNNBvTWdNBvTWNNBvTWNXQa1dY01Ub01jTQb01jTQb01jTQa01nU0G9TWdTQb1NZ1NBrU1NTQXU1NTQXUtS1m0Gr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"
                />
              </div>
              <div className="bg-gray-400  rounded-lg overflow-hidden relative">
                <Image
                  src="/image/grid-images-homepage/cow.jpg"
                  fill
                  alt="a picture of the cow"
                  className="object-cover hover:scale-125 transition duration-150"
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAGxAooDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECBQT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAEQH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AOiA8LzgAAIAAAAAAAAogAAIKAKCAAioKIqKCACIqKCKgIiooiKgoisqCACMtayogAMgKIioCIqKIioCACoAogACKgAAoAAAgACqAAqKAAAAAACgCgCDugPO4AAAAAAACgAAgAACiAoAgAAIAqoACAgCKiiAAiKiiIqCoioogICIqKIioogAIggCKiiIqAgCqgAIAAioAAKAAAAAoACKKgCgAAAAAKgKogDvAjzuCiAKIAogAAAAACAqAqgIAAAgKCKgoioAgKIACIqKICCiKiiIqAiKiiIqAiKiiIqAiKiggAiKiqgAIACAAIqAACgAAACoCqIoAAKIqAAAAAAKACO6IPO4qIAogCiCioAAAAgKogACAqAoCAoCAAigioAgKICAIqKqIqAIIoIAIiooiKgIiooiKgIAqoioCAAgCiAAgAoAAAAAAAiioAoACoAoigAAAIAAO2A4OIAAAAIAogCiCqogACAogCoAAgqgIACAAigioAgKqIqAIIoIqAiKigyqAIIoIAqIqKIioAioogIACAAKIAKAAAAAIAAoAAqAKAgAAKgCiAKIA7Yg4OKiAKIAogCoCqCAKIAogCoAAgKAgKgKAgAIKCAKIIACKCACIqKCCAICqiKiiIqAICiIqAgIAiooIqCiKgAAAgAAAAKogCiKAAgKgCiAKAAAAADs0SlcXJRKUFEpQUQBRAFQqAogCiAKICgICiAAIoqCAqCCqgiioIACKCACAiqIAIioogIAgKIioCAigioKICiAAgAAIAAAAAAKAAAIKIAogCgAAAAAAA69KlK4uS0SlBoZpQaRKAogClQBaJSiqIApUABKAogCoIoogKCAAgACKCAAgiqAgCAoiKgCAoiKigggoiooIAICAAigCAAAAgoAAAAACiCCiAKIoAAAACoIKIA61KlK5OS0qUoLSpSgtEpQUSlFUQBRCgtEqUGhkBSoAogKqCAogoAgKggKgiioIKAiggAICiAgCAqoCAICiAgCKiggAgCqIACKgAAAgCiAKIAoggogCgAAAAIKIAogDqUqUrm5rSpSgtKlKC0qUoLSpSoLRKUFpUAWlSlBaVKUFEoKtKhQVEFFEAAQFQBQQUBABAAQFBBBQEUEBQQQBFRQQBUBFBFQBFQBFRQBAVAABAUQBRBBRAFEAUQBRBBQAAAAAdKlZpXNzapWatBaVKAtKlKC0qUoLRKA0M0orRWaUGqVmlQaozSg0MgLRBRRAVUEBRAAQBUEUVBBQEUAQAEUEABBFURUAQFEBAARQBAAQUBFFQAAQFEEFEAUQEUQBRBBRAFEAUQBRAHRpWaVhzapWaUVqlZpUGqVKUFpUpQWrWaUGqM0oNDNWgpUoC0SlQWlSgqiALSoKAICiAAIKqAAIKAgAgKCAKIIoAigCAICgggoCKAIACAAgKgACAKIAAAAgKIIKIAogIoAAAAIDoUrNKww1Ss0oNUrNKDVKzSg1SpSoNUrNKDVKzVoLSpSgtKlKK0M0QaGQGqIAoiA1UQFUQUVAAEAARRUEFVBFFQQAEUAQUQFBABARQBAAQAEUAQAEBRAAEBRAFEEFEAUQBRAFQEFEAUQB7aVKVlzWlSlBqlZpQaGaUGis1ag1Ss0FaGVoLVrIDRWVBaVCoLRCgqsgrVRAFEAUQBRBQBBVEABBQEAARVAQBAUEABBFAEFEBQQAEAAQAEABAFEABAFEAUQEUQQWiAKIAohQUSlB7KVmlZc2qVmqC0qFBqlZpQapUEVqlZAapUoDVKytBaJSoNDK0VRAFEAUQBQABAVRAFEABBRUEFVAUEABAUEEFARQBAEBQQQFQQAEUAQUBAVBBFEABAFEEFEpQUSoDQyUFpUpRFEAUQQeylZKjm1Ss1aC0qUoNUrNEVqlSgNUrKgtWsiDQhRWhAFEAaEEFEBVVlQUQBRAAEUUQFVAAEAARQBBQEUAQBAUEEBUEVQEAQFBBAVBAVBAVBAURKCiUoKJUBSpSgolBFpUpUFGaUGhmlBoZpQeyiUZclpUAWlQBqjK0VVZVBVZAaEAaEEVVZUFEAaEBVEUFEAUQBRAVRAFQABAFQFUQABBQQAEBVEEABFBBAVBFAQFEEBalEUBAAQBUqUoLUqUoLSpUoNUrNKgtKlKItKzSg1Ss0oNUrNKDVKzSg9lKgw4tDIDQgCqyoKICtCCDQgK0IIKqAKqAqiAKqAKICqAAAACCqIAqAAIKAICoIqgIACKCAAgiqCACCKAgBUEUColFWpSpQWpUpQWpUqUGqlSpQapWalCNUrNKEapWKUI1Ss0oRqlZpQjVKzUoRulYpUI94gw8ylQBoQFVWVBVZVBRFFURQURUVRFBRAVVQBRFFFQBRAFEBVEAUQAAFEBQEAARQEAEEVVQQBBFFQQBBFUSiAFRKoqVKlFWpUqVRaVmpQjVSs1KLGqVilUjVSs0FjVSoAtKyINVKgC0qALSoAtKgDoiDi8SqgCiKKogCqgK0IIqqgDQgK0ICqqCCqgKoigKgCiAqiCiiAKgCgICoCggAICqIIACKCCAIqKoggCCVQQ3UoolTdTdUWpupus7qqu6m6m6zVWNbrNQFVAABBFQEAAAQQUQEAEAAoAFHREHJ4lEUBUBVVAVVQFVUVAVFFURRVEUUVFAVAVQAFQFUQBRAVRBRUAAEABFVUABBAARQQRVEVAEEUEEFEN1lQqbpus7qqu6zum6zuqsN1N1KiqqAACIKgCAIgqAiABQEEoogUAEoAFAAo6ADm8CiAqqgKqoqKKiiqIoqgCqAKoAqgAoiigAKIooAoACgICiCqAgAAIAogIKIqKICAIIoIamiiaM6oamms7qqbqbpusbqqbqCKoAAgIgCAqAgAiVFQEoCCUUQSgAlAQKKIJRRAo6Igy+dVVAVVRRpRFFVUBVVFGhUUUVFFFRRRUUAAVQFUAAAFVAAAVQEAAUQAVAAQEUEAERUVURU1RENTQNZ1dZ1VNZ3TdZ3VU3WTUVoBBFQEBAEARKKgJUBBmgIJRUBAAQABAAAAAAHQAYr5wqBVaEUrWKqBVVUUaUAVVQGlVFVRUUUVAFAVVEUUAAAVQAAEFAFBAARUVRABARQRUFRNVFEQ1AGdXWdVTWdXWdVU3WN1d1lWgAEAEEBEEBKAIzUARKACAAiACgAAAAAAAAADoCDhXz1EUoqsqtXFVFK1iqijSiKqqAKqoK0oAqgKKAKACqAqgAAIqgAAIACKoCAIqKCAKiKiiIqAmpomqqamrrOqJrOrrOq0zqAqiAiCAgICIIDO6ggIACIAKAgAAIAAAAKgCiAKIA6Ao8zwIoCCoC40qKtbxVQVVVFGlAVVVFVRUBVAVRQVQAVRFFAFBAFAFBFQURUUEVAEVFVEVAQEUTUXUBE1WdVU1nWtZ1VZ1nWtY1caxAAQERAERAEZ0EVGUABAEUABAAAAAAAAAAAAAAHRAeZ88AAAFVUVG8VUXFVVRWmlAVVAFUBVUBVUAUAVRUUVAFAAUAUEAURUUEVAQBVRFQERUBE1U1VTWdXU1RnU1dZ0VnWda1jWmsEVAEVEQRUZQQGdEARABUEAQAAAAAAAAAAAAAAAB0QHmfPAAABVUEbxVBVVQVpQFVQFVQFVQFVQBQBVFAVAFAAUAUQAUQFBABABUQFEQARNBVZ1NBRnWdAVnWNBprBAAQEQQGdRAGdEARABUQAQAAAAAEABQAAAAAAAH//Z"
                />
              </div>
              <div className="bg-gray-400 col-span-1 row-span-2 rounded-lg overflow-hidden relative z-40">
                <Image
                  src="/image/grid-images-homepage/bird2.jpg"
                  fill
                  alt="a picture of the bird"
                  className="object-cover object-right hover:scale-125 transition duration-150"
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAIlAooDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ACor6DxAAAACooAAKACgAKigKigKigKioKACgICoqAqKigCCgMgqKigDIAIoAyADIAMqAICAyoAgIqIAAIAgIqCgIqACggKACiAKCKioAKACiAAAKAAjkA9zCiAKAAqAKAAqKAqKAqKAqKAqKAqKgKigKioCoqAqKigCCgMgqCKoDIAIoAyADKgCAAyIAyoAggCAioAAioAAgKgAogCgiooAKCAqACgiooAKAAAAjkA9zAAAqAKACiKAqAKqAKqAKqAKqCCgAqoIKqAKAiqAgoCAqKyoAgoisgAyoAgAMqAMggIADKiAgAIIAKIqIAAIAoICoAKIAoAigAoCCoAKAgoqAAADkA9rmKgCiKoKgCgAoigKigKigoigoioKIoKIqCiKiqIqAqKgKggoCKoisgAigDIqAgqAyoAyACKCDIAICAigIAAgIAAIoAKCAqCAoAKCAoAioqAoAKAICiAOYg9rCiKAACiAKqAKACgCKAKoigoigqoIKqAKqCCqggoCCiKiioIKAyCoIqiDIoDKgioAgyKgIoCMioCACIoAAgACAAICoCggKAIqACggKACgIKgAoAACAOYg9rCiAKACiAKqAKIoKIoKrKgqoAqoIKqAKqCCqggqoCqqCCgMiiKgKgiqIMigIoAyACAAyoIIADICCKAICAAgAAgAICoCgIKAIoAKgIKAIoogoAKAgCiAOYg9jCiAKIAqoAqsqCiKCiKCiKIqsqCqyoqqggqoAqoIKqCCqggoCKoioCoMiiKigDIAIACKAjIoggAMqCCACAqAgIAoCAAgioCggKAgoAiioCgIKioCgIKKIAogDkIPYyoiiKIAoigoigogDQgDQigoioKIoKrKoKqAKqCCqgiqqCCgIKIIKqCKogyKAgAIoAyAIgogigDICCACCqgiCoAAgACKAIACKKgKgIKAgoqAoCCioCoAACAOYg9bKiAKIoKIAqoAqsqCqyoKqAKqANCKgoigqsqgqsqgqsqCiKgoioqiCCqgyKIIKIIqgjIoggogiqgMgCIKgIoIAAiCoICoACAoCCgIACCgCKKgKgIKKgiiiCiiAKIA5CD1MqIAqoAogDQgDQgDQgDQgDSsqCqyqIqoCtCCDQigoioKIINCCCqggogiqqDIoggogiqIIKIMgCIqiCACAqAgCAAgiggoAgAIoqCKioIoqCKKIKAgCiIqKIKKIAogDkIPUiiAKrKgogDQgDQgg0rKgqsqIqoA0IINCKCqyqCqgCqggqoIqqyqCiCDQggoggoCKAMgAgAiKoggqCIKICgIgAgKggKggKggKgiioIoqAoCCgIKgIKKIgKIKKIAogDkIPSiiaAqs6oKIA0IA0ICNKyqCqyoNCANCKgqsqCqgg0IA0IINCCDQggqoIqiCDQggoggogiqIIKIIAIiqIIAICoCAgACAoIACCgICAgoCCgIKAgoCCioICiaKKJpoijOgrmMj0I0JoCqzpoNCANCGg0ICNKyqCqyoNCANKyqCqgDQgg0IoKrKoKrKoKIqCiCDQggogiqIoACACIKIIqiCACIKgCgggCAAgAIACCgIACCgIiiiIooiaoogqGiGgompqjSIAogDkammu4urrIDWiANGs6oNDKg0agI0rKoKrKg0IA0rKoNDKg0IqIqsqCqyqCqgiqrKoKIoKIIKrKoKIIKIIqiCCoCAICqgIAgACIAICoIACKoIACCgIAIIqKgiioIoupoiiiaAqIKLpqALpqAOQya7jRqaaguqzoDSs6aDWqyoKrKiNCCDSsqDQgDSsqiNCANKyqCqyoNCCDQgg0IIKrKgoioqiCCiCCiCCiAqiCACIKIAAgoCIKggKggKgiioIAIKCCAqCKKgiipqCiohqipogLpqCiommgommg5aammuwuiaA0azq6DWjK6g1oyoNKzoI0rKoNKyoNDKg0rKojQyoNKyqCqyoNCCDQgg0IA0IIKrKoKIIKICqIIKIIKIAogiggCoIgqCAqCCqggKgiioIAIKCCKKmiACCgIaoCChogIqJpqimoAoiA5aammurSqzpoNaJpoNLrOgjWrrOqg0azqiNKzqoNCANKyojSsqgqsqDSsqgqsqDQgg0IINCANCCCqggogCiCDQggogKCCCiAKggKgiKqAAIAIACCKKggAgoIIoqIAGoiioJqipoiioamgpqIoumppoLpqaaDjprOmujTWrrOmg1q6zpoNaus6aI1q6zqoNLrOmiNqwug0rKojSsqDSsqgqsqDSsqiKrKg0IINKyINCKCiCDQgCiKiqIIKIAoggqAAICqgiCiAAgAIACAogiioIAIiioIAIKCCKKhqKAhoAmihpqGqLompoNDOmg46azpro21q6xq6I1q6xq6DWrrOmojems6ug0usqiNKyoNKyqI0rKg0IIjSsqDSsqgqsqDQgg0IoKrKoKIINCAKrKoKIAogiqIAogAIIKIACAoIAAgAgAgiioIAIKoggAgoIIoCIC6gmqKmiKLqCAommqKamoDhprOmujeN6azpoN6azq6iNaus6aDerrGrqI2usaojasKg2rCiNNMKiNKyoNKyqDSsqCqyqI0IINKyoKrKoKrKgogg0ICqIIKIAoggogCiAoIAAgKggKggoCACACCKAIAgiggKCCACIoqCKKmoACGqKM6AumoKPNprGmurtjerrnq6iY6ausasojerrEq6iN6usa1KiNasZVEa1WVEaVlUGlZURpWVQaVlRGlZVBVQQaVlQVWVQVUAVWVQVWVBRBBRFBRBBRAUEAUQQVBAVAFEABAAQQAEUEAUQRQQQAEUEEUEEUVBABBQEFAQBRAHkEHZ1UQBqVZWF0HSVZWJWpWWW5VlYlalRGpWmJViI3FZURqKyqI0rKxEaVlQaVlUGlZURoRUFVlQaEEGhBBoQBVQQUQBoQRVEAUQBRBABBVEABAAEABABAUQQFQQBBFBAUEEAQRQQFBBFAQAEFAQFVAB5RFdnQAAABdWVkB0lalc5W5UZrcqxiNRGWo1GI0iNRWVRGljKoNKiiKqKgqsqI0rKoKqANCKgoioKIoKIIKqAqiCCiKAAgAgqiCACAqAAgCiAAggAIAggAIqiCAIIoICiAiggigCACCgIAogo8wDs2AAKgCiKosalYWVCukajErURlqNRiNRGWorMWIjTTMWINRWVRGlZUGhFQVUERoRQVWVQVUEFVAFVBFURQUQQUQQUQFUQQAABBFAQFQQAEABAEAVAQBABEVFBBF0EENBAUQEUEBQQQFQFAQBwEHpaUQBQAAAFiArcrUYjUSs1uNRiNREajTEaRlpYyqDSsqiNKyqDSsqI0rKoKqCDQioKrKgoioqiKgogCiKgAIoAAAgAiCoAogIAgAIIogGgghoIBoIIaCCLoIqGggi6CCLoIqLoIIugCGgAugIGjgA9agAACiiAKAKsajDUErcajEajLLcWMxYiNKkWIjUWMxUGlZVEaVlQVUVBVQQaEVBRFQURRVEVAVBBRBBQEUAQARBRAUAQEBFEBAQE0EETQRUNUQARFRQQARFRREVFBFRREVFQQAQBRAFAAHnAe9BUAUQFUABUAVYysFbjUZjURlqNRiNRlGosZjURFioqI0rKoNCKCqioKrKoKqCDQioKIqCiCKqoIKIIKAigCAAigggAiACM6qoImgAioACAgCKigiooiKgCKioiKigiooiKigioCAKIKgACjziD6DGqIC6oihoACiKKLEBW41GI1ErLcWMxqIjUWMxqIixUVBoSKg0IqIqoqKqsqgqoqCiKgoioKIIqqggoisgAigCAAiiAyAIzVARm0AEURUARUUEVAEBRAFERUEEVFERUUEVFERRURFQBFRQABBUUeYB9FgAAAAVBRRFFFQFbjUYjUSo3FjMajKNRYy0iLFSKg0rKoNCKgqoqCqgg0IqKoioKIqCiKyoqCCgIADKgCAAyoCM0ARiqAIAAqAKIAAioogAiAKIioAiooiKKIioqIKgIiiiAKiAAAA8oD6bIAAAAAAAoogDUbjEaiUbixmNRlGosZjURFajKxBpWVQaVlUGlZVFVUVBRFQVUGVVUEFVBBQEUAZFEVFBBkVAZqgIxVAGABAVAAAVUAEQBRAAQBREVAEVFEAVERUUEVBEFRRBUARRUQUB5AH1EAAAAAAAAAVRY1GY1EZrUWMxqIjUWJFjI1FZVBpUVFVUVBVRUFEVBVQZVVRUFEVFFRWQVBFUBkAEUAZoAM1RAc6oAyCAAAoIqAAAgCiAAgCiAAiKioIqKIACIoqIiiiACIAAAo8gD6iAAAAACgCgAAsajMagzVjUZisstRYkWINRYkVFVUVBVRUFVFZVVRUFEVFVUEFVBlVAQUBlRUEFAZUAZoAjFUAYqiAyACgAAioAACAKIACAKIAIiKigioogqCIAogCogACKAgAjyAPrAAAAAoAAAAKLGozGojNVUVGVjUZaiIsajMWIrSpFjIqoqKqoqCgIqqisiiKiqAgoDKioqAAyoqKyoIrNEAYqiKjnVAAAAAAEVAAAQBRAAQBRABEAURFRQRUEEVFEAEQVFQAAAB4wH1gAAVFAAAAUAAWNRmNRGaqoqMqsRURqLEixBpYzGkVVRWVVUVBRFRVVFQFRWVUBBQEUVFZABlQBlQBmgAxVEBzqgAAAAACKgAAIAogAIAogAiAKIioqCKgCKioIqAIqKgAAADxgPrAAAoAAAAKAALGgRlVBGVUERqLAQWNAiqoIqqDIKCKqggKCKoDIoCKKDIAMqAMqAM0AGKqAOdUAAAAAAQAAAQBRAAQBRABEAURAEEBQQFQQAEBUAAAAf/9k="
                />
              </div>
              <div className="bg-gray-400 col-span-1 row-span-1 rounded-lg overflow-hidden relative">
                <Image
                  src="/image/grid-images-homepage/elephant.jpg"
                  fill
                  alt="a picture of the elephant"
                  className="object-cover hover:scale-125 transition duration-150"
                  sizes="(max-width: 768px) 100vw, 700px"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,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"
                />
              </div>
            </div>
          </section>
          <section className="w-full h-[40rem] items-center bg-second-color flex justify-evenly">
            <div className="lg:w-96 w-72 relative z-40">
              <div>
                <span className="text-xl lg:text-4xl font-bold text-white">
                  Let&apos;s explore the{" "}
                  <span className="text-supper-main-color">new</span>{" "}
                  experience!
                </span>
              </div>
              <div>
                <span className="text-white">
                  open your unseen world, and be a part of this fun while
                  conserving nature and learning the diversities with us.
                </span>
              </div>
              <div>
                <span className="text-white font-light uppercase">
                  - Trekking Thailand Tour.
                </span>
              </div>
              <div className="w-full flex gap-5 mt-2 justify-center">
                <Link href="#our-contact">
                  <button className="w-40 py-2 bg-supper-main-color font-semibold rounded-xl text-white drop-shadow-md hover:scale-110 transition duration-150">
                    Contact us
                  </button>
                </Link>
                <Link
                  href={`/package`}
                  className="w-40 py-2 text-center bg-white font-semibold rounded-xl text-supper-main-color drop-shadow-md hover:scale-110 transition duration-150"
                >
                  See more
                </Link>
              </div>
            </div>
            <div className="w-96 h-96 bg-slate-400 rounded-xl overflow-hidden ring-2 ring-white relative">
              <Image src="/image/explore.jpg" fill className="object-cover" />
            </div>
          </section>
          <section
            className="w-full h-max py-10 bg-third-color flex flex-col gap-10 justify-start 
          items-center relative z-40 pb-20"
          >
            <h2 className="uppercase font-bold text-second-color text-4xl mt-0 lg:mt-20  ">
              What people say about us
            </h2>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className="w-full md:h-max lg:h-max  mt-5 "
            >
              {feedbacks.map((feedback, index) => {
                const date = new Date(feedback.publishedAt);
                const formattedDate = date.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                });
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full flex justify-center">
                      <div className=" bg-white md:w-10/12 lg:w-5/12 rounded-lg p-5 flex gap-3">
                        <div className="w-40 h-40 rounded-md overflow-hidden relative">
                          <Image
                            src={feedback.mainImage.asset.url}
                            fill
                            alt="a picture of the elephant"
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 700px"
                            placeholder="blur"
                            blurDataURL={feedback.mainImage.asset.metadata.lqip}
                          />
                        </div>
                        <div className="w-8/12 text-sm text-second-color">
                          <div>
                            <PortableText value={feedback.body} />
                          </div>
                          <div className="text-lg text-supper-main-color mt-2">
                            {feedback.title}
                          </div>
                          <div className="text-xs text-main-color ">client</div>
                          <div className="text-xs font-light text-main-color ">
                            {formattedDate}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="lg:w-2/4 md:w-3/4 bg-second-color h-20 rounded-xl flex justify-around items-center absolute -bottom-5">
              <span className="text-xl text-third-color uppercase font-medium">
                Ready to start the adventure?
              </span>
              <button className="w-40 py-2 bg-white font-semibold rounded-xl text-supper-main-color drop-shadow-md hover:scale-110 transition duration-150">
                contact us
              </button>
            </div>
          </section>
        </main>
        <footer id="our-contact">
          <Footer />
        </footer>
      </div>
      <Parallax
        pages={4}
        className="static md:hidden bg-third-color"
        style={{ top: "0", left: "0" }}
      >
        <ParallaxLayer
          style={{
            backgroundImage: `url(/image/hero.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "62% -40px",
          }}
          offset={0}
          speed={0.25}
        ></ParallaxLayer>
        <ParallaxLayer
          style={{
            backgroundColor: "#F2E3DB",
            height: "100%",
          }}
          offset={0.6}
          speed={0.8}
        >
          <div>
            <div className="w-full h-ful   flex items-start justify-center">
              <div className=" w-full p-5 flex flex-col">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Love and Passion for Nature",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Love and Passion for Wild Animals",
                    1000,
                    "Love and Passion for Trekking",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={stylesMobile}
                  repeat={Infinity}
                />
                <span className="font-Poppins font-semibold text-lg text-main-color">
                  Trekking Thailand Tour
                </span>
                <span className="font-Poppins font-normal text-xs text-main-color">
                  has been established with love and passion for nature ,
                  wildlife, and the beauty of the various Thai local ways of
                  lives. Our experienced tour guides, specialized in each branch
                  of nature, are ready to take you to explore the esthetic touch
                  of Thai nature.
                </span>
              </div>
            </div>
            <div className="w-full flex-col items-center h-full  flex justify-start mt-10">
              <div className="w-10/12 flex flex-col">
                <div className="w-20 h-20 bg-main-color rounded-full ring-4 overflow-hidden  relative ring-white">
                  <Image
                    src="/image/beer.jpg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 700px"
                    alt="tour guide - Mr.Beer"
                  />
                </div>
                <div className="mt-2 ml-2 ">
                  <div className="w-60">
                    <span className="text-supper-main-color font-bold text-xl">
                      1 DAY
                    </span>
                    <span className="ml-2 text-main-color font-bold text-xl ">
                      Wildlige Photography tour
                    </span>
                  </div>

                  <span className="text-base">
                    at Khaoyai National Park by Guide Beer.
                  </span>
                </div>
                <div className="w-full h-60 gap-5 mt-5 grid grid-cols-3 grid-rows-2">
                  <div className="bg-gray-400 col-span-1 row-span-1 rounded-lg overflow-hidden relative">
                    <Image
                      src="/image/grid-images-homepage/bird.jpg"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                      placeholder="blur"
                      alt="a picture of the bird"
                      blurDataURL="data:image/jpeg;base64,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WbS1m0C1m1bWbQS1m1bWLQLWbS1m0EtZtW1i0VLWbVtYtBLWLVtZtBLWLVtYtELWLVtYtULWbS1m0QtZtLWbVZq6axpqst6usaujLcrUrnqyg6ytSucrUorpK1K5ytSorpKsrErUoNytSucrUoNyrrEq6DerrGroN6usaug1prOroNaazpoPQaazprLs1prOmg3prGroNaazpoNausaug1prOmg3prGroNaazpojWms6aDWms6aDWms6aDWms6mg1prOpoNampqaC6azqaDWs6mpoLalqWpaC2s2paloFqWpaloFrNpazaKWs2lrNoJazatrFoFrFq2sWgWsWraxaBaxatrFoJaxatrFoFrFpazaCWs2lrF6VMW1i1L0x6Vmx001z9HpUx01rXKdNSiY6SrK5ytSjNjpK1K5StSiO0rUrlK1KNOsrUrnKsqDpK1K5ytSg3K1K5ytaK3q6xq6DWrrGroNaus6aDWms6aD0Gms6aw6taazpoNaazpoN6axpqjems6aDemsaug1prOmg1q6xpoN6axpoN6azpojWmsaaDWms6aDWprOmg1qazpoLqampoLqampoLalqWs2gtqWpazaKtrNpazaC2s2lrNoFrNpaxaBazaWs2gWsWraxaKWsWraxaCWs2lrFoFrFpaxaKWudp105ddKYvXTn12l61i0LFvSagaimoGjWrOmFNTHSdNyuGtTppm8u8rUrjOm5Rix1lalcpWpRl2lalcpWpUV1lalcpWpQdJV1iVZRXTV1z1dBvV1jV0G9NY1dBrTWdNB9/TWdNYdmtNZ00GtXWNNBvTWNNBvV1jTQb01jV1Ua1dY00G9NY00G9NY1dBrTWdTQb01jTQb1NZ00GtTWdNEa1NZ00F01nU0GtZ1NTRVtS1LU0FtZtS1LQW1m1LUtAtZtLWbQLWbS1m0UtZtLWLQLWbS1i1AtYtW1i0VLWLS1jqqpa59dJ105ddaLIddMWlrNTVvxLUAcwAAAAABUAWVudOatSpY7TpuV+edY6Tppi8u0rU6cZW5RjHaVqVxnTU6B2lWVylalQdNa1yla0VvV1jTQdNNY00G9NZ00H39NY01h3b01jTRG9XWNNBvTWNNBvTWdNBvTWNNBvTWNXQa1dY01Ub01jTQb01jTQb01jTQa01nU0G9TWdTQb1NZ1NBrU1NTQXU1NTQXUtS1m0Gr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"
                    />
                  </div>
                  <div className="bg-gray-400 col-span-1 row-span-1 rounded-lg overflow-hidden relative">
                    <Image
                      src="/image/grid-images-homepage/cow.jpg"
                      fill
                      alt="a picture of the cow"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,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"
                    />
                  </div>
                  <div className="bg-gray-400 col-span-1 row-span-2 rounded-lg overflow-hidden relative">
                    <Image
                      src="/image/grid-images-homepage/bird2.jpg"
                      fill
                      alt="a picture of the bird"
                      className="object-cover object-right"
                      sizes="(max-width: 768px) 100vw, 700px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAIlAooDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAWEAEBAQAAAAAAAAAAAAAAAAAAARH/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ACor6DxAAAACooAAKACgAKigKigKigKioKACgICoqAqKigCCgMgqKigDIAIoAyADIAMqAICAyoAgIqIAAIAgIqCgIqACggKACiAKCKioAKACiAAAKAAjkA9zCiAKAAqAKAAqKAqKAqKAqKAqKAqKgKigKioCoqAqKigCCgMgqCKoDIAIoAyADKgCAAyIAyoAggCAioAAioAAgKgAogCgiooAKCAqACgiooAKAAAAjkA9zAAAqAKACiKAqAKqAKqAKqAKqCCgAqoIKqAKAiqAgoCAqKyoAgoisgAyoAgAMqAMggIADKiAgAIIAKIqIAAIAoICoAKIAoAigAoCCoAKAgoqAAADkA9rmKgCiKoKgCgAoigKigKigoigoioKIoKIqCiKiqIqAqKgKggoCKoisgAigDIqAgqAyoAyACKCDIAICAigIAAgIAAIoAKCAqCAoAKCAoAioqAoAKAICiAOYg9rCiKAACiAKqAKACgCKAKoigoigqoIKqAKqCCqggoCCiKiioIKAyCoIqiDIoDKgioAgyKgIoCMioCACIoAAgACAAICoCggKAIqACggKACgIKgAoAACAOYg9rCiAKACiAKqAKIoKIoKrKgqoAqoIKqAKqCCqggqoCqqCCgMiiKgKgiqIMigIoAyACAAyoIIADICCKAICAAgAAgAICoCgIKAIoAKgIKAIoogoAKAgCiAOYg9jCiAKIAqoAqsqCiKCiKCiKIqsqCqyoqqggqoAqoIKqCCqggoCKoioCoMiiKigDIAIACKAjIoggAMqCCACAqAgIAoCAAgioCggKAgoAiioCgIKioCgIKKIAogDkIPYyoiiKIAoigoigogDQgDQigoioKIoKrKoKqAKqCCqgiqqCCgIKIIKqCKogyKAgAIoAyAIgogigDICCACCqgiCoAAgACKAIACKKgKgIKAgoqAoCCioCoAACAOYg9bKiAKIoKIAqoAqsqCqyoKqAKqANCKgoigqsqgqsqgqsqCiKgoioqiCCqgyKIIKIIqgjIoggogiqgMgCIKgIoIAAiCoICoACAoCCgIACCgCKKgKgIKKgiiiCiiAKIA5CD1MqIAqoAogDQgDQgDQgDQgDSsqCqyqIqoCtCCDQigoioKIINCCCqggogiqqDIoggogiqIIKIMgCIqiCACAqAgCAAgiggoAgAIoqCKioIoqCKKIKAgCiIqKIKKIAogDkIPUiiAKrKgogDQgDQgg0rKgqsqIqoA0IINCKCqyqCqgCqggqoIqqyqCiCDQggoggoCKAMgAgAiKoggqCIKICgIgAgKggKggKggKgiioIoqAoCCgIKgIKKIgKIKKIAogDkIPSiiaAqs6oKIA0IA0ICNKyqCqyoNCANCKgqsqCqgg0IA0IINCCDQggqoIqiCDQggoggogiqIIKIIAIiqIIAICoCAgACAoIACCgICAgoCCgIKAgoCCioICiaKKJpoijOgrmMj0I0JoCqzpoNCANCGg0ICNKyqCqyoNCANKyqCqgDQgg0IoKrKoKrKoKIqCiCDQggogiqIoACACIKIIqiCACIKgCgggCAAgAIACCgIACCgIiiiIooiaoogqGiGgompqjSIAogDkammu4urrIDWiANGs6oNDKg0agI0rKoKrKg0IA0rKoNDKg0IqIqsqCqyqCqgiqrKoKIoKIIKrKoKIIKIIqiCCoCAICqgIAgACIAICoIACKoIACCgIAIIqKgiioIoupoiiiaAqIKLpqALpqAOQya7jRqaaguqzoDSs6aDWqyoKrKiNCCDSsqDQgDSsqiNCANKyqCqyoNCCDQgg0IIKrKgoioqiCCiCCiCCiAqiCACIKIAAgoCIKggKggKgiioIAIKCCAqCKKgiipqCiohqipogLpqCiommgommg5aammuwuiaA0azq6DWjK6g1oyoNKzoI0rKoNKyoNDKg0rKojQyoNKyqCqyoNCCDQgg0IA0IIKrKoKIIKICqIIKIIKIAogiggCoIgqCAqCCqggKgiioIAIKCCKKmiACCgIaoCChogIqJpqimoAoiA5aammurSqzpoNaJpoNLrOgjWrrOqg0azqiNKzqoNCANKyojSsqgqsqDSsqgqsqDQgg0IINCANCCCqggogCiCDQggogKCCCiAKggKgiKqAAIAIACCKKggAgoIIoqIAGoiioJqipoiioamgpqIoumppoLpqaaDjprOmujTWrrOmg1q6zpoNaus6aI1q6zqoNLrOmiNqwug0rKojSsqDSsqgqsqDSsqiKrKg0IINKyINCKCiCDQgCiKiqIIKIAoggqAAICqgiCiAAgAIACAogiioIAIiioIAIKCCKKhqKAhoAmihpqGqLompoNDOmg46azpro21q6xq6I1q6xq6DWrrOmojems6ug0usqiNKyoNKyqI0rKg0IIjSsqDSsqgqsqDQgg0IoKrKoKIINCAKrKoKIAogiqIAogAIIKIACAoIAAgAgAgiioIAIKoggAgoIIoCIC6gmqKmiKLqCAommqKamoDhprOmujeN6azpoN6azq6iNaus6aDerrGrqI2usaojasKg2rCiNNMKiNKyoNKyqDSsqCqyqI0IINKyoKrKoKrKgogg0ICqIIKIAoggogCiAoIAAgKggKggoCACACCKAIAgiggKCCACIoqCKKmoACGqKM6AumoKPNprGmurtjerrnq6iY6ausasojerrEq6iN6usa1KiNasZVEa1WVEaVlUGlZURpWVQaVlRGlZVBVQQaVlQVWVQVUAVWVQVWVBRBBRFBRBBRAUEAUQQVBAVAFEABAAQQAEUEAUQRQQQAEUEEUEEUVBABBQEFAQBRAHkEHZ1UQBqVZWF0HSVZWJWpWWW5VlYlalRGpWmJViI3FZURqKyqI0rKxEaVlQaVlUGlZURoRUFVlQaEEGhBBoQBVQQUQBoQRVEAUQBRBABBVEABAAEABABAUQQFQQBBFBAUEEAQRQQFBBFAQAEFAQFVAB5RFdnQAAABdWVkB0lalc5W5UZrcqxiNRGWo1GI0iNRWVRGljKoNKiiKqKgqsqI0rKoKqANCKgoioKIoKIIKqAqiCCiKAAgAgqiCACAqAAgCiAAggAIAggAIqiCAIIoICiAiggigCACCgIAogo8wDs2AAKgCiKosalYWVCukajErURlqNRiNRGWorMWIjTTMWINRWVRGlZUGhFQVUERoRQVWVQVUEFVAFVBFURQUQQUQQUQFUQQAABBFAQFQQAEABAEAVAQBABEVFBBF0EENBAUQEUEBQQQFQFAQBwEHpaUQBQAAAFiArcrUYjUSs1uNRiNREajTEaRlpYyqDSsqiNKyqDSsqI0rKoKqCDQioKrKgoioqiKgogCiKgAIoAAAgAiCoAogIAgAIIogGgghoIBoIIaCCLoIqGggi6CCLoIqLoIIugCGgAugIGjgA9agAACiiAKAKsajDUErcajEajLLcWMxYiNKkWIjUWMxUGlZVEaVlQVUVBVQQaEVBRFQURRVEVAVBBRBBQEUAQARBRAUAQEBFEBAQE0EETQRUNUQARFRQQARFRREVFBFRREVFQQAQBRAFAAHnAe9BUAUQFUABUAVYysFbjUZjURlqNRiNRlGosZjURFioqI0rKoNCKCqioKrKoKqCDQioKIqCiCKqoIKIIKAigCAAigggAiACM6qoImgAioACAgCKigiooiKgCKioiKigiooiKigioCAKIKgACjziD6DGqIC6oihoACiKKLEBW41GI1ErLcWMxqIjUWMxqIixUVBoSKg0IqIqoqKqsqgqoqCiKgoioKIIqqggoisgAigCAAiiAyAIzVARm0AEURUARUUEVAEBRAFERUEEVFERUUEVFERRURFQBFRQABBUUeYB9FgAAAAVBRRFFFQFbjUYjUSo3FjMajKNRYy0iLFSKg0rKoNCKgqoqCqgg0IqKoioKIqCiKyoqCCgIADKgCAAyoCM0ARiqAIAAqAKIAAioogAiAKIioAiooiKKIioqIKgIiiiAKiAAAA8oD6bIAAAAAAAoogDUbjEaiUbixmNRlGosZjURFajKxBpWVQaVlUGlZVFVUVBRFQVUGVVUEFVBBQEUAZFEVFBBkVAZqgIxVAGABAVAAAVUAEQBRAAQBREVAEVFEAVERUUEVBEFRRBUARRUQUB5AH1EAAAAAAAAAVRY1GY1EZrUWMxqIjUWJFjI1FZVBpUVFVUVBVRUFEVBVQZVVRUFEVFFRWQVBFUBkAEUAZoAM1RAc6oAyCAAAoIqAAAgCiAAgCiAAiKioIqKIACIoqIiiiACIAAAo8gD6iAAAAACgCgAAsajMagzVjUZisstRYkWINRYkVFVUVBVRUFVFZVVRUFEVFVUEFVBlVAQUBlRUEFAZUAZoAjFUAYqiAyACgAAioAACAKIACAKIAIiKigioogqCIAogCogACKAgAjyAPrAAAAAoAAAAKLGozGojNVUVGVjUZaiIsajMWIrSpFjIqoqKqoqCgIqqisiiKiqAgoDKioqAAyoqKyoIrNEAYqiKjnVAAAAAAEVAAAQBRAAQBRABEAURFRQRUEEVFEAEQVFQAAAB4wH1gAAVFAAAAUAAWNRmNRGaqoqMqsRURqLEixBpYzGkVVRWVVUVBRFRVVFQFRWVUBBQEUVFZABlQBlQBmgAxVEBzqgAAAAACKgAAIAogAIAogAiAKIioqCKgCKioIqAIqKgAAADxgPrAAAoAAAAKAALGgRlVBGVUERqLAQWNAiqoIqqDIKCKqggKCKoDIoCKKDIAMqAMqAM0AGKqAOdUAAAAAAQAAAQBRAAQBRABEAURAEEBQQFQQAEBUAAAAf/9k="
                    />
                  </div>
                  <div className="bg-gray-400 col-span-2 row-span-1 rounded-lg overflow-hidden relative">
                    <Image
                      src="/image/grid-images-homepage/elephant.jpg"
                      fill
                      alt="a picture of the elephant"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,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"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "#41644A" }}
          offset={1.2}
          speed={0.8}
        >
          <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-10/12 text-white text-3xl font-bold mb-28 font-Poppins">
              <span> Let&apos;s explore the</span>
              <span> </span>
              <span className="text-supper-main-color">new</span>
              <span> </span>
              <span>experience!</span>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.3} speed={0.5}>
          <div className="w-full h-full flex justify-center items-center gap-2 flex-col">
            <div className="w-10/12 break-words bg-second-color text-white font-light leading-tight">
              open your unseen world, and be a part of this fun while conserving
              nature and learning the diversities with us
            </div>
            <div className="w-10/12 flex  text-white">
              - Trekking Thailand Tour.
            </div>
            <div className="w-10/12 flex gap-5">
              <Link href="#our-contact">
                <button className="w-36 h-max font-semibold text-white text-lg p-2 drop-shadow-lg hover:ring-2 ring-white active:ring-4 rounded-xl bg-supper-main-color flex justify-center items-center">
                  contact us
                </button>
              </Link>
              <Link
                href={`/package`}
                className="w-36 h-max font-semibold text-supper-main-color  text-lg p-2 drop-shadow-lg hover:ring-2 ring-supper-main-color active:ring-4 rounded-xl bg-white flex justify-center items-center"
              >
                learn more
              </Link>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "#F2E3DB", height: "max-content" }}
          factor={2}
          offset={2}
          speed={0.5}
        >
          <div className="w-full flex flex-col    justify-start  items-center gap-5">
            <div className="w-full flex flex-col h-full justify-center  items-center gap-5">
              <h2 className="font-Poppins font-bold uppercase text-second-color text-xl">
                What people say about us
              </h2>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination]}
                className="w-full h-max  "
              >
                {feedbacks.map((feedback, index) => {
                  const date = new Date(feedback.publishedAt);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  });
                  return (
                    <SwiperSlide key={index}>
                      <div className="w-full h-max flex justify-center">
                        <div className=" bg-white w-11/12 rounded-lg h-max p-5 flex gap-3">
                          <div className="w-20 h-40 rounded-md overflow-hidden relative">
                            <Image
                              src={feedback.mainImage.asset.url}
                              fill
                              alt="a picture of the elephant"
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 700px"
                              placeholder="blur"
                              blurDataURL={
                                feedback.mainImage.asset.metadata.lqip
                              }
                            />
                          </div>
                          <div className="w-8/12 text-sm text-second-color">
                            <div>
                              <PortableText value={feedback.body} />
                            </div>
                            <div className="text-lg text-supper-main-color mt-2">
                              {feedback.title}
                            </div>
                            <div className="text-xs text-main-color ">
                              client
                            </div>
                            <div className="text-xs font-light text-main-color ">
                              {formattedDate}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          style={{ backgroundColor: "#F2E3DB" }}
          offset={3}
          speed={0.5}
        >
          <div className="flex h-full items-end">
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export async function getStaticProps(ctx) {
  const query = `*[_type == "feedback"]{
  publishedAt,
  mainImage{
      asset->{
              url,
              metadata
            }
      },
  body,
  title,
}`;
  const feedbacks = await sanityClient.fetch(query);
  return {
    props: {
      feedbacks,
    },
  };
}
