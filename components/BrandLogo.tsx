import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  size: number;
};

/** The approved master mark, prepared at a web-appropriate resolution. */
export default function BrandLogo({ className, priority = false, size }: BrandLogoProps) {
  return (
    <Image
      className={className}
      src="/assets/brand/visepanda-master-logo.png"
      alt="VisePanda panda guide logo"
      width={size}
      height={size}
      priority={priority}
      sizes={`${size}px`}
    />
  );
}
