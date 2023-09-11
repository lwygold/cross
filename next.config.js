/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";
const repository = "kross2";


const nextConfig = {        
    basePath: isDev ? "" : '/'+repository,
    output: 'export',
    assetPrefix: isDev ? "" : "https://lwygold.github.io/kross2/",      
}

module.exports = nextConfig
