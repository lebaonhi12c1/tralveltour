/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.freepik.com','res.cloudinary.com']
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}
//"https://res.cloudinary.com/dbcmvjs9m/image/upload/v1681645149/destination/Nepal%20Trek%20and%20Tour/unvhwpwbq1e1kmrll9fl.avif"   https://img.freepik.com/free-photo/jeans-with-sale-label-copy-space_23-2148670056.jpg?w=1060&t=st=1681916454~exp=1681917054~hmac=8316f6b9b94902a1f81e55bd637bbdcd9dfbb0fb9b20d837602ad2d152f1d18e

module.exports = nextConfig
