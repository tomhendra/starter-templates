// Generate pages from Sanity data for blog posts
async function createBlogPostPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityPost {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨 Error fetching blog post data.', result.errors);
  }

  const postEdges = (result.data.allSanityPost || {}).edges || [];

  postEdges.forEach(({ node }) => {
    const { id } = node;
    const slug = node.slug.current;
    const path = `/blog/${slug}/`;

    reporter.info(`🛠 Creating blog post: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/blog-post.tsx'),
      context: { id },
    });
  });
}

// Generate pages from Sanity data for projects
async function createProjectPages(graphql, actions, reporter) {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allSanityProject {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('🚨 Error fetching project data', result.errors);
  }

  const projectEdges = (result.data.allSanityProject || {}).edges || [];

  projectEdges.forEach(({ node }) => {
    const { id } = node;
    const slug = node.slug.current;
    const path = `/projects/${slug}/`;

    reporter.info(`🛠 Creating project page: ${path}`);

    createPage({
      path,
      component: require.resolve('./src/templates/project.tsx'),
      context: { id },
    });
  });
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter);
  await createProjectPages(graphql, actions, reporter);
};
