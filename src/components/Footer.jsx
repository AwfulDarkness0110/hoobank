import styles from "../style";
import { logo } from "../assets/static";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 flex-col justify-start m-10">
        <a href="#home">
          <img
            src={logo}
            alt="HooBank"
            className="w-[16.25rem] h-[4.5rem] object-contain"
          />
        </a>
        <p className={`${styles.paragraph} mt-4 max-w-[19.375rem]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10">
        {footerLinks.map((link) => (
          <div
            key={link.key}
            className="flex flex-col ss:my-0 my-4 min-w-[9.375rem]"
          >
            <h4 className="font-poppins font-medium text-lg leading-[1.6875rem] text-white mb-2">
              {link.title}
            </h4>
            <ul>
              {link.links.map((item, i) => (
                <li
                  key={item.name}
                  className={`font-poppins font-normal text-base leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                    i !== link.links.length - 1 ? "p-1" : "p-0"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-lg leading-[1.6875rem] text-white mb-2">
        &copy;2022 HooBank.{" "}
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((item, index) => (
          <a className="block" href={`${item.link}`}>
            <img
              key={item.id}
              src={item.icon}
              alt={item.id}
              className={`w-[1.3125rem] aspect-square object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : ""
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
