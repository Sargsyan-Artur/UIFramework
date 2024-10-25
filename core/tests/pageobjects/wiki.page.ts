import { POPage, RegisterPage } from '../../poHandler';
import { IPOLocators } from '../../interfaces/poHandler';
import {WikiComponent} from './components/wiki.component'

@RegisterPage()
export class Wiki extends POPage {
  readonly name = 'Wiki';

  readonly url = 'http//';

  constructor(private wikiComponent: WikiComponent) {
    super();
  }

  get locators(): IPOLocators {
    return {
      ...this.wikiComponent,
      SomeLocator: 'test',
      languageListButton: '#js-lang-list-button',
      languageOptionsPanel: '.central-featured',
      languageOptions: '.central-featured-lang strong',
      languageOptionCard: '.central-featured-lang'
    };
  }
}
