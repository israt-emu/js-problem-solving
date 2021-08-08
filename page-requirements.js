function pageRequirements(book1Quantity, book2Quantity, book3Quantity){
    const pageLRequirementsPerBook1 = 100;
    const pageLRequirementsPerBook2 = 200;
    const pageLRequirementsPerBook3 = 300;
    let totalPageForRequiredBook1 = book1Quantity * pageLRequirementsPerBook1;
    console.log("Total", totalPageForRequiredBook1, "page required for", book1Quantity, "book1's");
    let totalPageForRequiredBook2 = book2Quantity * pageLRequirementsPerBook2;
    console.log("Total", totalPageForRequiredBook2, "page required for", book2Quantity, "book2's");
    let totalPageForRequiredBook3 = book3Quantity * pageLRequirementsPerBook3;
    console.log("Total", totalPageForRequiredBook3, "page required for", book3Quantity, "book3's");

}
const book1Quantity = 140;
const book2Quantity = 40;
const book3Quantity = 80;
pageRequirements(book1Quantity, book2Quantity,book3Quantity);
