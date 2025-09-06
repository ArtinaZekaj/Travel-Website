import "../styles/tourCategories.css";
import { Link } from "react-router-dom";


const categories = [
    {
        title: "Adventure Tours",
        slug: "adventure-tours",
        img: "https://www.peakadventuretour.com/blog/wp-content/uploads/2018/06/Bungee-Jumping-in-India.jpg",
    },
    {
        title: "Cultural Tours",
        slug: "cultural-tours",
        img: "https://www.kosovo-vacations.com/ressourcen/images/folk-costumes-albanian.jpg",
    },
    {
        title: "Beach Getaways",
        slug: "beach-getaways",
        img: "https://i.pinimg.com/736x/1d/f9/da/1df9dadcb030bd9306538aa36a2c23a4.jpg",
    },
    {
        title: "Luxury Escapes",
        slug: "luxury-escapes",
        img: "https://cdn.luxurytravelmag.com.au/wp-content/uploads/2024/08/08120051/Luxury-Escapes.jpg",
    },
    {
        title: "Family Vacations",
        slug: "family-vacations",
        img: "https://www.tripsavvy.com/thmb/aAAxdP94OvytY3ptQ_mbUAKTXHM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FamilySkiTrip_GettyImages-5925ec6a3df78cbe7e70f24f.jpg",
    },
];

export default function TourCategories() {
    return (
        <section className="categories-section position-relative" id="tour">

            <div className="container">
                <div className="text-center mb-4">
                    <div className="subtitle text-info">Wonderful place for You</div>
                    <h2 className="tc-title">Tour Categories</h2>
                </div>

                <div className="tc-row tc-stagger">
                    {categories.map((c) => (
                        <Link
                            key={c.slug}
                            to={`/categories/${c.slug}`}
                            className="tc-item text-decoration-none"
                        >
                            <div className="tc-imgWrap">
                                <img className="tc-img" src={c.img} alt={c.title} />
                            </div>
                            <div className="tc-caption">{c.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
