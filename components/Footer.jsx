import Logo from "./Logo"

const Footer = () => {
     return (
          <footer className="py-12 bg-pink-300">
               <div className="container mx-auto">
                    <div className="flex flex-col xl:flex-row items-center justify-between">
                         <Logo light={true} />
                         <div className="text-white/80 font-light">
                              Copyright &copy; 2024. All rights reserved.
                         </div>
                    </div>
               </div>
          </footer>
     );
};

export default Footer;