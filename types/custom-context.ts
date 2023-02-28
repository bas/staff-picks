import {
  LDMultiKindContext,
  LDSingleKindContext,
} from "launchdarkly-js-client-sdk";

export interface UserContext extends LDSingleKindContext {
  email?: string;
  name?: string;
  country?: string;
}

export interface AccountContext extends LDSingleKindContext {
  isPremium?: boolean;
  isStaff?: boolean;
  isBeta?: boolean;
  categories?: string[];
}

export interface DeviceContext extends LDSingleKindContext {
  device?: string;
  operatingSystem?: string;
}

export interface CustomMultiContext extends LDMultiKindContext {
  user: UserContext;
  account: AccountContext
  device: DeviceContext;
}
