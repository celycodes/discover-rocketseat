// criando e add elementos
// createElement (criando)
const div = document.createElement('div');
div.innerText = 'Hello World!!';
// Add na página
// append  (depois) | prepend (antes) | insertBefore (entre dois elementos)
const body = document.querySelector('body');
const script = body.querySelector('script')
body.insertBefore(div, script)