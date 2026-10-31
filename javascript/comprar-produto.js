function comprar_produto (nome_produto, info_produto, preco_atual, preco_anterior) {

    const text = `Olá, pretendo adquirir este produto.\n\n*Produto:* ${nome_produto}\n\n*Detalhes:* ${info_produto}\n\n*Preço atual:* ${preco_atual}
    `;

    const link = `https://wa.me/244955075506?text=${encodeURIComponent(text)}`;

    window.open(link, '_blanck');

    //console.log(encodeURIComponent(text));
}