import Link from "next/link";
import { FaFacebook, FaPhoneSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const socials = [
     {
          icon: <RiInstagramFill />,
          path: "https://www.instagram.com/viet__phuong/?fbclid=IwZXh0bgNhZW0CMTAAAR0TueAs0RAGVx__zb7VS7w4RLnkDDzcGQHp5UR16QwC1gUWu_oek3cLNCY_aem_goivnVA1XK0zbRbQaULaEg"
     },
     {
          icon: <FaFacebook />,
          path: "https://www.facebook.com/nvvphuong"
     },
     {
          icon: <FaPhoneSquare />,
          path: "https://zalo.me/0839691898"
     },
     {
          icon: <FaLinkedin />,
          path: "https://www.linkedin.com/in/phuong-nguyen-b0537a209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwY2xjawGeamZleHRuA2FlbQIxMAABHRs-nzoODcLkPTF8fsNwjwLhSpSDonh6mCI0PTCLe0PhU1Cj5s9tpcZhxQ_aem_w5XOdxjOCwyfpGZQu3JqIQ"
     },
];

const Socials = ({ containerStyles, iconStyles }) => {
     return (
          <div className={containerStyles}>
               {socials.map((item, index) => {
                    return (
                         <Link href={item.path} key={index} className={iconStyles}><span>{item.icon}</span></Link>
                    );
               })}
          </div>
     )
}

export default Socials