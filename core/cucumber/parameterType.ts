import { defineParameterType } from '@cucumber/cucumber';

import fs from 'fs';
import { IOC, POPage } from '../poHandler';
import {
  ICollectionConfig,
  IElementConfig,
  IPageConfig
} from '../interfaces/element';
import { Page } from '../interactions/page';

// eslint-disable-next-line import/no-mutable-exports
export let poPage: POPage;

defineParameterType({
  name: 'page',
  regexp: /(\w{1,30}(\s\w{1,30}){0,2}?) page/,

  transformer: (name: string) => {
    poPage = IOC.getPage(name);

    const pageConfig: IPageConfig = {
      url: poPage.url
    };

    return Page.init(pageConfig);
  },
  useForSnippets: false
});

defineParameterType({
  name: 'element',
  regexp: /"([^"]*)" element(?:s)?(?: (by index (\d+)|by text "([^"]*)"))?/,

  transformer: (name: string, options: string) => {
    const locator = poPage.getLocator(name);

    const elementConfig: IElementConfig = {
      locator,
      options
    };

    return Page.init(elementConfig).element;
  },
  useForSnippets: false
});

defineParameterType({
  name: 'validation',
  regexp:
    /be|contain|have|equal|have property|deep equal|match|include members|have members/,

  transformer: (condition: string) => condition,

  useForSnippets: false
});

defineParameterType({
  name: 'validationDom',
  regexp: /visible|disabled|enabled|editable|checked|hidden/,

  transformer: (condition: string) => condition,

  useForSnippets: false
});
