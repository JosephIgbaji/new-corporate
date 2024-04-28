import { CaseCard } from "../../components/applications";

import allApp from "../../assets/overview/totalApplications.png";
import business from "../../assets/overview/businessName.png";
import companies from "../../assets/overview/companies.png";
import trustees from "../../assets/overview/trustees.png";
import CaseHead from "./../../components/applications/CaseHead";
import { useGetAllEntityQuery } from "../../service/allEntity.service";
import { ShimmerCategoryItem } from "react-shimmer-effects";
// import { useEffect, useState } from "react";

const Overview = () => {
  const { data: entity } = useGetAllEntityQuery();

  // const [entity, setEntity] = useState(null);
  // const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setInterval(() => {
  //     setEntity(data);
  //     // setShow(true);
  //   }, 5000);
  // }, []);

  console.log("All Entity:", entity?.data);
  return (
    <>
      {entity?.data ? (
        <div className="px-4">
          {/* First Section */}
          <div className="rounded-xl font-poppins mb-4 flex flex-wrap gap-5">
            {/* first card */}
            <CaseHead
              icon={allApp}
              count={entity?.data?.totalEntityCount}
              title={"Total Applications"}
            />
            <CaseHead
              icon={business}
              count={entity?.data?.totalBusinessCount}
              title={"Business Names"}
            />
            <CaseHead
              icon={companies}
              count={entity?.data?.totalCompanyCount}
              title={"Companies"}
            />
            <CaseHead
              icon={trustees}
              count={entity?.data?.totalTrustCount}
              title={"Incorporated Trustees"}
            />
          </div>

          {/* Third Section */}
          <div className="p-5 bg-white font-poppins mt-2">
            <div className="sm:flex sm:flex-wrap lg:grid lg:grid-cols-3 pt-4 gap-4">
              {entity?.data?.allEntity.map((item, id) => (
                <CaseCard key={id} details={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <ShimmerCategoryItem />
          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            title
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            title
          />

          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            text
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            text
          />

          <ShimmerCategoryItem
            hasImage
            imageType="thumbnail"
            imageWidth={100}
            imageHeight={100}
            text
            cta
          />

          <ShimmerCategoryItem
            hasImage
            imageType="circular"
            imageWidth={100}
            imageHeight={100}
            text
            cta
          />
        </div>
      )}
    </>
  );
};

export default Overview;
