import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-center mx-auto w-5/6 md:flex gap-16">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, odit nam veritatis eius quasi dolorum magni modi saepe.
            Quod nobis laudantium dignissimos? Similique pariatur qui labore,
            nobis quo impedit et.
          </p>
          <p>@ Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Quod nobis laudantium </p>
          <p className="my-5">pariatur qui labore, nobis quo impedit et.</p>
          <p className="my-5">consectetur adipisicing elit.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Quod nobis laudantium </p>
          <p className="my-5">(+234)706557014</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
