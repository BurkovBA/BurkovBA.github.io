const siteUrl = `http://borisburkov.net`;

module.exports = {
  siteMetadata: {
    title: `Personal blog of Boris Burkov`,
    author: `Boris Burkov`,
    description: `A personal blog of Boris Burkov, version 4.1, this time written in Gatsby.`,
    siteUrl: siteUrl,
    social: {
      telegram: `BorisBurkov`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // the github handler whose gists are to be accessed
              username: 'BurkovBA',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            }
          },
          `gatsby-transformer-ffmpeg`,
          `gatsby-plugin-ffmpeg`,
          {
            resolve: 'gatsby-remark-video',
            options: {
                width: 800,
                height: 'auto',
                preload: 'auto',
                muted: true,
                autoplay: true,
                playsinline: true,
                controls: true,
                loop: true
            }
          },
          {
            resolve: `gatsby-remark-videos`,
            options: {
              pipelines: [
                {
                  name: 'vp9',
                  transcode: chain =>
                    chain
                      .videoCodec('libvpx-vp9')
                      .noAudio()
                      .outputOptions(['-crf 20', '-b:v 0']),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: 'webm',
                },
                {
                  name: 'h264',
                  transcode: chain =>
                    chain
                      .videoCodec('libx264')
                      .noAudio()
                      .addOption('-profile:v', 'main')
                      .addOption('-pix_fmt', 'yuv420p')
                      .outputOptions(['-movflags faststart'])
                      .videoBitrate('1000k'),
                  maxHeight: 480,
                  maxWidth: 900,
                  fileExtension: 'mp4',
                },
              ],
              attributes: [
                'preload',
                'autoplay',
                'muted',
                'loop',
                'playsinline',
                'controls'
              ]
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 990,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            // "@burkov/gatsby-remark-katex": "^5.4.1-next.1",
//            resolve: `@burkov/gatsby-remark-katex`,
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          }
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `UA-111349824-1`, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage {
            nodes {
              path
            }
          }

          allMarkdownRemark {
            nodes {
              fields {
                slug
              }
              frontmatter {
                date
              }
            }
          }
        }`,
        createLinkInHead: true,
        resolveSiteUrl: () => siteUrl,
        serialize: (page) => {
          const today = new Date();
          var date = today.getFullYear() + '-' + (today.getMonth() + 1 ) + '-' + today.getDate();

          return {
            url: `${siteUrl}${page.path}`,
            lastmod: new Date(),
            changefreq: `daily`,
            priority: 0.7
          };
        },
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: "burkovba"
      }
    },
//    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal blog of Boris Burkov`,
        short_name: `borisburkov.net`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/burkov-boris-web.jpg`,
      },
    },
//    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ],
};
