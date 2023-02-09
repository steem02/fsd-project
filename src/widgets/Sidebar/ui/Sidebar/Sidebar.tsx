import { PropsWithChildren, useState } from "react";
import { cns } from "shared/lib";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import css from "./Sidebar.module.scss";

interface SideBarProps {
	classNames?: string;
}

export function Sidebar(props: PropsWithChildren<SideBarProps>) {
	const { classNames, children } = props;
	let [collapsed, setCollapsed] = useState(false);

	const toggleSidebar = () => {
		setCollapsed((collapsed) => !collapsed);
	};

	return (
		<div className={cns(css.root, { classNames, [css.collapsed]: collapsed }, [])}>
			<div>
				<button onClick={toggleSidebar}>{"<0_0>"}</button>
			</div>
			<div className={css.links}></div>
			<div className={css.actions}>
				<ThemeSwitcher />
			</div>
		</div>
	);
}
