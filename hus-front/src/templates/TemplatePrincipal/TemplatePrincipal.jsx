import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import Main from "./../Main/Main"

export default function TemplatePrincipal({ children }) {
  return (
    <>
      <Header />
        <Main>
        {children}
        </Main>
      <Footer />
    </>
  );
}
