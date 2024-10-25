import {
  IConfig,
  ICollectionConfig,
  IElementConfig,
  IPageConfig,
  TPageConfig
} from '../../interfaces/element';
import { Element } from '../element';
import { Actions } from './actions';
import { Expects } from './expects';
import { Waits } from './waits';

export class Page {
  private readonly pageConfig: TPageConfig;

  private readonly elementConfig: IElementConfig;

  constructor(private readonly config?: IConfig | undefined) {
    if (!this.config || this.isPageConfig(this.config)) {
      this.pageConfig = this.config as IPageConfig;
    } else {
      this.elementConfig = this.config;
    }
  }

  public get element(): Element {
    return new Element(this.elementConfig);
  }

  public get actions(): Actions {
    return new Actions(this.pageConfig);
  }

  public get expects(): Expects {
    return new Expects(this.pageConfig);
  }

  public get waits(): Waits {
    return new Waits(this.pageConfig);
  }

  static init(pageConfig?: IPageConfig): Page;
  static init(elementConfig: IElementConfig): Page;
  static init(config: IElementConfig | ICollectionConfig | IPageConfig): Page {
    return new Page(config);
  }

  private isPageConfig(config: IConfig): config is IPageConfig {
    return 'url' in config;
  }
}