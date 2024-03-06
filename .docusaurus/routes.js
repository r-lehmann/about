import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2b9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3df'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '586'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/writing-samples',
                component: ComponentCreator('/docs/writing-samples', 'e3d'),
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
    component: ComponentCreator('/', 'a9e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
