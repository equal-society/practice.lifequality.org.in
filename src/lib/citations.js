const citations = [];

export function registerCitation(id) {
  if (!citations.includes(id)) {
    citations.push(id);
  }

  return citations.indexOf(id) + 1;
}

export function getCitations() {
  return citations;
}
