import Cite from 'citation-js';
import '@citation-js/plugin-bibtex';

import bib from '../content/docs/references.bib?raw';

const references = new Cite(bib);

export function getCitation(key) {
  const result = references.format('bibliography', {
    format: 'html',
    template: 'vancouver'
  });

  return result;
}


{
reference ? (
  <Fragment set:html={output} />
) : (
  <span style="color:red">
    Citation not found: {id}
  </span>
)
}
