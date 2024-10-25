import { Locator } from '@playwright/test';

export class Actions {
  constructor(public element: Locator) {}

  async click(options?): Promise<void> {
    return this.element.click(options);
  }

  async fill(text, options?): Promise<void> {
    return this.element.fill(text, options);
  }

  async type(text, options?): Promise<void> {
    return this.element.type(text, options);
  }

  async clear(options?): Promise<void> {
    return this.element.clear(options);
  }

  async dragAndDrop(dropElement, options?): Promise<void> {
    return this.element.dragTo(dropElement, options);
  }

  async getText(options?): Promise<string> {
    return this.element.textContent(options);
  }
}
