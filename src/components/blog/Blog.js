import React from "react";
import Title from "../home/Title";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div>
      <Title title="Certification" subTitle="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/cct.jpg"
            title="December, 19 2023"
            subTitle="Certificate of Attendance CCT"
            category="Certificate"
          />
          <BlogCard
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/ehe.jpg"
            title="December, 19 2023"
            subTitle="Certificate of Attendance EHE"
            category="Certificate"
          />
          <BlogCard
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/nde.jpg"
            title="December, 19 2023"
            subTitle="Certificate of Attendance EHE"
            category="Certificate"
          />
        </div>
        <div className="px-6">
          <BlogCard
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/oracle.jpg"
            title="March 4, 2022"
            subTitle="Oracle"
            category="Certificate"
          />
          <BlogCard
            image="https://raw.githubusercontent.com/safwansheamus/AssetBuatNugas/main/Portofolio/kominfo.jpg"
            title=""
            subTitle="Webinar Kominfo"
            category="Certificate"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
