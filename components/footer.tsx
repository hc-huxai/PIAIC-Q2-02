import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaHeart } from "react-icons/fa6";

export const Footer = () => {
  return (
    <section className="footer">
      <hr />
      <h4>About Us</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
        incidunt odio nam facilis, eligendi
        <br /> Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
        exercitationem, illum molestiae dolorem.
      </p>

      <div className="icons">
        <FaFacebook className="fab fa-facebook-f" />
        <FaInstagram className="fab fa-instagram" />
        <FaTwitter className="fab fa-twitter" />
        <FaLinkedin className="fab fa-linkedin" />
      </div>
      <p>
        Made with <FaHeart className="fas fa-heart" /> by{" "}
        <a href="#">Sagar Developer</a>
      </p>
      <p>
        Copyright © 2021 <a href="/">Xplore Skill</a>. All Rights Reserved
      </p>
    </section>
  );
}