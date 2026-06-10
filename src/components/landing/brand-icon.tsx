import { GiSpades } from "react-icons/gi";

type BrandIconProps = {
  className?: string;
};

export function BrandIcon({ className }: BrandIconProps) {
  return <GiSpades className={className} aria-hidden="true" />;
}
