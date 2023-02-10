import { useTheme } from "app/providers/ThemeProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { ThemeSwitcher } from "features/ThemeSwitcher";
import css from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
	const { t } = useTranslation();

	return (
		<div className={css.root}>
			<div />
			<div>
				<AppLink to="/main" className={css.link}>
					{t("main")}
				</AppLink>
				<AppLink to="/about" className={css.link}>
					{t("about")}
				</AppLink>
			</div>
		</div>
	);
}
