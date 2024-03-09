import { Button } from "@nextui-org/react";

export default function PrincipalButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className="rounded-full border-1 bg-gallery border-tangaroa hover:border-purple-heart hover:bg-purple-heart  hover:text-gallery text-base font-semibold"
    >
      {children}
    </Button>
  );
}
