import Image from "next/image";

const services = [
     {
          icon: "assets/services/icon-1.svg",
          title: "Business administration",
          description: "'Chuyên viên quản trị kinh doanh với kinh nghiệm phát triển chiến lược, tối ưu hóa vận hành và quản lý nhóm. Tôi tập trung vào các giải pháp linh hoạt, đột phá để nâng cao hiệu quả kinh doanh và đạt mục tiêu tài chính. Kỹ năng lãnh đạo giúp tôi dẫn dắt đội ngũ phát triển và đạt thành công bền vững.'"
     },
     {
          icon: "assets/services/icon-4.svg",
          title: "Advertising strategist",
          description: "'Chuyên viên chiến lược quảng cáo với kinh nghiệm phân tích thị trường và hành vi khách hàng, xây dựng chiến dịch sáng tạo tối ưu chi phí. Tôi tập trung vào thông điệp độc đáo, tăng nhận diện thương hiệu và thúc đẩy doanh thu qua các chiến dịch đa kênh.'"
     },
     {
          icon: "assets/services/icon-2.svg",
          title: "Accountant",
          description: "'Kế toán viên giàu kinh nghiệm với khả năng xử lý dữ liệu chính xác, quản lý ngân sách và lập báo cáo toàn diện. Tôi tập trung vào nâng cao hiệu suất và duy trì minh bạch tài chính, sẵn sàng đóng góp vào sự phát triển bền vững của doanh nghiệp.'"
     },
     {
          icon: "assets/services/icon-3.svg",
          title: "Logistician",
          description: "'Chuyên viên logistics với nền tảng vững chắc trong quản lý chuỗi cung ứng, tối ưu vận tải và kiểm soát hàng tồn kho. Tôi có kinh nghiệm đảm bảo hàng hóa vận chuyển đúng thời gian, tối ưu chi phí và linh hoạt ứng phó với thay đổi thị trường để tối ưu hiệu suất và giảm thiểu rủi ro cho doanh nghiệp.'"
     },
]
const Services = () => {
     return (
          <section className="relative z-40">
               <div className="container mx-auto">
                    <ul className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4
                    gap-[20px] -top-12 place-items-center lg:place-items-stretch">
                         {services.map((service, index) => {
                              return (
                                   <li key={index} className="bg-pink-50 shadow-custom p-6 max-w-[350px] md:max-w-none
                                   rounded-lg">
                                        <Image
                                             src={service.icon}
                                             width={48}
                                             height={48}
                                             alt=""
                                             className="mb-4"
                                        />
                                        <h3 className="text-[20px] text-primary font-semibold mb-3">{service.title}</h3>
                                        <p className="text-[15px]">{service.description}</p>
                                   </li>
                              );
                         })}
                    </ul>
               </div>
          </section>
     );
};

export default Services