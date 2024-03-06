import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/__docusaurus/debug',
    component: ComponentCreator('/about/__docusaurus/debug', 'b0d'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/config',
    component: ComponentCreator('/about/__docusaurus/debug/config', '8a6'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/content',
    component: ComponentCreator('/about/__docusaurus/debug/content', '4b8'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/globalData',
    component: ComponentCreator('/about/__docusaurus/debug/globalData', '0ca'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/metadata',
    component: ComponentCreator('/about/__docusaurus/debug/metadata', '84f'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/registry',
    component: ComponentCreator('/about/__docusaurus/debug/registry', '372'),
    exact: true
  },
  {
    path: '/about/__docusaurus/debug/routes',
    component: ComponentCreator('/about/__docusaurus/debug/routes', '200'),
    exact: true
  },
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
