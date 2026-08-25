import type { FC } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "@common/config/i18n/languages";

export interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const switchLanguage = () => {
    i18n.changeLanguage(i18n.language === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN);
  };

  return <button onClick={switchLanguage}>{t("language")}</button>;
};
