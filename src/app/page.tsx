"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumLargeSizeLargeTitles"
      background="fluid"
      cardStyle="soft-shadow"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen 
          brandName="Shoprite Freshmark Ghana"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Delivery", id: "delivery" },
            { name: "Reviews", id: "reviews" },
            { name: "Gallery", id: "gallery" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="home" data-section="home">
        <HeroCentered
          title="Freshness You Can Trust. Quality You Can Taste."
          description="Welcome to Shoprite Freshmark Ghana – Accra’s Premium Destination for Fresh Fruits, Vegetables, and Groceries."
          background={{ variant: "gradient-bars" }}
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835823835-1134bce2.png", alt: "Customer" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824363-02dfa076.png", alt: "Customer" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824577-fce62c08.png", alt: "Customer" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824459-8686ddbc.png", alt: "Customer" }
          ]}
          avatarText="Trusted by thousands in Accra"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Order Delivery", href: "#delivery" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout 
          heading={[
            { type: "text", content: "Our Commitment to Quality" },
            { type: "image", src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-stunning-high-end-grocery-store-hero-i-1774835824625-ad21a2c6.png", alt: "Shoprite Freshmark" }
          ]}
          useInvertedBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour 
          title="Premium Categories"
          description="Explore our curated selection of fresh produce and daily essentials."
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          products={[
            { id: "1", name: "Fresh Fruits", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/close-up-of-fresh-tropical-fruits-in-acc-1774835824523-ac55358d.png?_wi=1" },
            { id: "2", name: "Fresh Vegetables", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/fresh-organic-vegetables-beautifully-arr-1774835824043-6b058865.png?_wi=1" },
            { id: "3", name: "Groceries", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/modern-store-shelves-with-premium-grocer-1774835824678-f986f219.png?_wi=1" },
            { id: "4", name: "Organic Produce", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/healthy-organic-produce-eco-friendly-gro-1774835824606-1a538ac3.png?_wi=1" },
            { id: "5", name: "Beverages", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/premium-fruit-juices-and-bottled-natural-1774835826353-9cedb816.png" },
            { id: "6", name: "Packaged Foods", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/high-quality-packaged-foods-and-grains-i-1774835824842-eeb39528.png" },
            { id: "7", name: "Household Items", price: "Varies", variant: "Standard", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/elegant-household-and-cleaning-items-on--1774835825910-b43203bc.png" }
          ]}
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardEight 
          title="Why Choose Us?"
          description="Discover why Shoprite Freshmark Ghana is Accra's favorite destination for quality shopping."
          textboxLayout="split"
          useInvertedBackground={true}
          features={[
            { id: 1, title: "Fresh Farm Produce Daily", description: "Hand-picked produce delivered fresh to our shelves every morning.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-stunning-high-end-grocery-store-hero-i-1774835824625-ad21a2c6.png?_wi=1" },
            { id: 2, title: "Clean Environment", description: "A pristine shopping experience that prioritizes hygiene and comfort.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/premium-supermarket-interior-well-lit-wi-1774835826423-7721276c.png?_wi=1" },
            { id: 3, title: "Affordable Prices", description: "High-quality products at competitive prices you'll love.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/modern-store-shelves-with-premium-grocer-1774835824678-f986f219.png?_wi=2" },
            { id: 4, title: "Delivery Available", description: "Get your groceries delivered right to your doorstep anywhere in Accra.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-stunning-high-end-grocery-store-hero-i-1774835824625-ad21a2c6.png?_wi=2" },
            { id: 5, title: "Quality Assurance", description: "Rigorous quality control for every item we stock.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/healthy-organic-produce-eco-friendly-gro-1774835824606-1a538ac3.png?_wi=2" },
            { id: 6, title: "Friendly Service", description: "Our staff is committed to providing you with the best shopping experience.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835823835-1134bce2.png" }
          ]}
        />
      </div>

      <div id="delivery" data-section="delivery">
        <ContactCTA 
          tag="Delivery Service"
          title="Need Fresh Groceries Delivered?"
          description="We deliver fresh fruits, vegetables, and household essentials directly to your doorstep within Accra. Call our order desk today."
          buttons={[{ text: "Call to Order: 024 814 5989", href: "tel:0248145989" }]}
          background={{ variant: "sparkles-gradient" }}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardFive 
          title="What Our Customers Say"
          description="Authentic experiences from our valued customers in Accra."
          textboxLayout="split"
          useInvertedBackground={true}
          testimonials={[
            { id: "1", name: "Kojo Mensah", date: "Jan 2025", title: "Quality", quote: "Assure of good quality and fresh fruit and vegetables.", tag: "Regular Customer", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835823835-1134bce2.png", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/close-up-of-fresh-fruit-shelf-1774835826395-b9d71f04.png?_wi=1" },
            { id: "2", name: "Akua Serwaa", date: "Feb 2025", title: "Ambiance", quote: "Beautiful environment and great variety.", tag: "Local Shopper", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824363-02dfa076.png", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/premium-supermarket-interior-well-lit-wi-1774835826423-7721276c.png?_wi=2" },
            { id: "3", name: "Esi Amponsah", date: "Mar 2025", title: "Variety", quote: "Source your fruits and vegetables from here. Always fresh!", tag: "Loyal Customer", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824577-fce62c08.png", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/close-up-of-fresh-tropical-fruits-in-acc-1774835824523-ac55358d.png?_wi=2" },
            { id: "4", name: "Kwame Osei", date: "Mar 2025", title: "Service", quote: "Best selection of fresh farm produce in the city.", tag: "Regular Shopper", avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824459-8686ddbc.png", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/fresh-organic-vegetables-beautifully-arr-1774835824043-6b058865.png?_wi=2" }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <BlogCardOne 
          title="Our Store Gallery"
          description="Take a look at our fresh market environment."
          animationType="slide-up"
          textboxLayout="split"
          useInvertedBackground={false}
          blogs={[
            { id: "1", category: "Store", title: "Interior View", excerpt: "Experience the freshness.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/premium-supermarket-interior-well-lit-wi-1774835826423-7721276c.png?_wi=3", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835823835-1134bce2.png", date: "2025" },
            { id: "2", category: "Produce", title: "Fresh Vegetables", excerpt: "Hand-picked daily.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/close-up-of-crisp-vegetable-display-1774835824242-a9015e64.png", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824363-02dfa076.png", date: "2025" },
            { id: "3", category: "Produce", title: "Fruit Selection", excerpt: "Premium quality fruits.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/close-up-of-fresh-fruit-shelf-1774835826395-b9d71f04.png?_wi=2", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824577-fce62c08.png", date: "2025" },
            { id: "4", category: "Store", title: "Stocked Shelves", excerpt: "All your needs in one place.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/modern-store-shelves-fully-stocked-1774835825215-a66043d1.png", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824459-8686ddbc.png", date: "2025" },
            { id: "5", category: "Service", title: "Happy Shoppers", excerpt: "Serving Accra daily.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/customers-shopping-in-a-premium-environm-1774835824109-c6f88f1d.png", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835823835-1134bce2.png", date: "2025" },
            { id: "6", category: "Bakery", title: "Artisan Bakery", excerpt: "Freshly baked goodness.", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/high-end-fresh-bakery-section-1774835825367-db1489a5.png", authorName: "Admin", authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Be2e5YqCimasupzhpdaKAEh2dc/a-professional-looking-customer-smiling--1774835824363-02dfa076.png", date: "2025" }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA 
          tag="Visit Us"
          title="Contact Shoprite Freshmark"
          description="Location: JVJ4+F3W, Accra | Phone: 024 814 5989 | Opens Daily at 8:00 AM"
          buttons={[{ text: "Get Directions", href: "https://maps.google.com" }]}
          background={{ variant: "plain" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase 
          columns={[
            { title: "Shoprite Freshmark", items: [{ label: "About Us", href: "#about" }, { label: "Products", href: "#products" }, { label: "Delivery", href: "#delivery" }] },
            { title: "Contact", items: [{ label: "024 814 5989", href: "tel:0248145989" }, { label: "JVJ4+F3W, Accra", href: "#" }] }
          ]}
          logoText="Shoprite Freshmark Ghana"
          copyrightText="© 2025 Shoprite Freshmark Ghana. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}