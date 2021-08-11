import React from "react";
import "../css/firebase.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { lightfair } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Basic = () => {
  console.log(SyntaxHighlighter.supportedLanguages);
  return (
    <div className="firebase">
      <h2>Firebase Admin SDK</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cumque,
        iusto ut, incidunt mollitia eius nisi repudiandae enim, rerum assumenda
        voluptatibus blanditiis omnis aut magnam voluptatem cum praesentium.
        Nisi, voluptate? <a href="/">Learn more</a>
      </p>
      <p>Firebase service accound</p>
      <strong>seo-builder@seobuilder.com</strong>
      <hr />
      <SyntaxHighlighter language="htmlbars" style={lightfair}>
        {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="./imgs/search.png" />
    <link rel="apple-touch-icon" href="./imgs/search.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="No more waiting in queues" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@KvsSankar1" />
    <meta name="twitter:creator" content="@KvsSankar1" />
    <meta name="twitter:title" content="seo-builder" />
    <meta
      name="twitter:description"
      content="Make your web app deploying ready"
    />
    <meta name="twitter:image" content="./imgs/search.png" />
    <meta name="twitter:domain" content="https://seo-builder.herokuapp.com/" />

    <meta property="og:title" content="SeoBuilder" data-dynamic="true" />
    <meta property="og:site_name" content="SeoBuilder" data-dynamic="true" />
    <meta property="og:url" content="https://seo-builder.herokuapp.com/" />
    <meta
      property="og:description"
      content="Make your web app deploying ready"
      data-dynamic="true"
    />
    <meta property="og:type" content="article" data-dynamic="true" />
    <meta property="og:image" content="./imgs/search.png" />
    <meta property="og:image:type" content="image/png" data-dynamic="true" />
    <meta property="og:image:width" content="1200" data-dynamic="true" />
    <meta property="og:image:height" content="630" data-dynamic="true" />
    <meta
      property="article:author"
      content="https://www.facebook.com/reacter.reacter.7/"
      data-dynamic="true"
    />
    <meta
      property="article:publisher"
      content="https://www.facebook.com/reacter.reacter.7/"
      data-dynamic="true"
    />
    <meta property="og:locale" content="en_US" />
    <title>seo-builder | VacciQ</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
  </body>
</html>
`}
      </SyntaxHighlighter>
    </div>
  );
};

export default Basic;
