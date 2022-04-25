import './styles.css'
export const AnimatedShareBtn = () => {
    return (
        <button className="animated-share-btn">
            <span className="animated-share-btn-text">Share</span>
            <i id='animated-share-btn-icon' className="fas fa-share-alt"></i>
            <div className="animated-share-btn-socials">
                <a href="/"><i className="fab fa-facebook"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-instagram"></i></a>
            </div>
        </button>
    )
}