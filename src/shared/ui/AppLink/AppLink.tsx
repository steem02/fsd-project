import { Link, LinkProps } from "react-router-dom";
import { cns } from "shared/lib";
import css from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	GOLD = "gold",
}

type AppLinkProps = LinkProps & {
	className?: string;
	theme?: AppLinkTheme;
};

export function AppLink(props: AppLinkProps) {
	const { className, theme = AppLinkTheme.PRIMARY } = props;
	return <Link className={cns(css.root, {}, [css[theme]])} {...props} />;
}
