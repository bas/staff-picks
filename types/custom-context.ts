export interface UserContext {
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