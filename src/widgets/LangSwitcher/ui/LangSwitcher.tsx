import { PropsWithChildren, useState } from "react";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { cns } from "shared/lib";
import css from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
	className?: string;
}

export function LangSwitcher(props: PropsWithChildren<LangSwitcherProps>) {
	const { className } = props;
	const { t, i18n } = useTranslation();

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button className={cns(css.root, { className }, [])} onClick={changeLanguage}>
			{t("language")}
		</Button>
	);
}
