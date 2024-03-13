// /** @type {import('next').NextConfig} */
// const debug = process.env.NODE_ENV !== "production";
// const repository = "CEMI_next";

// const nextConfig = {
//   assetPrefix:
//     process.env.NODE_ENV === "production"
//       ? "https://ssmln.github.io/cemi-next"
//       : "",
//   output: "export",

// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {

    trailingSlash: true,
    images: {
        unoptimized: true
    }
}

    ;

export default nextConfig;
