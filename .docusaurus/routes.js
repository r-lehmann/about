import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '98b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'f7b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '657'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bd0'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/resume',
                component: ComponentCreator('/docs/resume', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/writing-samples',
                component: ComponentCreator('/docs/writing-samples', 'd51'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
