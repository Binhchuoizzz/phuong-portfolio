import Image from "next/image";
import { motion } from "framer-motion";

// components
import AnimatedText from "./AnimatedText";

const About = () => {
     return (
          <section className='relative pt-12 pb-24' id='about'>
               <div className="container mx-auto h-full">
                    <div className="h-full flex items-center justify-center">
                         {/* image + shapes */}
                         <div className="hidden xl:flex flex-1 pl-8">
                              <div className="relative w-full max-w-[380px]">
                                   {/* shape */}
                                   <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10">

                                   </div>
                                   {/* image */}
                                   <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-pink-50
                                   min-h-[480px] flex items-end justify-center">
                                        <Image
                                             src="/assets/about/img.jpg"
                                             width={290}
                                             height={478}
                                             quality={100}
                                             priority
                                             alt="Bé Phương Thúi"
                                        />
                                   </div>
                                   {/* rotating shape */}
                                   <div className="absolute top-2/4 -right-[65px] flex items-center
                                   justify-center">
                                        <motion.div
                                             animate={{
                                                  rotate: [0, 360],
                                             }}
                                             transition={{
                                                  duration: 10,
                                                  ease: "linear",
                                                  repeat: Infinity,
                                             }}
                                        >
                                             <Image
                                                  src="/assets/about/shape-1.svg"
                                                  width={160}
                                                  height={160}
                                                  alt="Bé Phương Thúi"
                                             />
                                        </motion.div>
                                        <div className="absolute text-center text-white">
                                             <div className="text-5xl font-bold leading-none">5+</div>
                                             <div className="leading-none text-center">
                                                  Year of <br />Experience                                        </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         {/* text */}
                         <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0
                         flex flex-col gap-6">
                              <div>
                                   <AnimatedText text="Tên mình là Nguyễn Vũ Việt Phương" textStyles="h2 mb-2" />
                                   <i className="text-lg">Mình từng là sinh viên chuyên ngành Kinh Doanh Quốc Tế.</i>
                              </div>
                              <p className="max-w-[600px] mx-auto xl:mx-0 mb-2">
                                   Với nền tảng chuyên môn về kinh tế học và logistics, mình kết hợp khả năng phân tích tài chính, dự báo thị trường và quản lý chuỗi cung ứng để đem lại giá trị bền vững cho doanh nghiệp. Kinh nghiệm trong phân tích dữ liệu và hoạch định logistics giúp mình tối ưu hóa quy trình vận hành, đảm bảo hàng hóa lưu thông hiệu quả và giảm thiểu chi phí. mình cam kết mang đến giải pháp kinh tế và logistics toàn diện, hỗ trợ doanh nghiệp đạt được các mục tiêu phát triển.
                              </p>
                              {/* info item */}
                              <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max
                              mx-auto xl:mx-0 items-center">
                                   {/* item 1 */}
                                   <div className="max-w-max">
                                        <div className="uppercase font-bold text-primary">Age</div>
                                        <p>24 Years</p>
                                   </div>
                                   {/* item 2 */}
                                   <div className="max-w-max">
                                        <div className="uppercase font-bold text-primary">Born</div>
                                        <p>Kim Son, Ninh Binh</p>
                                   </div>
                                   {/* item 3 */}
                                   <div className="max-w-max">
                                        <div className="uppercase font-bold text-primary">Phone</div>
                                        <p>0839 691 898</p>
                                   </div>
                                   {/* item 4 */}
                                   <div className="max-w-max">
                                        <div className="uppercase font-bold text-primary">Email</div>
                                        <p>vietphuong250201@gmail.com</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section >
     );
};

export default About