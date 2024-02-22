import type { TranslationMap } from "@driveco/shared";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: { translation: TranslationMap };
  }
}
