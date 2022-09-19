import { GeneralConfig } from './general.config';

export class ProductionConfig extends GeneralConfig {
  public get config() {
    return 'Production Configurations \n';
  }
}
