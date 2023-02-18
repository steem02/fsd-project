type Mods = Record<string, string | boolean | null | undefined>;

export default function classNamess(
  className: string,
  mods: Mods = {},
  additional: Array<string | boolean | undefined> = []
): string {
  return [className, ...additional.filter(Boolean), ...Object.keys(mods).filter((key) => mods[key])].join(' ');
}
