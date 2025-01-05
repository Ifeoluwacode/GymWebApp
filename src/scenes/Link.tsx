import { SelectedPage } from "@/shared/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowrCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage === lowrCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowrCasePage}`}
      onClick={() => setSelectedPage(lowrCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
