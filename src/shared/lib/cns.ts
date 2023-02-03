type Mods = Record<string, string | boolean | null>;

export default function classNames(className: string, mods: Mods, additional: string[]): string {
	return [className, ...Object.keys(mods).filter((key) => mods[key]), ...additional].join(" ");
}
