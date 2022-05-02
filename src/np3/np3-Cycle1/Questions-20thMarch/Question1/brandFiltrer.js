import "./brandFilter.css";
import { useState } from "react";

// brands data structure
const brands1 = [
  { id: "0a", brandName: "puma" },
  { id: "0b", brandName: "adiddas" },
  { id: "0c", brandName: "wildcraft" },
  { id: "0d", brandName: "levis" },
  { id: "0e", brandName: "celio" }
];

export default function BrandFilter() {
  const [brands, setBrands] = useState(brands1);
  // const [userInput, setUserInput] = useState("");

  const searchBrands = (value) => {
    const userBrand = brands1.filter((brand) =>
      brand.brandName.includes(value)
    );
    setBrands(userBrand);
  };

  return (
    <>
      <input type="text" onChange={(e) => searchBrands(e.target.value)}></input>
      <ul>
        {brands.map((brand) => {
          return (
            <div key={brand.id}>
              <li>{brand.brandName}</li>
            </div>
          );
        })}
      </ul>
    </>
  );
}
