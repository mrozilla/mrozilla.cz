import React from "react";

export interface SEOContainerProps {
  title: string;
  description?: string;
  permalink: string;
  ogImage: string;
}

const siteUrl = "https://www.mrozilla.cz";

export const SEOContainer: React.FC<SEOContainerProps> = ({
  title,
  description,
  permalink,
  ogImage,
}) => {
  return (
    <>
      <title>{title} | mrozilla</title>
      <meta name="description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mrozilla" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@mrozilla" />
      <meta name="twitter:image" content={ogImage} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={`${siteUrl}${permalink}`} />
      <meta name="og:image" content={ogImage} />
      <meta name="fb:app_id" content={process.env.GATSBY_FB_APP_ID} />

      <link rel="canonical" href={`${siteUrl}${permalink}`} />
    </>
  );
};
