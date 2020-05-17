export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec193862723aafa69a5e5da',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qcaedoqq',
                  apiId: 'e8a04221-5ed5-4def-894a-e210d7f8d0b8'
                },
                {
                  buildHookId: '5ec19386496fb5951f1e2432',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pwcyjyed',
                  apiId: 'd66e5078-b43c-4811-bd1e-e8244db6435a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nachi1490/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pwcyjyed.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
