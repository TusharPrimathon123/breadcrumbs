import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const pathnames = pathname.split("/").filter((x) => x);
  let breadCrumbPath = "";

  return (
    <div>
      {pathnames.length > 0 && <Link to={"/"}>Home</Link>}
      {pathnames.map((name, index) => {
        breadCrumbPath += `/${name}`;
        console.log(breadCrumbPath);
        const isLastIndex = index === pathnames.length - 1;
        return isLastIndex ? (
          <span key={breadCrumbPath}>/ {name}</span>
        ) : (
          <span key={breadCrumbPath}>
            <Link to={breadCrumbPath}>/{name}</Link>
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
