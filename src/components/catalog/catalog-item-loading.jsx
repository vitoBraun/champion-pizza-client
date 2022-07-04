import React from "react";
import ContentLoader from "react-content-loader";

const CatalogItemLoading = () => {
  return (
    <div className="catalogItem">
      <ContentLoader
        speed={2}
        width={300}
        height={440}
        viewBox="0 0 300 440"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="2" y="340" rx="0" ry="0" width="300" height="129" />
        <rect x="1" y="1" rx="15" ry="15" width="300" height="200" />
        <rect x="6" y="229" rx="0" ry="0" width="290" height="26" />
        <rect x="140" y="343" rx="0" ry="0" width="1" height="0" />
        <rect x="7" y="280" rx="0" ry="0" width="281" height="55" />
      </ContentLoader>
    </div>
  );
};

export default CatalogItemLoading;
