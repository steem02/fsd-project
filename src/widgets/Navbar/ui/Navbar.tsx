import { useTheme } from "shared/ThemeProvider";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import css from "./Navbar.module.scss";

interface NavbarProps {}

export function Navbar(props: NavbarProps) {
	return (
		<div className={css.root}>
			<div />
			<div>
				<AppLink to="/main" className={css.link}>
					Main
				</AppLink>
				<AppLink to="/about" className={css.link}>
					About
				</AppLink>
			</div>
		</div>
	);
}
