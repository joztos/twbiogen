/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://samasat.com/",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://samasat.com/",
        permanent: false,
      },
    ];
  },
};
