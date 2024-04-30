import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductDescription from "./ProductDescription";
import ProductCharacteristic from "./ProductCharacteristic";

function TabMenu({product}) {
  const [params, setPrams] = useSearchParams()
  let isActiveTab = params.get('tab') ? params.get('tab') : 'description';

  function handleTab(tabName) {
    setPrams((prev) => {
      prev.set('tab', tabName)
      return prev
    })
  }


  const list = [
    {
      id: 1,
      name: 'Description',
      tabName: 'description',
    },
    {
      id: 2,
      name: 'Characteristic',
      tabName: 'characteristic',
    },
  ]

  let tabContent = {
    'description': <ProductDescription product={product}/>,
    'characteristic': <ProductCharacteristic product={product} />,
  }


  return (
    <section className="tab-menu">
      <div className="container">
        <div className="tab-menu__wrapper">
          <div className="tab-menu__top">
            {
              list.map(item => (
                <button
                  key={item.id}
                  className={isActiveTab === item.tabName ? "tab-menu__link active" : "tab-menu__link"}
                  onClick={() => handleTab(item.tabName)}
                >
                  {item.name}
                </button>
              ))
            }
          </div>
          <div className="tab-menu__content">
            {tabContent[isActiveTab]}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TabMenu;
