import { Counter } from "@common/ui/counter/counter";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("title")}</h1>
      <Counter />
    </div>
  );
};
