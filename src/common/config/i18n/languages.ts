export const LANGUAGES = <const>{
  EN: "en",
  RU: "ru",
};

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES];
