import {
  About,
  Contact,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
} from "./sections";

export const App = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Header />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};
export default App;
