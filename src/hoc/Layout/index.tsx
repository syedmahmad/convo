import type { NextPage } from "next";
import React, { Fragment } from 'react';
import HeadContent from '../../singleton/headContent';

interface Imeta {
  title: string;
  description: string;
  image_url: string;
  keywords: string;
  route: string;
}

interface ILayoutProps {
  meta: Imeta;
}

const Layout: NextPage<ILayoutProps> = (props) => {
  const { title, description, image_url, keywords, route} = props.meta;
  return (
    <Fragment>
      <HeadContent
        // @ts-ignore
        title={title}
        description={description}
        image_url={image_url}
        keywords={keywords}
        route={route}
      />
      {props.children}
    </Fragment>
  );
}


export default Layout;
