import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
        Xe Limousine Đà Lạt - Sài Gòn
        </span>
        <h2 className="font-semibold text-4xl mt-5">Limousine giường đôi</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Tư vấn miễn phí" />
            <span className="block text-xl font-semibold">
            Giá vé xe Limousine Đà Lạt - Sài Gòn; Dịch vụ tour, hotel, thuê xe Đà Lạt
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Miễn phí thuê xe máy khi đặt vé khứ hồi
              costs
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Giá vé " />
            <span className="block text-xl font-semibold">
            Giá vé xe Limousine Venus Đà Lạt là 300.000đ/người/chặng.
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Millions of people are searching for unique places to stay around
              the world
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Dịch vụ" />
            <span className="block text-xl font-semibold">
            Dịch vụ
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Giá xe đã bao gồm nước suối miễn phí, xe trung chuyển trung tâm thành phố Đà Lạt và các dịch vụ khác trên xe.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
