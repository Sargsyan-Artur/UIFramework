import { expect } from 'chai';

import { memory } from '../../utils/memory';
import { PageHandler } from './page.handler';

export class Expects extends PageHandler {
  public async toHaveURL(url): Promise<void> {
    url = memory.getValue(url);
    expect(this.page.url()).to.contain(url);
  }
}
