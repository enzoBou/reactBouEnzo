import React from "react";
import { Item } from "../item/Item"
import "./ItemList.scss"

export const ItemList = ({ items }) => {
    return (
        <div className="cardContainer">
            {items.map((element) => {
                return <Item key={element.id} element={element} />
            })}
        </div>
    )
}