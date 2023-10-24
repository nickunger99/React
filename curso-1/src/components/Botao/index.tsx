import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
  onClick?: () => void
}

function Botao({ type, children, onClick }: Props) {
  return (
    <button
    onClick={onClick}
    type={type ?? "button"} className={style.botao}>
      {children}
    </button>
  );
}

export default Botao;
