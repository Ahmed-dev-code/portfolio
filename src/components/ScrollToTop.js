const ScrollToTop = () => {

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            document.querySelector(".scroll-btn").style.opacity = "1";
            document.querySelector(".scroll-btn").style.visibility = "visible";
            
        } else {
            document.querySelector(".scroll-btn").style.opacity = "0";
            document.querySelector(".scroll-btn").style.visibility = "hidden";
        }
    } );

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return ( 
        <button className="scroll-btn" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
        </button>
     );
}
 
export default ScrollToTop;