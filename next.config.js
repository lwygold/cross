/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";
const repository = "cross";


const nextConfig = {        
    basePath: isDev ? "" : '/'+repository,
    output: 'export',
    assetPrefix: isDev ? "" : "https://lwygold.github.io/cross/",      
}

module.exports = nextConfig
