import { SelectedPage } from "@/shared/types";

import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setIsMenuToggled?: (value: boolean) => void;
  isMenuToggled?: boolean;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
  isMenuToggled,
}: Props) => {
  const lowrCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;
  function handleLink() {
    setSelectedPage(lowrCasePage);
    if (setIsMenuToggled) {
      setIsMenuToggled(!isMenuToggled);
    } else {
      return;
    }
  }
  return (
    <AnchorLink
      className={`${selectedPage === lowrCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowrCasePage}`}
      onClick={handleLink}
    >
      {page}
    </AnchorLink>
  );
};
export default Link;
