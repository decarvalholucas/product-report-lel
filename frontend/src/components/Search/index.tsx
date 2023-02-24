"use client";

import style from "./style.module.scss";

import { SearchSvg } from "@/components/svg/SearchSvg";
import { useState } from "react";

import debounce from "@/lib/debounce";

import vtexApiSearch from "@/api/vtexApiSearch";

export const Search = () => {
  const [value, setValue] = useState("");

  async function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    const product = await vtexApiSearch.get(
      `/vtex/search/productFullText?fullText=${event.target.value}`
    );
    console.log(product.data.product);
  }

  const handleInputChangeDebounced = debounce(onInputChange, 1000);

  vtexApiSearch;

  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="buscar produto..."
        onChange={handleInputChangeDebounced}
      ></input>
      <span className={style.searchIcon}>
        <SearchSvg width={32} height={32} />
      </span>
    </div>
  );
};
