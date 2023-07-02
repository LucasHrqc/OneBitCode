class Products {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percentage) {
    const discount = (Number(percentage) * this.price) / 100;
    console.log(`O desconto foi de: R$ ${discount.toFixed(2)}`);
    console.log(`Preço final: R$${(this.price - discount).toFixed(2)}`);
    return discount;
  }
}

const product = new Products("Papel", "Papel de folha A4", 10);

const discount = product.calculateDiscount("10");
