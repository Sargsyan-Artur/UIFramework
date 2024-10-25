import { After, Before, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { devices } from 'playwright';
import { IProvider } from '../../interfaces/provider';
import { provider } from '../../interactions';
import { config } from '../../configs/config';

let pwProvider: IProvider;
export let page: any = {};

Before(async () => {
  const contextOptions = {
    baseURL: config.baseURL,
    ...devices[config.device]
  };
  const browser = {
    YES: [`--remote-debugging-port=${config.debugPort}`],
    NO: ['']
  };

  pwProvider = await provider(
    {
      headless: true,
      args: browser[config.performance],
      channel: config.browser
    },
    contextOptions
  );

  page = pwProvider.page;
});

After(async () => {
  await pwProvider.browser.close();
});
