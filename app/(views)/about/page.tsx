import { Footer } from "@/components/footer";
import { MainNav } from "@/components/main-nav";
import { imgRef } from "@/img/references";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="Sub-header">
        <MainNav />
        <h1>About Us</h1>
      </section>

      {/* <!-- About Us Section Start --> */}

      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world{`'`}s largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <a href="#" className="hero_btn btn">
              EXPLORE NOW
            </a>
          </div>
          <div className="about-col">
            <Image src={imgRef.About} alt="About" />
          </div>
        </div>
      </section>

      {/* <!-- About Us Section end --> */}

      {/* <!-- Footer Section start --> */}
      <Footer/>
      {/* <!-- Footer Section end --> */}
    </>
  );
}
