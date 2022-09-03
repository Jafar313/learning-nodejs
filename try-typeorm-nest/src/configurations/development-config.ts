import { GeneralConfig } from './general-config';

export class DevelopmentConfig extends GeneralConfig {
  public get config() {
    return 'Development Configurations \n';
  }
}
