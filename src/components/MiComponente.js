export const MiComponente = ( {img, titulo, content} ) => {
    return(
        <article className="articulo">
            <img className="articulo__img" src={img} alt=""/>
            <div className="article__content">
                <h2>{titulo}</h2>
                <p>{content}</p>
            </div>
        </article>
    )
}