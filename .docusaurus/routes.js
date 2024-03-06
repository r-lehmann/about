import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/markdown-page',
    component: ComponentCreator('/about/markdown-page', 'fa8'),
    exact: true
  },
  {
    path: '/about/docs',
    component: ComponentCreator('/about/docs', 'a3d'),
    routes: [
      {
        path: '/about/docs',
        component: ComponentCreator('/about/docs', 'df2'),
        routes: [
          {
            path: '/about/docs',
            component: ComponentCreator('/about/docs', '690'),
            routes: [
              {
                path: '/about/docs/intro',
                component: ComponentCreator('/about/docs/intro', 'd90'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/docs/writing-samples',
                component: ComponentCreator('/about/docs/writing-samples', '166'),
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
    component: ComponentCreator('/about/', '2eb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
