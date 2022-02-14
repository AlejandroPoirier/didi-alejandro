import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faHome } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const directories = pathname.split("/").filter((item) => {
    return item !== "";
  });

  return (
    <nav className="bg-grey-light absolute top-24 z-10 hidden w-full justify-center rounded-md md:flex  md:justify-start">
      <ol className="flex list-none text-white">
        {directories.map((dir, index) => {
          console.log(index);
          if (index === 0) {
            return (
              <li>
                <Link to="/cl/" className="hover:text-blue-700">
                  <FontAwesomeIcon
                    className="mr-2"
                    icon={faHome}
                    size="1x"
                  ></FontAwesomeIcon>
                  home
                </Link>
              </li>
            );
          }

          if (index === directories.length - 1) {
            return (
              <>
                <li>
                  <span className="mx-2">
                    <FontAwesomeIcon
                      icon={faGreaterThan}
                      size="1x"
                    ></FontAwesomeIcon>
                  </span>
                </li>
                <li className="">{dir.replace(/(-)|(_.*)/g, " ")}</li>
              </>
            );
          }
          return (
            <>
              <li>
                <span className="mx-2 ">
                  <FontAwesomeIcon
                    icon={faGreaterThan}
                    size="1x"
                  ></FontAwesomeIcon>
                </span>
              </li>
              <li>
                <Link
                  to={"../".repeat(directories.length - 1 - index)}
                  className=" hover:text-blue-700"
                >
                  {dir.replace(/(-)|(_.*)/g, " ")}
                </Link>
              </li>
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;