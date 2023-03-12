import {
  LDSingleKindContext,
} from "launchdarkly-js-client-sdk";

export interface UserContext extends LDSingleKindContext {
  email?: string;
  name?: string;
  country?: string;
  isPremium?: boolean;
  isStaff?: boolean;
  isBeta?: boolean;
  categories?: string[];
  device?: string;
  operatingSystem?: string;
}