import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <section className="text-center">
        <img
          src={catAndHumanIllustration}
          className="block mx-auto w-1/2"
          alt="Cat and human sitting on a couch"
        />

        <h1 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
        A simple <a href="https://www.gatsbyjs.org/">GatsbyJS</a> <a href="https://tailwindcss.com/">Tailwind</a> starter.
        </h1>

        <p className="leading-loose">
          This is a barebones starter for Gatsby styled using{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-bold no-underline text-gray-900"
          >
            Tailwind
          </a>
          , a utility-first CSS framework.
        </p>

        <p className="leading-loose">

          <a href="https://github.com/app-generator/gatsby-starter-tailwind">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Sources
            </button>
          </a>
          {'  '}
          <a href="https://developers.google.com/speed/pagespeed/insights/?url=https://gatsby-starter-tailwind.appseed.us">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Check Speed
            </button>
          </a>

        </p>

        </section>

    </Layout>
  );
}

export default IndexPage;
