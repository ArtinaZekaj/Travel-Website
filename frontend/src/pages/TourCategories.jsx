import "../styles/home.css";

const categories = [
    {
        title: "Adventure Tours",
        img: "https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg",
    },
    {
        title: "Cultural Tours",
        img: "https://www.kosovo-vacations.com/ressourcen/images/folk-costumes-albanian.jpg",
    },
    {
        title: "Beach Getaways",
        img: "https://i.pinimg.com/736x/1d/f9/da/1df9dadcb030bd9306538aa36a2c23a4.jpg",
    },
    {
        title: "Luxury Escapes",
        img: "https://cdn.luxurytravelmag.com.au/wp-content/uploads/2024/08/08120051/Luxury-Escapes.jpg",
    },
    {
        title: "Family Vacations",
        img: "https://www.tripsavvy.com/thmb/aAAxdP94OvytY3ptQ_mbUAKTXHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FamilySkiTrip_GettyImages-5925ec6a3df78cbe7e70f24f.jpg",
    },
];

export default function TourCategories() {
    return (
        <section className="categories-section position-relative" id="tour">
            {/* floating decor */}
            {/* <img
                className="decor decor-camera d-none d-md-block"
                src="https://cdn-icons-png.flaticon.com/512/685/685655.png"
                alt=""
            />
            <img
                className="decor decor-ticket d-none d-md-block"
                src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
                alt=""
            />
            <img
                className="decor decor-bottle d-none d-lg-block"
                src="https://cdn-icons-png.flaticon.com/512/3076/3076403.png"
                alt=""
            />
            <img
                className="decor decor-palm d-none d-lg-block"
                src="https://cdn-icons-png.flaticon.com/512/3038/3038074.png"
                alt=""
            /> */}

            <div className="container">
                <div className="text-center mb-4">
                    <div className="subtitle text-info">Wonderful place for You</div>
                    <h2 className="tc-title">Tour Categories</h2>
                </div>

                {/* 5 centered square cards */}
                <div className="tc-row tc-stagger">
                    {categories.map((c) => (
                        <div className="tc-item" key={c.title}>
                            <div className="tc-imgWrap">
                                <img className="tc-img" src={c.img} alt={c.title} />
                            </div>
                            <div className="tc-caption">{c.title}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
