import { Given, setDefaultTimeout, When } from '@cucumber/cucumber';
import { Element } from '../../interactions/element';
import { Page } from '../../interactions/page';
import { log } from '../../utils/logger';

import { timeouts } from '../../configs/timeouts';

setDefaultTimeout(timeouts.DEFAULT_WAIT);
Given('I am on {page}', { timeout: timeouts.STEP_WAIT }, async (page: Page) => {
  log.info(page.actions.url);
});

Given(
  'I navigate to {page}',
  { timeout: timeouts.STEP_WAIT },
  async (page: Page) => {
    await page.actions.goTo();
  }
);

When(
  'I click on {element}',
  { timeout: timeouts.STEP_WAIT },
  async (element: Element) => {
    await element.actions.click();
  }
);