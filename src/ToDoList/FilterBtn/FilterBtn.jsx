import React from 'react';

export default function FilterBtn({filterBtn}) {
    const bataBtn = [
        { name: "vse", label: "Все сотрудники", id: 1 },
        { name: "povesheniya", label: "На повышение", id: 2 },
        { name: "zar_bol_1000", label: "З/П Больше 1000$", id: 3 }
    ];

    const buttons = bataBtn.map((elemen) => {
        return (
            <button  key={elemen.id} onClick={()=>filterBtn(elemen.name)} >{elemen.label}</button>
        );
    });

    return (
        <div className="filter-btns">
            {buttons}
        </div>
    );
}
