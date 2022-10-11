/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import bags from "../assets/bags.png";
import kurti from "../assets/kurti.png";
import plates from "../assets/plates.png";
import tshirt from "../assets/tshirt.png";

import saree from "../assets/saree.png";
import jewellery from "../assets/jewellery.png";
import footwear from "../assets/footwear.png";

import odhisa_handloom1 from "../assets/odhisa_handloom1.png";
import odhisa_handloom2 from "../assets/odhisa_handloom2.png";

import Header from '../components/Header';
import Card from '../components/Card';
import Card2 from '../components/Card2';
import Footer from "../components/Footer";

const Index = () => {

  return (
    <>
      <Header />
      <Carousel autoPlay={true} infiniteLoop={true}>
        <div>
          <Image src={bags} width={1920} height={720} />
        </div>
        <div>
          <Image src={kurti} width={1920} height={720} />
        </div>
        <div>
          <Image src={plates} width={1920} height={720} />
        </div>
        <div>
          <Image src={tshirt} width={1920} height={720} />
        </div>
      </Carousel>
      <div className="flex flex-row justify-center items-center my-16">
        <div className="w-1/3 border-b-2 border-black -translate-y-[10px]">
        </div>
        <p className="uppercase text-3xl mx-10">Ankkie Own Label Atelier</p>
        <div className="w-1/3 border-b-2 border-black -translate-y-[10px]">
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <Card image={saree} heading={"Saree"} subtitle={"Exquisite Sarees"} />
        <Card image={jewellery} heading={"Fashion Jewellery"} subtitle={"Sparkling Jewellery to love"} />
        <Card image={footwear} heading={"Footwear"} subtitle={"Traditional and Trendy Treads"} />
      </div>
      <div className="flex flex-row justify-center items-center my-20">
        <div className="w-1/3 border-b-2 border-black -translate-y-[10px]">
        </div>
        <p className="uppercase text-3xl mx-10">Featured Collections</p>
        <div className="w-1/3 border-b-2 border-black -translate-y-[10px]">
        </div>
      </div>
      <div className="grid grid-cols-4">
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={saree} image2={jewellery} heading={"Karigari Artisian Tale"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
        <Card2 image={odhisa_handloom1} image2={odhisa_handloom2} heading={"Odhisha Handloom"} subtitle={"Exclusive Collections"} />
      </div>
      <Footer />
    </>
  )
}

export default Index