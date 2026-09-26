import { lazy, type ComponentType } from "react";

type Loader<P> = () => Promise<{ default: ComponentType<P> }>;

/**
 * React.lazy that can be resolved ahead of the first render. Once preloaded,
 * the real component renders directly (no Suspense fallback), so a
 * prerendered page isn't blanked while its chunk loads.
 */
export function preloadable<P extends object>(loader: Loader<P>) {
  let Loaded: ComponentType<P> | null = null;
  const load = () =>
    loader().then((mod) => {
      Loaded = mod.default;
      return mod;
    });
  const Lazy = lazy(load);
  function Component(props: P) {
    return Loaded ? <Loaded {...props} /> : <Lazy {...props} />;
  }
  Component.preload = load;
  return Component;
}
