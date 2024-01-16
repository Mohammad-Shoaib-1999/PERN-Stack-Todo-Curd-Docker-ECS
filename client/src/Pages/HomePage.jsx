// import axios from 'axios';
// import { useState, useEffect } from 'react';
import { Hero } from "../sections";
function HomePage() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios.get('/api/products').then((res) => res.data).then((data) => setData(data));
  // }, []);

  return (
    <main className="relative ">
    {/* <Nav /> */}
    <section className="wide:padding-r  border-2 border-black padding-b">
      <Hero />
    </section>
    <section className="padding ">
      {/* <PopularProducts /> */}
    </section>
    <section className="padding ">
      {/* <Marquee /> */}
    </section>
    <section className="padding ">
      {/* <SuperQuality /> */}
    </section>
    <section className="padding ">
      {/* <Carousal /> */}
    </section>
    <section className="padding-x py-10">
      {/* <Services /> */}
    </section>
    <section className="padding">
      {/* <SpecialOffer /> */}
    </section>
    <section className=" padding ">
      {/* <CustomerReviews /> */}
    </section>
    <section className=" padding ">
      {/* <CustomerVideoReviews /> */}
    </section>
    <section className="padding ">
      {/* <Testimonials /> */}
    </section>
    <section className="padding ">
      {/* <FAQPage /> */}
    </section>
    <section className="padding-x border-2 border-black sm:py-32 py-16 w-full">
      {/* <Subscribe /> */}
    </section>
    <section className="bg-gray-200 padding-x padding-t pb-8">
      {/* <Footer /> */}
    </section>
  </main>
  );
}

export default HomePage;
