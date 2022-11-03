export enum NODE_ENV {
  DEV = "development",
  STAGE = "stage",
  PROD = "production",
}

export const CURRENT_ENV = process.env.NODE_ENV;
