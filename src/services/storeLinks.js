// Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key);

  let linksSaves = JSON.parse(myLinks) || [];

  return linksSaves;
}

// Salvar um link no localStorage
export async function saveLink(key, newLink) {
  let linksStored = await getLinksSave(key);

  // Se ja tiver link salvo com algum ID, não deixar duplicar
  const hasLink = linksStored.some((link) => link.id === newLink.id);

  if (hasLink) {
    console.log("Esse link já existe na sua lista!");
    return;
  }

  // Adicionar esse novo link na lista
  linksStored.push(newLink);
  await localStorage.setItem(key, JSON.stringify(linksStored));
  console.log("Link salvo com sucesso!");
}

// Deletar algum link salvo
