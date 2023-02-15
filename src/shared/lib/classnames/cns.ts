type Mods = Record<string, string | boolean | null | undefined>;

export default function classNames(className: string, mods?: Mods, additional?: string[]): string {
  const result = [className];
  if (mods != null) {
    result.push(...Object.keys(mods).filter((key) => mods[key]));
  }
  if (additional != null) {
    result.push(...additional.filter((item) => Boolean(item)));
  }
  return result.join(' ');
}
