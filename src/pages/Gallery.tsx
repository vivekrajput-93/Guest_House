import grid1 from "../assets/out.jpg";
import grid2 from "../assets/ayodhya.webp";
import grid3 from "../assets/large.jpg";
import grid4 from "../assets/palash.webp";
import grid5 from "../assets/small.jpg";
import grid6 from "../assets/baranti.webp";
import grid7 from "../assets/recep.jpg";
import grid8 from "../assets/flower.jpg";
import grid9 from "../assets/room1.jpg";
import grid0 from "../assets/mithonDam.webp";


const Gallery = () => {
  return (
    <section className="galley-container max-[768px]:mb-[650px]" id="gallery">
      <div className="gallery-heading flex gap-3 items-center font-medium tracking-widest uppercase">
        Gallery <div className="w-[60px] h-[0.10rem] bg-pinky"></div></div>
        <br />
        <div className="pic-container mt-4">
            <div className="box box-1">
                <img src={grid1} alt="gallery-image" />
            </div>
            <div className="box box-2">
                <img src={grid2} alt="gallery-image" />
            </div>
            <div className="box box-3">
                <img src={grid3} alt="gallery-image" />
            </div>
            <div className="box box-4">
                <img src={grid4} alt="gallery-image" />
            </div>
            <div className="box box-5">
                <img src={grid5} alt="gallery-image" />
            </div>
            <div className="box box-6">
                <img src={grid6} alt="gallery-image" />
            </div>
            <div className="box box-7">
                <img src={grid7} alt="gallery-image"  />
            </div>
            <div className="box box-8">
                <img src={grid8} alt="gallery-image" />
            </div>
            <div className="box box-9">
                <img src={grid9} alt="gallery-image" />
            </div>
            <div className="box box-10">
                <img src={grid0} alt="gallery-image" />
            </div>
        </div>
      
    </section>
  );
};

export default Gallery;
