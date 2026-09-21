import { getTomatoImagePath } from "@/lib/site";

type TomatoImageProps = {
  caption?: string;
  size?: "hero" | "large" | "medium";
  alt?: string;
  priority?: boolean;
};

export function TomatoImage({
  caption,
  size = "hero",
  alt = "One tomato — the product",
  priority = false,
}: TomatoImageProps) {
  const src = getTomatoImagePath();

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
