import '../css/components.css';

export const saludar = (nombre) => {
    console.log('creando etiquetas');



    const h1 = document.createElement('h1');
    h1.innerText = `hola amigo nuevo, ${nombre}`;
    document.body.append(h1)

}