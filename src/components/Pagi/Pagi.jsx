import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import context from "../../context";

const Pagi = () => {
  const { values } = useContext(context.context);

  const pageNum = [];

  for (
    let i = 1;
    i <= Math.ceil(values.data.length / values.itemsPerPage);
    i++
  ) {
    pageNum.push(i);
  }

  return (
    <>
      <nav className="mx-auto w-100">
          <ul className="pagination pagination-sm w-100 mx-auto d-flex justify-content-center">
            {pageNum.map((item)=>{
              return <li className="page-item" key={item} onClick={(e)=> values.setPage(item)}>
                <NavLink className="page-link" to="">
                  {item}
                </NavLink>
            </li>
            })}
          </ul>
        </nav>
    </>
  );
};

export default Pagi;