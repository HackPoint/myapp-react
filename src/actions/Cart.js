export const addToCart = (item) => {
    console.log('adding item:', item);
    return {
        type: 'add',
        item
    };
}

export const removeItem = (item) => {
    console.log('removing item', item);

    return {
        type: 'remove',
        item
    }
}