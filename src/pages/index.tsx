import * as React from "react";
//
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { cl } from "../helpers/general";
//

const Index = () => {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1);
  }, []);

  return (
    <>
      <div className="lg:fixed inset-0 lg:grid grid-cols-4 min-h-screen flex flex-col gap-3">
        {[
          {
            title: "About Me",
            subtitle: "@nanduviolin",
            link: "https://instagram.com/nanduviolin",
            // icon: <StaticImage alt="" src="../images/hero/1-icon.png" />,
            image: <StaticImage alt="" src="../images/hero/1.png" />,
          },
          {
            title: "Contact Me",
            subtitle: "WhatsApp",
            link: "https://wa.me/919146987601",
            // icon: <StaticImage alt="" src="../images/hero/2-icon.png" />,
            image: <StaticImage alt="" src="../images/hero/2.png" />,
          },
          {
            title: "Celesta Productions",
            subtitle: "Post Production & Event Management",
            link: "tel:918089901663",
            icon: <StaticImage alt="" src="../images/hero/3-icon.png" />,
            image: <StaticImage alt="" src="../images/hero/3.png" />,
          },
          {
            title: "Upside Down",
            subtitle: "Music Band",
            link: "tel:918089901663",
            icon: <StaticImage alt="" src="../images/hero/4-icon.png" />,
            image: <StaticImage alt="" src="../images/hero/4.png" />,
          },
        ].map((item, index) => {
          const icon = item.icon && React.cloneElement(item.icon, {
            ...(item as any).props,
            className: "lg:w-28 w-16 mb-6 lg:mb-12",
          })

          return (
            <Link
              to={item.link}
              target="_blank"
              key={index}
              className={cl(
                isReady && "fadeInEffectDown",
                "transition-all duration-200 group hero-image overflow-hidden relative flex items-center justify-center",
                "h-full"
              )}
            >
              <div className="p-8 lg:absolute bottom-0 left-0 transition-all lg:group-hover:opacity-0 duration-200 delay-75 lg:group-hover:translate-y-5 text-center lg:text-left">
                <div className="lg:hidden">{icon}</div>
                <div className="font-teko text-4xl lg:text-6xl">
                  {item.title}
                </div>
                <div className="opacity-50">{item.subtitle}</div>
              </div>
              <div className="text-center hidden lg:block opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0 -translate-y-5 duration-200 delay-150">
                {icon}
                <div className="font-teko text-6xl">{item.title}</div>
                <div className="opacity-50 text-lg">{item.subtitle}</div>
              </div>
              <span className="absolute inset-0 lg:bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.8)] bg-black opacity-70 lg:opacity-100 lg:bg-transparent -z-10" />
              {React.cloneElement(item.image, {
                ...(item as any).props,
                className:
                  "lg:group-hover:blur-3xl transition-all absolute inset-0 -z-20",
              })}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Index;
