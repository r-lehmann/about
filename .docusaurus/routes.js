import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/blog',
    component: ComponentCreator('/about/blog', 'd65'),
    exact: true
  },
  {
    path: '/about/docs',
    component: ComponentCreator('/about/docs', '000'),
    routes: [
      {
        path: '/about/docs',
        component: ComponentCreator('/about/docs', '826'),
        routes: [
          {
            path: '/about/docs',
            component: ComponentCreator('/about/docs', 'fe8'),
            routes: [
              {
                path: '/about/docs/intro',
                component: ComponentCreator('/about/docs/intro', '6dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/docs/resume',
                component: ComponentCreator('/about/docs/resume', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/docs/writing-samples',
                component: ComponentCreator('/about/docs/writing-samples', '6bb'),
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
    path: '/about/',
    component: ComponentCreator('/about/', '402'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
