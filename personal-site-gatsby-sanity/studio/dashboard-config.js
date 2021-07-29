export default {
  widgets: [
    {
      name: 'google-analytics',
      layout: {
        width: 'large',
      },
      options: {
        title: 'Last 30 days',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:date',
            metrics: 'ga:users, ga:sessions, ga:newUsers',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'LINE',
            options: {
              width: '100%',
            },
          },
        },
      },
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium',
      },
      options: {
        title: 'World map',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:country',
            metrics: 'ga:users',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
          },
          chart: {
            type: 'GEO',
            width: '100%',
          },
        },
      },
    },
    {
      name: 'google-analytics',
      layout: {
        width: 'medium',
      },
      options: {
        title: 'Top 10 bouncing blog posts',
        gaConfig: {
          reportType: 'ga',
          query: {
            dimensions: 'ga:pagePath',
            'max-results': 10,
            metrics: 'ga:bounceRate, ga:bounces, ga:pageViews',
            sort: '-ga:bounceRate',
            'start-date': '30daysAgo',
            'end-date': 'yesterday',
            filters: 'ga:pagePath=~^/blog;ga:bounces>50',
          },
          chart: {
            type: 'TABLE',
            labels: {
              0: 'Page path',
              1: 'Bounce rate',
              2: 'Bounces',
              3: 'Page views',
            },
            options: {
              width: '100%',
            },
          },
        },
      },
    },
  ],
};
