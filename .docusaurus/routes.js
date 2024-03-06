import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '8ec'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '81f'),
        routes: [
          {
            path: '/docs/',
            component: ComponentCreator('/docs/', 'd59'),
            routes: [
              {
                path: '/docs/intro/',
                component: ComponentCreator('/docs/intro/', '688'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/writing-samples/',
                component: ComponentCreator('/docs/writing-samples/', 'b40'),
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
