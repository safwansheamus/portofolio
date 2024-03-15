import React from "react";
import Title from "../home/Title";
import BlogCard from "./BlogCard";
import { CertifCct, CertifEhe, CertifKominfo, CertifMitra, CertifNde, CertifOracle } from "../../assets";

const Blog = () => {
  return (
    <div>
      <Title title="Certification" subTitle="" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <BlogCard
            image={CertifCct}
            title="December, 19 2023"
            subTitle="Certificate of Attendance CCT"
            category="Certificate"
          />
          <BlogCard
            image={CertifEhe}
            title="December, 19 2023"
            subTitle="Certificate of Attendance EHE"
            category="Certificate"
          />
          <BlogCard
            image={CertifNde}
            title="December, 19 2023"
            subTitle="Certificate of Attendance NDE"
            category="Certificate"
          />
        </div>
        <div className="px-6">
        <BlogCard
            image={CertifMitra}
            title="August - December 2023"
            subTitle="Metrodata Academy"
            category="Certificate"
          />
          <BlogCard
            image={CertifOracle}
            title="March 4, 2022"
            subTitle="Oracle Academy"
            category="Certificate"
          />
          <BlogCard
            image={CertifKominfo}
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
