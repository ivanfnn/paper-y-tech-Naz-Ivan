import React from 'react'
import { Item } from './Item'


export const ItemList = ({ items }) => {
    return (
      <>
        {items.map((book) => {
          return <Item key={book.id} Book={book} />;
        })}
      </>
    );
  };

  