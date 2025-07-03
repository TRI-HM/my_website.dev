import React from "react";
import {
  FaUser,
  FaBirthdayCake,
  FaPhone,
  FaEnvelope,
  FaBullseye,
  FaLaptopCode,
} from "react-icons/fa";

const Info = () => {
  return (
    <section className="bg-white/90 rounded-2xl shadow-lg p-8 w-full mx-auto border border-blue-100">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Thông tin cá nhân
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Thông tin cơ bản bên trái */}
        <ul className="space-y-4 flex-1">
          <li className="flex items-center gap-3">
            <FaUser className="text-blue-600 text-xl" />
            <span className="font-semibold text-gray-700">Họ tên:</span>
            <span className="text-gray-800">Nguyễn Văn A</span>
          </li>
          <li className="flex items-center gap-3">
            <FaBirthdayCake className="text-blue-600 text-xl" />
            <span className="font-semibold text-gray-700">Ngày sinh:</span>
            <span className="text-gray-800">01/01/1995</span>
          </li>
          <li className="flex items-center gap-3">
            <FaPhone className="text-blue-600 text-xl" />
            <span className="font-semibold text-gray-700">Số điện thoại:</span>
            <span className="text-gray-800">0123 456 789</span>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-800">yourmail@gmail.com</span>
          </li>
        </ul>
        {/* Mục tiêu & công nghệ bên phải */}
        <ul className="space-y-4 flex-1">
          <li className="flex items-start gap-3">
            <FaBullseye className="text-blue-600 text-xl mt-1" />
            <div>
              <span className="font-semibold text-gray-700">
                Mục tiêu nghề nghiệp:
              </span>
              <p className="text-gray-800">
                Phát triển kỹ năng lập trình web, trở thành Full Stack
                Developer, đóng góp vào các dự án mã nguồn mở.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaBullseye className="text-blue-600 text-xl mt-1" />
            <div>
              <span className="font-semibold text-gray-700">
                Định hướng nghề nghiệp:
              </span>
              <p className="text-gray-800">
                Trở thành Project Manager chuyên nghiệp, phát triển kỹ năng lãnh
                đạo, quản lý dự án và xây dựng đội nhóm hiệu quả.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <FaLaptopCode className="text-blue-600 text-xl mt-1" />
            <div>
              <span className="font-semibold text-gray-700">
                Hiểu biết công nghệ:
              </span>
              <p className="text-gray-800">
                Thành thạo ReactJS, NextJS, Tailwind CSS, NodeJS, quản lý dự án
                Agile/Scrum, CI/CD, Cloud, và luôn cập nhật các xu hướng công
                nghệ mới.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Info;
