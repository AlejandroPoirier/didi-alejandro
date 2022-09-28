import React, { ReactElement, ReactNode } from "react";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import {
  ContentfulRichTextGatsbyReference,
  renderRichText,
  RenderRichTextData,
} from "gatsby-source-contentful/rich-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface optionsInterface {
  renderMark: {
    [key: string]: (key: ReactNode) => ReactElement;
  };
  renderNode: {
    [key: string]: (node: any, children: any) => ReactElement;
  };
}

const options: optionsInterface = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className={"my-14 text-center text-3xl font-bold"}>{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className={"my-12 text-2xl font-bold"}>{children}</h2>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className={"my-12 text-center text-xl font-bold text-orange-primary"}>
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className={"my-12 text-center text-lg"}>{children}</h6>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => <p className={""}>{children}</p>,
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="text-orange-primary" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      console.log(node);
      const { gatsbyImageData, title } = node.data.target;
      return (
        <div className="my-12 flex w-full justify-center">
          <GatsbyImage
            className=" max-w-xl"
            image={getImage(gatsbyImageData)!}
            alt={title}
          ></GatsbyImage>
        </div>
      );
    },
  },
};

interface RichContentProps {
  richContent: RenderRichTextData<ContentfulRichTextGatsbyReference>;
}

const RichContent = ({ richContent }: RichContentProps): any => {
  return renderRichText(richContent, options);
};

export default RichContent;
