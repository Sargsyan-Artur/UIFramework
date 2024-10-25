import { When, setDefaultTimeout } from '@cucumber/cucumber';
import { memory } from '../../utils/memory';
import { Element } from '../../interactions/element';
import { timeouts } from '../../configs/timeouts';


setDefaultTimeout(timeouts.DEFAULT_WAIT);
When(
  'I remember the text of {element} as {string}',
  async (element: Element, key: string) => {
    const text: string = await element.actions.getText();
    memory.set(key, text);
  }
);