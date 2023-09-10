import "../styles/index.css";
import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <DefaultSeo
        title="YouTube Thumbnail image view and Download : Grab YT Thumbnails."
        description="Download youtube thumbnail image, Grab youtube video thumbnails images easy way get Thumbnail Image and save yt thumbnail images with our free online thumbnail downloader tool you can select List of sizes and qualities 4k, HQ, HD,SD, MQ, The perfect size is 1280 X 720 pixels. generate YouTube video thumbnail Start download YT image it in just a few seconds for free."
        canonical="https://youtubethumbnaildownlaoder.com"
        openGraph={{
          url: "https://youtubethumbnaildownlaoder.com",
          title: "YouTube Thumbnail image view and Download : Grab YT Thumbnails.",
          description: "Download youtube thumbnail image, Grab youtube video thumbnails images easy way get Thumbnail Image and save yt thumbnail images with our free online thumbnail downloader tool you can select List of sizes and qualities 4k, HQ, HD,SD, MQ, The perfect size is 1280 X 720 pixels. generate YouTube video thumbnail Start download YT image it in just a few seconds for free.",
          site_name: "YouTube Thumbnail image view and Download : Grab YT Thumbnails.",
        }}
      />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
