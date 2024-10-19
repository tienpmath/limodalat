import React from "react";
import I404Png from "@/images/404.png";
import Image from "next/image";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: 'Không tìm thấy Limousine Sài Gòn đi Đà Lạt |Bookinh xe Sài Gòn Đà Lạt tốt nhất 2025 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	description: 'Booking online & rental online Xe limousine Sài Gòn đi Đà Lạt | Danh sách các hãng xe Sài Gòn Đà Lạt tốt nhất 2024 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	keywords: 'limousine Sài Gòn đi Đà Lạt | Danh sách các hãng xe Sài Gòn Đà Lạt tốt nhất 2024 | Đặt xe đi Đà Lạt | Dịch vụ thuê xe đi Đà Lạt',
	// viewport:
	// 	'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}
const Page404 = () => (
  <div className="nc-Page404">
    <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-2">
        <Image src={I404Png} alt="not-found" />
        <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
          {`Trang không tìm thấy.`}{" "}
        </span>
        <div className="pt-8">
          <ButtonPrimary href="/">Trở về Trang chủ</ButtonPrimary>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
