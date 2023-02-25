import {
  LDMultiKindContext,
  LDSingleKindContext,
} from "launchdarkly-js-client-sdk";

export interface CustomContext extends LDSingleKindContext {
  device?: string;
  operatingSystem?: string;
  email?: string;
  name?: string;
  country?: string;
  premium?: boolean;
  staff?: boolean;
  groups?: string[];
  _meta?: {
    privateAttributes: string[],
  };
}

export interface CustomMultiContext extends LDMultiKindContext {
  user: CustomContext;
  device: CustomContext;
}
