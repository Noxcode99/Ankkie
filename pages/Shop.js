import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Card3 from '../components/Card3'

import saree from "../assets/saree.png";
import jewellery from "../assets/jewellery.png";

import bags from "../assets/bags.png";
import kurti from "../assets/kurti.png";
import plates from "../assets/plates.png";
import tshirt from "../assets/tshirt.png";

const Shop = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-5 mt-28 mb-20 gap-y-10 w-[90%] mx-auto">
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={bags} image2={kurti} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={plates} image2={tshirt} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
                <Card3 image={saree} image2={jewellery} heading={"BRAND"} subtitle={"Green Handoven Double Ikat Cotton Saree"} />
            </div>
            <Footer />
        </>
    )
}

export default Shop