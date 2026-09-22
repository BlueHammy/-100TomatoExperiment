import { getPaidTomatoImagePath } from "@/lib/site";

type TomatoImageProps = {
  sessionId: string;
  caption?: string;
  size?: "hero" | "large" | "medium";
  alt?: string;
  priority?: boolean;
};

export function TomatoImage({
  sessionId,
  caption,
  size = "hero",
  alt = "One tomato — the product",
  priority = false,
}: TomatoImageProps) {
  const src = getPaidTomatoImagePath(sessionId);

  return (
    <figure className={`tomato-figure tomato-figure--${size}`}>
      <div className="tomato-frame">
        <img
          src={src}
          alt={alt}
          width={560}
          height={560}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
      {caption && <figcaption className="tomato-caption">{caption}</figcaption>}
    </figure>
  );
}
