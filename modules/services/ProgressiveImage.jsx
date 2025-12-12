import React from "react";

export default function ProgressiveImage({ desktopSrc, mobileSrc, alt = "", className = "", width, height, sizes }) {
  const isClient = typeof window !== "undefined";
  const getPreferred = () => {
    if (!isClient) return desktopSrc || mobileSrc || "";
    return window.matchMedia("(min-width: 640px)").matches
      ? desktopSrc || mobileSrc || ""
      : mobileSrc || desktopSrc || "";
  };

  const [displayedSrc, setDisplayedSrc] = React.useState(getPreferred());
  const [imgLoaded, setImgLoaded] = React.useState(true);

  React.useEffect(() => {
    let mounted = true;
    const pref = getPreferred();
    if (!pref || pref === displayedSrc) return;

    // start preload
    setImgLoaded(false);
    const img = new Image();
    img.src = pref;
    img.onload = () => {
      if (!mounted) return;
      // swap to the newly loaded src; the <img> onLoad will set imgLoaded true and trigger fade-in
      setDisplayedSrc(pref);
    };
    img.onerror = () => {
      if (!mounted) return;
      // keep previous image if preload failed
      setImgLoaded(true);
    };

    // Also listen for viewport changes (e.g., resize between mobile/desktop)
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => {
      const next = getPreferred();
      if (next && next !== displayedSrc) {
        setImgLoaded(false);
        const img2 = new Image();
        img2.src = next;
        img2.onload = () => setDisplayedSrc(next);
        img2.onerror = () => setImgLoaded(true);
      }
    };
    mq.addEventListener?.("change", onChange);

    return () => {
      mounted = false;
      mq.removeEventListener?.("change", onChange);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desktopSrc, mobileSrc]);

  return (
    <img
      src={displayedSrc}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      loading="eager"
      onLoad={() => setImgLoaded(true)}
      className={`${className} transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
      sizes={sizes}
    />
  );
}
