type Mods = Record<string, string | boolean | null | undefined>;

export default function classNames<T>(className: string, mods?: Mods, additional?: string[]): string {
	let result = [className];
	if (mods) {
		result.push(...Object.keys(mods).filter((key) => mods[key]));
	}
	if (additional) {
		result.push(...additional.filter((item) => Boolean(item)));
	}
	return result.join(" ");
}
