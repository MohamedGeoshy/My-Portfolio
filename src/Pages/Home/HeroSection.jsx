export default function HeroSection() {
  // import ah from{./CV.pdf}
  const downloadCv = () => {
    const pdfUrl = "CV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CV.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Mohamed Saied</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>

          <p className="hero--section-description">
            Seeking a Frontend Developer positionin a stable company
            <br /> where i can use myskills to benfit the company
          </p>
        </div>
        <button
          className="btn btn-primary"
          id="downloadButton"
          onClick={downloadCv}
        >
          {" "}
          Download CV
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
