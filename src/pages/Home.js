import React from "react";

import Table from "../Home componets/Table";
import search from "../IMG/search.svg";
import Filters from "../Home componets/Filters";
import Carousel2 from "../Home componets/Carousel2";
import NavbarCustom from "../Home componets/Navbar_custom";
import data from "../data";

export default function Home() {
  const info = data.map((item) => {
    return (
      <>
        <Table key={item.id} {...item} />
      </>
    );
  });

  return (
    <div className="home">
      <NavbarCustom />
      <Carousel2 />
      <Filters />
      <div className="search">
        <form className="search-bar">
          <input type="text" placeholder="Search here" />
        </form>
        <img src={search} alt="" />
      </div>
      <div className="entire-table">
        <table className="table table-striped">
          <thead className="table-head">
            <tr>
              <th className="sr">Sr.NO</th>
              <th className="probSt">Problem statement</th>
              <th className="category">Category</th>
              <th className="domain">Domain</th>
              <th className="det">Deatils</th>
            </tr>
            </thead>
        </table>
        <div>{info}</div>
      </div>
    </div>
  );
}
