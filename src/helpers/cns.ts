export type Mods = Record<string, string | boolean | null>;

export function cns(className: string, mods: Mods, additional: string[]): string {
	return [className, ...Object.keys(mods).filter((key) => mods[key]), ...additional].join(" ");
}

cns("app", { hovered: true, enabled: true }, ["app-hovered", "app-enabled"]);
