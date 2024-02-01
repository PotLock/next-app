"use client";
import Header from "@/components/Header";
import WalletProvider from "@/contexts/WalletContext";
import { NextUIProvider } from "@nextui-org/react";
import * as React from "react";
import { useDisclosure } from "@nextui-org/react";
import DonateSuccessModal from "@/components/Modal/DonateSuccessModal";
import { useRouter, useSearchParams } from "next/navigation";

export interface ILayoutProvidesProps {
  children: React.ReactNode;
}

export const CartContext = React.createContext<any>(null);

export default function LayoutProvides({ children }: ILayoutProvidesProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const projectsCart: any =
    typeof window !== "undefined" && localStorage?.getItem("projects_in_cart")
      ? JSON?.parse(localStorage?.getItem("projects_in_cart") ?? "")
      : [];

  const [cart, setCart] = React.useState<any[]>(projectsCart);
  const updateCart = (data: any) => {
    if (!cart.length) {
      setCart([...cart, data]);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "projects_in_cart",
          JSON.stringify([...cart, data]),
        );
      }
    } else {
      if (!cart.find((item) => item.id === data.id)) {
        setCart([...cart, data]);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "projects_in_cart",
            JSON.stringify([...cart, data]),
          );
        }
      }
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseModal = (path: string, donateAgain: boolean) => {
    onClose();
    router.push(path);
    // if (donateAgain) {
    // }
  };

  React.useEffect(() => {
    if (searchParams && searchParams?.get("transactionHashes")) {
      onOpen();
    }
  }, [onOpen, searchParams]);

  return (
    <NextUIProvider>
      <WalletProvider>
        <CartContext.Provider value={{ cart, updateCart }}>
          <DonateSuccessModal
            isOpen={isOpen}
            onClose={(path: string, donateAgain: boolean) => {
              handleCloseModal(path, donateAgain);
            }}
          />
          <Header />
          {children}
        </CartContext.Provider>
      </WalletProvider>
    </NextUIProvider>
  );
}
