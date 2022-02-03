import { useTranslation } from "react-i18next";

const ListSelectorButton = (props) => {
  const { t } = useTranslation();

  return <div>{t(`adminPage.${props.name}`)}</div>;
};

export default ListSelectorButton;
