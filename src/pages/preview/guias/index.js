import React, { useEffect, useState } from "react";
import { useQueryParam } from "gatsby-query-params";
import Layout from "../../../components/Layout";
import GuideHero from "../../../components/sections/GuideHero";
import RichContent from "../../../components/RichContent";
import PaxBanner from "../../../components/sections/PaxBanner";
import { getDataPreviewContefulGuide } from "../../../util/utils";

const GuideTemplate = () => {
  const urlId = useQueryParam("id", null);
  const [dataP, setDataP] = useState(null);
  const [dataContentful, setDataContentful] = useState(null);

  const contentfulDataPreview = (params) => {
    fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}/environments/master`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
        },

        body: JSON.stringify({
          query: queryPreview,
          variables: { ...params, isPreview: true },
        }),
      }
    )
      .then((res) => res.json())
      .then(({ data }) => {
        if (data) setDataContentful(data);
      });
  };

  if (urlId) contentfulDataPreview({ id: urlId });

  useEffect(() => {
    if (!dataContentful) return;
    setDataP({
      contentfulGuide: getDataPreviewContefulGuide(dataContentful),
    });
  }, [dataContentful]);
  return (
    <Layout>
      {dataP && (
        <>
          <GuideHero data={dataP}></GuideHero>
          <section className="container mx-auto mb-32 text-gray-primary md:px-28">
            <RichContent
              richContent={dataP.contentfulGuide.content}
            ></RichContent>
          </section>
          <PaxBanner></PaxBanner>
        </>
      )}
    </Layout>
  );
};

export default GuideTemplate;

const queryPreview = `
query(
    #$isPreview: Boolean=false
    $id: String = ""
  ){
    
    guide(
      id:$id
      #preview:$isPreview
    ){
      title
      excerpt
      featuredImage{
        url
        width
        height
      }
      content{
        json
        links{
          assets{
            block{
              sys{
                id
              }
              url
              width
              height
              title
              description
              __typename
            }
          }
        }
      }
    }
  }
`;
