import { IPOLocators } from '../../interfaces/poHandler';
import { POComponent } from '../../../poHandler';

export class WikiComponent extends POComponent {
  readonly name = 'WikiComponent';

  get locators(): IPOLocators {
    return {
      SomeLocator: 'test',
      languageListButton: '#js-lang-list-button',
      languageOptionsPanel: '.central-featured',
      languageOptions: '.central-featured-lang strong',
    };
  }
}
