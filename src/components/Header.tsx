import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
//
import { cl } from "../helpers/general";

interface Props {
}

export const Header = (props: Props) => {
  // const rawData = useStaticQuery(graphql`

  // `)

  return (
    <>
      <Helmet>
        <title></title>
      </Helmet>
    </>
  );
};
