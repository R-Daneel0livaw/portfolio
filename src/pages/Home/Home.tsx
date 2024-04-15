import PageHeader from "../../components/PageHeader/PageHeader";
import SignatureWithButton from "../../components/SignatureWithButton/SignatureWithButton";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.information}>
        <PageHeader
          title="Eric Hine"
          description={
            <p>
              I'm a Dedicated{" "}
              <span className={styles.highlight}>Full-Stack Developer</span>
            </p>
          }
        />
        <div
          className={[styles.homeContentContainer, styles.introduction].join(
            " "
          )}
        >
          <p>
            Welcome to the gateway of my professional narrative! With over a
            decade of dedicated experience as a Full-Stack Developer, I bring an
            unwavering passion for transforming ideas into seamless digital
            experiences. This platform is not just a portfolio; it's a living
            testament to my journey—a dynamic canvas that illustrates the
            evolution of my skills and the diverse projects that have fueled my
            enthusiasm.
          </p>
          <p>
            Beyond the lines of code, this website delves into the intersection
            of my professional expertise and personal interests. From innovative
            web applications to explorations of my hobbies, I invite you to
            navigate through this virtual manifestation of my multifaceted
            identity. Join me in discovering the synergy between my technical
            prowess and the rich tapestry of experiences that define my
            professional and personal pursuits.
          </p>
        </div>
        <SignatureWithButton buttonText="Hire Me" includeSignature={true} enabled={true}/>
      </div>
    </section>
  );
}
