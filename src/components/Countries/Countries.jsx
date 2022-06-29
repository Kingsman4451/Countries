import React, { useContext } from "react";
import "./Countries.css";
import { NavLink, useParams } from "react-router-dom";
import { MDBSpinner } from 'mdb-react-ui-kit';
import context from "../../context";
import Pagi from "../Pagi/Pagi";

const Countries = () => {
  const { values } = useContext(context.context);
  

  if (values.load) {
    return (
      <div className="text-center pt-5 mt-5">
        <MDBSpinner role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>
    );
  }

  return (
    <>
      <div className="countries pt-5 mx-auto">
        <table className="countries-table table table-striped table-hover  mt-5 border">
          <tbody className="">
            {values.currentData.map((item, i) => {
              return (
                <tr
                  key={item.numericCode}
                  onClick={(e) =>{return (values.setCountry(item.name))}}
                >
                  <NavLink
                    className="nav-link text-dark d-block"
                    to={`/name/${item.name}`}
                  >
                    <td className="col-1 fw-bold text-primary">
                      {`${i +
                        1 +
                        values.page * values.itemsPerPage -
                        values.itemsPerPage}.`}
                    </td>
                    <td className="col-11 fw-bold">{item.name}</td>
                  </NavLink>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagi/>
      </div>
    </>
  );
};

export default Countries;
