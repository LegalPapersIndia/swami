import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BannerOne from "../components/BannerOne";
import FeatureOne from "../components/FeatureOne";
import PromotionalOne from "../components/PromotionalOne";
import FlashSalesOne from "../components/FlashSalesOne";
import ProductListOne from "../components/ProductListOne";
import OfferOne from "../components/OfferOne";
import RecommendedOne from "../components/RecommendedOne";
import HotDealsOne from "../components/HotDealsOne";
import TopVendorsOne from "../components/TopVendorsOne";
import BestSellsOne from "../components/BestSellsOne";
import DeliveryOne from "../components/DeliveryOne";
import OrganicOne from "../components/OrganicOne";
import ShortProductOne from "../components/ShortProductOne";
import BrandOne from "../components/BrandOne";
import NewArrivalOne from "../components/NewArrivalOne";
import ShippingOne from "../components/ShippingOne";
import NewsletterOne from "../components/NewsletterOne";
import FooterOne from "../components/FooterOne";
import BottomFooter from "../components/BottomFooter";
import ScrollToTop from "react-scroll-to-top";
import ColorInit from "../helper/ColorInit";
import FlowerDrop from "../components/FlowerDrop";
const HomePageOne = () => {

  return (

    <>

      {/* Preloader */}
      <Preloader />

      {/* ScrollToTop */}
      <ScrollToTop smooth color="#A56C3B" />

      {/* FlowerShower */}
      <FlowerDrop />

      {/* ColorInit */}
      <ColorInit color={false} />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* FeatureOne */}
      <FeatureOne />

      {/* PromotionalOne */}
      {/* <PromotionalOne /> */}

      {/* FlashSalesOne */}
      <FlashSalesOne />

      {/* ProductListOne */}
      {/* <ProductListOne /> */}

      {/* RecommendedOne */}
      <RecommendedOne />

      {/* OfferOne */}
      <OfferOne />

      {/* HotDealsOne */}
      <HotDealsOne />

      {/* TopVendorsOne */}
      {/* <TopVendorsOne /> */}

      {/* BestSellsOne */}
      {/* <BestSellsOne /> */}

      {/* BrandOne */}
      <BrandOne />
      
      {/* ShippingOne */}
      <ShippingOne />

      {/* DeliveryOne */}
      <DeliveryOne />

      {/* OrganicOne */}
      {/* <OrganicOne /> */}

      {/* ShortProductOne */}
      {/* <ShortProductOne /> */}


      {/* NewArrivalOne */}
      {/* <NewArrivalOne /> */}

      {/* NewsletterOne */}
      {/* <NewsletterOne /> */}

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />


    </>
  );
};

export default HomePageOne;
