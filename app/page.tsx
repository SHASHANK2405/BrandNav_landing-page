import Head from "next/head";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import WhyBrandnav from "@/components/WhyBrandnav";
import AttributeSection from "@/components/AttributeSection";
import AccuracySection from "@/components/AccuracySection";
import BrandNavUser from "@/components/BrandNavUser";
import RatingSection from "@/components/RatingSection";
import FAQ from "@/components/FAQ";
import FooterBanner from "@/components/FooterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA]">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="A modern landing page" />
      </Head>
      <HeroSection />
      <div className="relative w-full h-screen ">
        <Image
          src="/assets/dark bg.png"
          alt="dark bg"
          layout="fill" // This makes the image cover the entire container
          objectFit="cover" // Ensures the image covers the container without distortion
          className="absolute top-0 left-0"
        />
        <Image
          src="/assets/card section.png"
          alt="card section"
          width={1080}
          height={912}
          className="absolute top-10 left-[450px] h-[912px]"
        />
      </div>
      <WhyBrandnav />
      <AttributeSection />
      <AccuracySection />
      <BrandNavUser />
      <RatingSection />
      <FAQ />
      <FooterBanner />
      <Footer />
    </div>
  );
}
