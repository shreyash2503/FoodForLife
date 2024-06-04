/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'shreyash-food-for-life-s3-bucket.s3.us-west-2.amazonaws.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
