const fs = require('fs/promises');
const path = require('path')

function buildCfPagesRedirectFile(redirects) {
    let content = ''
    let redirectsArray = Object.entries(redirects).sort(([af,at],[bf,bt])=> at.length - bt.length);

    [
        ([from, to])=>{ return to.startsWith('/') && !from.includes('*') },
        ([_, to])=>{ return !to.startsWith('/') },
        ([from]) => { return from.includes('*') }
    ].forEach((f, i, a)=>{
        redirectsArray.filter(f).forEach(([from, to])=>{
            content += `${from} ${to} 307\n`
        })
        if(i !== (a.length - 1)) content += `\n`
    })

    return content;
}

/**
 * @type {import('@docusaurus/types').PluginModule}
 */
module.exports = (context, options) => {
    let cfPagesRedirects = {}

    return {
        name: 'docusaurus-smleaks-internal-plugin',
        async contentLoaded({ allContent }) {
            cfPagesRedirects = {}
            allContent['docusaurus-plugin-content-blog']?.['default']?.blogPosts?.forEach((blogPost) => {
                if (typeof blogPost.metadata.frontMatter.original_url === 'string') {
                    cfPagesRedirects[`${blogPost.metadata.permalink}/original`] = blogPost.metadata.frontMatter.original_url
                }
            })
            const redirects = Object.entries(options.redirects);
            redirects.forEach(([to, from]) => {
                (Array.isArray(from) ? from : [from]).forEach((from) => {
                    cfPagesRedirects[from] = to
                })
            })
        },
        async postBuild({ outDir }) {
            await fs.writeFile(path.join(outDir, '_redirects'), buildCfPagesRedirectFile(cfPagesRedirects))
        }
    }
}