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
    [BLOCKS.TABLE]: (node) => {
      return (
        <table className="table-auto text-lg text-gray-primary">
          {node.content.map((row: any, index: any) =>
            index === 0 ? (
              <tr key={index} className="font-bold text-xl bg-gray-light">
                {row.content.map((cell: any, index: any) => (
                  <th
                    key={index}
                    className="border-2 border-gray-light border-solid  p-6 rounded-sm"
                  >
                    {cell.content[0].content[0].value}
                  </th>
                ))}
              </tr>
            ) : (
              <tr className="border-2 border-gray-light border-solid">
                {row.content.map((cell: any) => (
                  <td className="border-2 border-gray-light border-solid p-4 rounded-sm">
                    {cell.content[0].content.length > 1 &&
                    cell.content[0].content[1].nodeType === "hyperlink" ? (
                      <a
                        href={cell.content[0].content[1].data.uri}
                        className="text-orange-primary"
                      >
                        {cell.content[0].content[1].content[0].value}
                      </a>
                    ) : (
                      cell.content[0].content[0].value
                    )}{" "}
                  </td>
                ))}
              </tr>
            )
          )}{" "}
        </table>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      if (node.data.uri.includes("https://www.youtube.com/watch?v=")) {
        const videoId = node.data.uri.substring(
          node.data.uri.lastIndexOf("v=") + 2
        );
        return (
          <div className="flex justify-center">
            <iframe
              className="mt-8 w-full lg:w-1/2 h-72 "
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
      return (
        <a className="text-orange-primary" href={node.data.uri}>
          {children}
        </a>
      );
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, title } = node.data.target;
      return (
        <div className="my-12 flex w-full justify-center">
          <GatsbyImage
            className=" max-w-xl md:max-w-4xl"
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
