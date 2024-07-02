import './Posts.css';

function Posts() {
    const title = "Postagem do dia";
    const linkImg = "https://picsum.photos/200";

    return(
        <section className="postagem-corpo">
            <h2 className>{title.toUpperCase()}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsa?</p>
            <img src={linkImg} alt="Imagem da mensagem" />
        </section>
    );

}
export default Posts;