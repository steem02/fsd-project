import { PropsWithChildren, useState } from "react";
import { cns } from "shared/lib";
import { Button } from "shared/ui/Button";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import css from "./Sidebar.module.scss";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "features/LangSwitcher";

interface SideBarProps {
	classNames?: string;
}

export function Sidebar(props: PropsWithChildren<SideBarProps>) {
	const { classNames } = props;
	let [collapsed, setCollapsed] = useState(false);
	const { t, i18n } = useTranslation("sidebar");

	const toggleSidebar = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<div className={cns(css.root, { classNames, [css.collapsed]: collapsed }, [])}>
			<div className={css.links}></div>
			<div className={css.actions}>
				<ThemeSwitcher />
				<LangSwitcher />
				<Button onClick={toggleSidebar}>{t("sidebar_toggle")}</Button>
			</div>
		</div>
	);
}
