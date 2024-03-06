import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about/docs/',
    component: ComponentCreator('/about/docs/', '39c'),
    routes: [
      {
        path: '/about/docs/',
        component: ComponentCreator('/about/docs/', 'fff'),
        routes: [
          {
            path: '/about/docs/',
            component: ComponentCreator('/about/docs/', '583'),
            routes: [
              {
                path: '/about/docs/intro/',
                component: ComponentCreator('/about/docs/intro/', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/docs/writing-samples/',
                component: ComponentCreator('/about/docs/writing-samples/', '12d'),
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
