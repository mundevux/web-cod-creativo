import { Button } from "@nextui-org/react";

export default function PrincipalButton({ children, ...props }) {
  return (
    <Button
      {...props}
      className="rounded-full bg-purple-heart text-gallery text-base font-semibold"
    >
      {children}
    </Button>
  );
}
