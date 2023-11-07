/** @type {import('next').NextConfig} */

const { performance } = require('perf_hooks');

const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'export'
};

module.exports = nextConfig;
