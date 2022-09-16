import SocialBar from "./SocialBar";
const Footer = () => {
    return (
        <section className="footer" >
            <SocialBar></SocialBar>
            <main className="rights">
                <p>&copy; All rights reserved.</p>
                <p>Developed by: <span> Ahmed Belloula</span></p>
                <p>Designed by: <a href="https://www.styleshout.com/">styleshout</a></p>
            </main>
        </section>
    );
}
 
export default Footer;