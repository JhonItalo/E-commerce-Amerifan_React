import React, { useRef, useContext } from "react";
import { FilterProviderContext, FiltercontextType } from "../../contexts/FilterContext";

type props = {
     state: string;
     nameLabel: string;
     id: string;
};
const ItemSubFilter = ({ state, nameLabel, id }: props) => {
     const { filterAtual, setFilterAtual } = useContext<FiltercontextType>(FilterProviderContext);
     const inputRefCheck = useRef<HTMLInputElement | null>(null);

     const copyFilter = Object.assign({}, filterAtual);

     const removeFilter = () => {
          if (state === "type") {
               copyFilter.type = `${filterAtual.type.replace(id, "")}`;
          } else if (state === "color") {
               copyFilter.color = `${filterAtual.color.replace(id, "")}`;
          }

          inputRefCheck.current ? inputRefCheck.current.removeAttribute("checked") : "";
          if (copyFilter.color === "" && copyFilter.type === "") {
               return { option: "all", type: "", color: "" };
          } else {
               return copyFilter;
          }
     };

     const addFilter = () => {
          copyFilter.option = "activeFilter";
          if (state === "type") {
               copyFilter.type = filterAtual.type + id;
          } else if (state === "color") {
               copyFilter.color = filterAtual.color + id;
          }
          inputRefCheck.current ? inputRefCheck.current.setAttribute("checked", "true") : "";
          return copyFilter;
     };
     const controlFilter = () => {
          if (state === "type") {
               if (filterAtual.type.includes(id)) {
                    return removeFilter();
               } else {
                    return addFilter();
               }
          } else if (state === "color") {
               if (filterAtual.color.includes(id)) {
                    return removeFilter();
               } else {
                    return addFilter();
               }
          }
          return copyFilter;
     };

     const handleCheckFilter = (id: string, e: React.SyntheticEvent) => {
          e.preventDefault();
          setFilterAtual(controlFilter());
     };
     return (
          <li className="itemSub">
               <label
                    onClick={(e) => {
                         handleCheckFilter(id, e);
                    }}
               >
                    {nameLabel}:
                    <input type="checkbox" ref={inputRefCheck} />
               </label>
          </li>
     );
};

export default ItemSubFilter;
