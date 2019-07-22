const withSass = require('@zeit/next-sass');
module.exports = withSass({
    webpack(config, options) {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'frontmatter-markdown-loader'
            }
        )
        return config;
    }
})

