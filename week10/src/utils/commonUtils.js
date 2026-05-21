export const isPrice50orLess = (product) => {
    return product.price <= 50 ? "Less than or equal to 50" : "More than 50";
}