"use client";

import { useState } from "react";
import style from "./style.module.scss";

interface PaginationProps {
  totalPages: number;
  pagesToShow: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  // inicia a página atual como 1
  const { pagesToShow, totalPages, currentPage, setCurrentPage } = props;

  // calcula os números de página que devem ser exibidos com base na página atual
  let startPage = currentPage - Math.floor(pagesToShow / 2);
  startPage = Math.max(1, startPage);
  let endPage = startPage + pagesToShow - 1;
  endPage = Math.min(totalPages, endPage);

  // cria uma matriz de números de página a serem exibidos
  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className={style.pagination}>
      {/*currentPage > 1 && (
        <a
          href="#"
          className="page-item"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <li>Anterior</li>
        </a>
      )*/}

      {pageNumbers.map((number) => (
        <a
          href="#"
          className={`${number === currentPage ? style.active : ""}`}
          onClick={() => setCurrentPage(number)}
          key={number}
        >
          <li>{number}</li>
        </a>
      ))}

      {/*currentPage < totalPages && (
        <a
          href="#"
          className="page-item"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <li>Próximo</li>
        </a>
      )*/}
    </ul>
  );
}
