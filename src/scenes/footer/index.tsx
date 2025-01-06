import Logo from "@/assets/Logo.png";
import Link from "../Link";
import { SelectedPage } from "@/shared/types";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};
const Footer = ({ setSelectedPage, selectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 md:flex gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Stay fit and achieve your goals with our gym website! Explore
            membership options, book classes, access personalized workout plans,
            and track your progress—all in one convenient platform.
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-5">
          <h4 className="font-bold">Links</h4>
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />

          {/* <p className="my-5">Benefit </p>
          <p className="my-5">Our Classes</p>
          <p className="my-5">Contact Us</p> */}
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">ajaoifeoluwa44@gmail.com </p>
          <p className="my-5">(+234)7065578014</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
