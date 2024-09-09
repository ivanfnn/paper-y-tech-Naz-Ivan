const items = [
    {
        id: 1,
        nombre: "Cien años de soledad",
        precio: 19.99,
        stock: 12,
        categoria: "ficcion",
        image: "https://imagessl6.casadellibro.com/a/l/t0/36/9788439733836.jpg",
        detalle: "Una obra maestra del realismo mágico que narra la historia de la familia Buendía en el pueblo ficticio de Macondo."
    },
    {
        id: 2,
        nombre: "El amor en los tiempos del cólera",
        precio: 15.99,
        stock: 8,
        categoria: "ficcion",
        image: "https://edicioneshispanicas.com/wp-content/uploads/9789585581432.jpg",
        detalle: "Una novela sobre un amor eterno que supera las adversidades y las pruebas del tiempo, escrita por Gabriel García Márquez."
    },
    {
        id: 3,
        nombre: "Los juegos del hambre",
        precio: 12.99,
        stock: 20,
        categoria: "ficcion",
        image: "https://1.bp.blogspot.com/-OmmVi8SmhN8/TzQ0wJrKmAI/AAAAAAAADvw/OGy_2yfuqiM/s1600/nueva+portada+los+juegos+del+hambre.JPG",
        detalle: "Un thriller distópico que sigue a Katniss Everdeen en un futuro donde jóvenes son forzados a luchar hasta la muerte en un reality show brutal."
    },
    {
        id: 4,
        nombre: "1984",
        precio: 14.99,
        stock: 15,
        categoria: "ficcion",
        image: "https://4.bp.blogspot.com/-z7Vcrt1-9wI/VeMsp_mTtAI/AAAAAAAAEzc/mCf9J5GKQt4/s1600/1984_poster.jpg",
        detalle: "Una novela clásica de George Orwell que explora una sociedad totalitaria y opresiva, y la lucha por la verdad y la libertad."
    },
    {
        id: 5,
        nombre: "Sapiens: De animales a dioses",
        precio: 22.50,
        stock: 10,
        categoria: "no-ficcion",
        image: "https://www.libros-mas-vendidos.com/wp-content/uploads/2016/10/P-sapiens.jpg",
        detalle: "Un análisis de la historia de la humanidad desde los primeros Homo sapiens hasta la era moderna, por Yuval Noah Harari."
    },
    {
        id: 6,
        nombre: "Educated",
        precio: 18.00,
        stock: 6,
        categoria: "no-ficcion",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaaojJLoVo8QORMcDGjVVDVLIiRyDeK34eJOJLaa78w_Bx6z77-4Un1czpcp4yH1kJ5OEuiAsLx6BZq1QhXHl6rfJXQc3ujFCGmO5zNOKAtliHE27olN0_K4zSGxwJu24AHiRXvUp6jmpbh6EM37KNO7RuvzYSNKpINpkWQ9-_xF-UsZJZKmER38zm/s2560/educated.jpg",
        detalle: "Una autobiografía de Tara Westover que narra su lucha por escapar de una vida de aislamiento y educarse a sí misma."
    },
    {
        id: 7,
        nombre: "Homo Deus",
        precio: 21.99,
        stock: 7,
        categoria: "no-ficcion",
        image: "https://www.universitaria.cl/wp-content/uploads/portadas/9569545364c.jpg",
        detalle: "Un análisis de las posibles direcciones futuras para la humanidad, abordando temas como la inteligencia artificial y la inmortalidad."
    },
    {
        id: 8,
        nombre: "El origen de las especies",
        precio: 16.50,
        stock: 14,
        categoria: "no-ficcion",
        image: "https://www.cienciamx.com/images/aic/portada_el-origen-de-las-especies_charles-darwin_201701172011.jpg",
        detalle: "El seminal trabajo de Charles Darwin sobre la teoría de la evolución por selección natural."
    },
    {
        id: 9,
        nombre: "Dune",
        precio: 17.99,
        stock: 11,
        categoria: "ciencia-ficcion",
        image: "https://i.pinimg.com/originals/81/17/2a/81172af9e929e311ed909a0ac5fdd9dc.jpg",
        detalle: "Una épica de ciencia ficción que sigue a Paul Atreides en un desierto planeta lleno de intriga política y ecológica."
    },
    {
        id: 10,
        nombre: "Neuromancer",
        precio: 13.50,
        stock: 9,
        categoria: "ciencia-ficcion",
        image: "https://www.tebeosfera.com/T3content/img/T3_muestras/T3_series/2/j/m_neuromante_1984_gibson_52072j.jpg",
        detalle: "Una novela pionera en el género ciberpunk, que sigue las andanzas de un hacker en un futuro distópico y tecnológico."
    },
    {
        id: 11,
        nombre: "Foundation",
        precio: 18.75,
        stock: 10,
        categoria: "ciencia-ficcion",
        image: "https://strangerthansf.com/scans/asimov-foundation.jpg",
        detalle: "La primera novela de la famosa serie de Isaac Asimov, que explora la caída y el renacimiento de un imperio galáctico."
    },
    {
        id: 12,
        nombre: "Snow Crash",
        precio: 14.00,
        stock: 13,
        categoria: "ciencia-ficcion",
        image: "https://images.cdn3.buscalibre.com/fit-in/360x360/7b/1b/7b1b3496021d3182ce6920be7bcc7ae3.jpg",
        detalle: "Una novela ciberpunk que sigue a un repartidor y hacker en un futuro donde la realidad virtual juega un papel crucial."
    },
    {
        id: 13,
        nombre: "Steve Jobs",
        precio: 23.00,
        stock: 8,
        categoria: "biografias",
        image: "https://cdn.agapea.com//Ediciones-Paidos-Iberica/YO-STEVE-JOBS-9788449326301--i6n5482863.jpg",
        detalle: "La biografía autorizada de Steve Jobs, escrita por Walter Isaacson, que detalla su vida y sus contribuciones a la tecnología."
    },
    {
        id: 14,
        nombre: "El diario de Ana Frank",
        precio: 17.00,
        stock: 12,
        categoria: "biografias",
        image: "https://sbslibreria.vteximg.com.br/arquivos/ids/215579-1000-1000/9789878354194.jpg?v=637358732630270000",
        detalle: "El conmovedor diario de una joven judía que se escondió de los nazis durante la Segunda Guerra Mundial en Ámsterdam."
    },
    {
        id: 15,
        nombre: "Long Walk to Freedom",
        precio: 20.99,
        stock: 6,
        categoria: "biografias",
        image: "https://www.hachette.com.au/content/books/9781405530743.jpg",
        detalle: "Las memorias de Nelson Mandela que narran su viaje desde la lucha contra el apartheid hasta su presidencia en Sudáfrica."
    },
    {
        id: 16,
        nombre: "Becoming",
        precio: 25.00,
        stock: 7,
        categoria: "biografias",
        image: "https://eldiariony.com/wp-content/uploads/sites/2/2018/05/penguin-random-house.jpeg?quality=80&strip=all&w=720",
        detalle: "La autobiografía de Michelle Obama que ofrece una visión personal sobre su vida, su familia y su tiempo como Primera Dama."
    },
    {
        id: 17,
        nombre: "Matar a un ruiseñor",
        precio: 16.99,
        stock: 15,
        categoria: "ficcion",
        image: "https://imagessl5.casadellibro.com/a/l/t7/55/9788491392255.jpg",
        detalle: "Una novela clásica de Harper Lee que aborda temas de racismo y justicia a través de los ojos de una joven en el sur de Estados Unidos."
    },
    {
        id: 18,
        nombre: "El gran Gatsby",
        precio: 14.50,
        stock: 9,
        categoria: "ficcion",
        image: "https://mestasediciones.com/wp-content/uploads/2020/06/C6-El-Gran-Gatsby.jpg",
        detalle: "Una obra de F. Scott Fitzgerald que explora el lujo, el amor y la decadencia en el América de los años 20."
    },
    {
        id: 19,
        nombre: "Brave New World",
        precio: 19.75,
        stock: 11,
        categoria: "ciencia-ficcion",
        image: "https://prodimage.images-bn.com/pimages/9780060776091_p0_v1_s1200x630.jpg",
        detalle: "Una novela de Aldous Huxley que presenta una sociedad distópica donde la felicidad es manipulada a través de la tecnología y la ingeniería social."
    },
    {
        id: 20,
        nombre: "El hombre en busca de sentido",
        precio: 15.50,
        stock: 5,
        categoria: "no-ficcion",
        image: "https://www.bohindra.com/static/media/img/portadas/9788425432026.jpg",
        detalle: "Una reflexión sobre la vida y el sufrimiento basada en la experiencia del autor, Viktor Frankl, en campos de concentración nazis."
    }
]



export const getBooks = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(items)            
        }, 2000);
    })
}

export const getBookById = (id) =>{
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === parseInt (id,10)))            
        }, 3000);
    })
}


