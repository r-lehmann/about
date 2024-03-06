import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', '600'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', '08f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', 'a2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', 'ea5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '05b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', 'dab'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '253'),
    exact: true
  },
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
