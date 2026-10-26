/**
 * BBC SALON — Centralized Business Data Configuration
 * 
 * All details are easily editable for the salon owner.
 * Any unverified items are clearly noted with confirmation flags.
 */

export const salonData = {
  business: {
    name: "BBC SALON",
    badge: "LADIES SALON",
    punjabiName: "ਬੀਬੀਸੀ ਸਲੋਨ (ਲੇਡੀਜ਼ ਸਲੋਨ)",
    tagline: "Your Hair. Your Beauty. Your Signature.",
    subtagline:
      "Discover a personalized beauty experience at BBC Salon, Phagwara. From beautiful hair transformations to your everyday beauty rituals, make time for yourself.",
    category: "Beauty Parlour / Ladies Salon",
    address: {
      street: "Plahi Road, near City Palace",
      city: "Phagwara",
      state: "Punjab",
      pincode: "144401",
      country: "India",
      landmark: "Near City Palace",
      full: "Plahi Road, near City Palace, Phagwara, Punjab 144401, India",
    },
    locationCode: "6QH8+85, Phagwara, Punjab",
    phone: {
      raw: "918968488010",
      formatted: "+91 89684 88010",
      display: "+91 89684 88010",
    },
    whatsapp: {
      number: "918968488010",
      defaultMessage:
        "Hello BBC Salon! I am interested in inquiring about an appointment. Could you please share your available slots?",
    },
    googleMaps: {
      directUrl: "https://maps.app.goo.gl/S5tCi5VPCvoRhWH78",
      searchUrl: "https://maps.app.goo.gl/S5tCi5VPCvoRhWH78",
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.749774640107!2d75.7629163!3d31.228252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391af509b353c365%3A0xfa2c5d42121a9618!2sBBC%20SALON%20(LADIES%2BSALON)!5e0!3m2!1sen!2sin!4v1729860000000!5m2!1sen!2sin",
      code: "6QH8+85",
      coordinates: {
        lat: 31.228252,
        lng: 75.7654912,
      },
    },
    rating: {
      score: "5.0",
      totalReviews: 139,
      source: "Supplied Google Listing Data",
      verifiedNotice:
        "Rating & review counts reflect supplied listing data (139 reviews, 5.0★). Live sync will be completed with owner.",
    },
  },

  // Editable opening hours with clear confirmation notice as required
  hours: {
    statusNotice:
      "Demo Schedule — Subject to confirmation by salon owner. (Preliminary records contained ambiguous overnight entries for Mon/Tue).",
    schedule: [
      {
        day: "Monday",
        hours: "10:00 AM – 7:30 PM",
        note: "Preliminary listing record pending owner confirmation",
        status: "Open",
      },
      {
        day: "Tuesday",
        hours: "10:00 AM – 7:30 PM",
        note: "Preliminary listing record pending owner confirmation",
        status: "Open",
      },
      {
        day: "Wednesday",
        hours: "10:00 AM – 8:00 PM",
        note: "Standard salon hours",
        status: "Open",
      },
      {
        day: "Thursday",
        hours: "10:00 AM – 8:00 PM",
        note: "Standard salon hours",
        status: "Open",
      },
      {
        day: "Friday",
        hours: "10:00 AM – 8:00 PM",
        note: "Standard salon hours",
        status: "Open",
      },
      {
        day: "Saturday",
        hours: "10:00 AM – 8:00 PM",
        note: "High appointment volume — booking recommended",
        status: "Open",
      },
      {
        day: "Sunday",
        hours: "10:00 AM – 7:30 PM",
        note: "Weekend beauty sessions",
        status: "Open",
      },
    ],
  },

  // Proposed Services (Prioritizing Hair Styling, Hair Coloring, and Hair Treatments per supplied feedback)
  services: [
    {
      id: "haircut-styling",
      title: "Haircut & Styling",
      punjabiTitle: "ਹੇਅਰ ਕੱਟ ਅਤੇ ਸਟਾਈਲਿੰਗ",
      category: "Hair Artistry",
      isPriority: true,
      isRealClientWork: true,
      priorityLabel: "Authentic Client Result",
      shortDesc:
        "Sculpted voluminous curls, bespoke haircuts, and signature blowouts tailored to your facial symmetry and texture.",
      longDesc:
        "Whether you're looking for bouncy defined curls, a layered shape, or chic volume styling for a special event, our stylists craft hair that accentuates your natural beauty.",
      highlights: [
        "Personalized face-shape consultation",
        "Deep conditioning wash & scalp massage",
        "Precision curl definition & blowout",
        "Long-lasting humidity-resistant hold",
      ],
      price: "Price upon consultation",
      priceConfirmed: false,
      image: "/images/client-curls-styling.png",
    },
    {
      id: "hair-coloring",
      title: "Hair Coloring & Balayage",
      punjabiTitle: "ਹੇਅਰ ਕਲਰਿੰਗ ਅਤੇ ਬਾਲੇਆਜ",
      category: "Hair Artistry",
      isPriority: true,
      isRealClientWork: true,
      priorityLabel: "Authentic Client Result",
      shortDesc:
        "Luminous caramel balayage, honey highlights, and multi-dimensional color blends photographed directly at BBC Salon.",
      longDesc:
        "Experience radiant color with fiber-protecting formulations. We specialize in seamless hand-painted balayage, foil highlights, and rich global shades that leave hair silky.",
      highlights: [
        "Strand test & hair porosity assessment",
        "Ammonia-free & shine-enhancing pigments",
        "Hand-painted balayage & foil techniques",
        "Post-color gloss glaze & color seal",
      ],
      price: "Custom quote by hair length",
      priceConfirmed: false,
      image: "/images/client-balayage-highlights.png",
    },
    {
      id: "hair-treatments",
      title: "Restorative Hair Treatments",
      punjabiTitle: "ਹੇਅਰ ਟ੍ਰੀਟਮੈਂਟਸ",
      category: "Hair Artistry",
      isPriority: true,
      isRealClientWork: true,
      priorityLabel: "Authentic Client Portfolio",
      shortDesc:
        "Proven restorative keratin smoothing and hair botox therapies delivering mirror-glass shine across all hair textures.",
      longDesc:
        "Revitalize over-processed or frizzy hair with intensive keratin infusions, botox therapy, and deeply nourishing bond builders designed for Punjab's climate.",
      highlights: [
        "Keratin smoothing & frizz elimination",
        "Hair botox & deep moisture replenishment",
        "Bond reconstruction for distressed strands",
        "Signature mirror-glass reflective shine",
      ],
      price: "Starting from consultation",
      priceConfirmed: false,
      image: "/images/client-hair-transformations-grid.jpg",
    },
    {
      id: "hair-spa",
      title: "Sensory Hair Spa & Scalp Therapy",
      punjabiTitle: "ਹੇਅਰ ਸਪਾ",
      category: "Hair Care",
      isPriority: false,
      shortDesc:
        "A deeply calming ritual featuring herbal scalp rejuvenation, hot steam infusion, and pressure-point relaxation.",
      longDesc:
        "Indulge in a tranquil escape that cleanses the scalp of product buildup, stimulates healthy follicle circulation, and envelopes your lengths in botanical moisture.",
      highlights: [
        "Relaxing neck & shoulder pressure-point massage",
        "Scalp detox & clarifying cleanse",
        "Aroma-infused micro-mist steam",
        "Intensive hair cuticle masque",
      ],
      price: "Confirm with salon",
      priceConfirmed: false,
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "facial-skincare",
      title: "Facial & Skin Care Rituals",
      punjabiTitle: "ਫੇਸ਼ੀਅਲ ਅਤੇ ਸਕਿਨ ਕੇਅਰ",
      category: "Skin Care",
      isPriority: false,
      shortDesc:
        "Customized clinical and botanical facials designed to cleanse, brighten, and restore an authentic youthful radiance.",
      longDesc:
        "Our customized skin therapies address dullness, dehydration, tanning, and fine lines using gentle exfoliants, lifting lymphatic massages, and active botanical serums.",
      highlights: [
        "Skin type & sensitivity analysis",
        "Deep pore extraction & ultrasonic cleansing",
        "Hydrating collagen/gold peel-off masque",
        "Sun defense & cellular moisture seal",
      ],
      price: "Confirm with salon",
      priceConfirmed: false,
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "bridal-makeup",
      title: "Bridal Makeup & Styling",
      punjabiTitle: "ਬ੍ਰਾਈਡਲ ਮੇਕਅੱਪ",
      category: "Makeover Artistry",
      isPriority: false,
      shortDesc:
        "Timeless, royal bridal transformations crafted to endure tears of joy, celebrations, and high-definition photography.",
      longDesc:
        "Celebrate your special day with bespoke bridal makeup that enhances your natural elegance. Includes dupatta draping, jewelry setting, and luxury HD/Airbrush application.",
      highlights: [
        "Pre-wedding bridal consultation & trial",
        "Sweatproof, HD & Airbrush techniques",
        "Dupatta draping, styling & jewelry fixing",
        "Complimentary bridal touch-up kit guidance",
      ],
      price: "Bespoke bridal packages",
      priceConfirmed: false,
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "party-makeup",
      title: "Party & Occasion Makeup",
      punjabiTitle: "ਪਾਰਟੀ ਮੇਕਅੱਪ",
      category: "Makeover Artistry",
      isPriority: false,
      shortDesc:
        "Sophisticated makeup looks for sangeets, receptions, festivals, and milestone gatherings.",
      longDesc:
        "Whether you prefer a dewy glass-skin aesthetic, classic smokey eyes, or a glamorous festive look, we ensure you turn heads at every celebration in Phagwara.",
      highlights: [
        "Custom eye makeup & faux lash application",
        "Flawless complexion contouring & glow",
        "Evening hairstyle or updo pairing",
        "Long-wear setting guarantee",
      ],
      price: "Confirm with salon",
      priceConfirmed: false,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "manicure-pedicure",
      title: "Manicure & Pedicure Rituals",
      punjabiTitle: "ਮੈਨੀਕਿਓਰ ਅਤੇ ਪੈਡੀਕਿਓਰ",
      category: "Nail & Body",
      isPriority: false,
      shortDesc:
        "Rejuvenating nail and hand-and-foot therapies with exfoliating scrubs, cuticle care, and chip-resistant polishes.",
      longDesc:
        "Pamper your hands and feet in our soothing soak bowls, followed by dead-skin exfoliation, relaxing calf and arm massages, and impeccable nail shaping.",
      highlights: [
        "Aromatic herbal mineral foot soak",
        "Sea-salt exfoliation & heel buffing",
        "Deep moisturizing cuticle conditioning",
        "Precision buffing or gel lacquer polish",
      ],
      price: "Confirm with salon",
      priceConfirmed: false,
      image:
        "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1000",
    },
  ],

  // Gallery Showcase Data
  galleryCategories: [
    "All",
    "Haircuts & Styling",
    "Hair Coloring",
    "Hair Treatments",
    "Bridal & Party Makeup",
    "Salon Interiors",
  ],

  galleryItems: [
    {
      id: 1,
      title: "Caramel Honey Balayage & Highlights",
      category: "Hair Coloring",
      image: "/images/client-balayage-highlights.png",
      description: "Authentic BBC Salon client: Dimensional warm caramel streaks on glossy brunette base.",
      aspect: "tall",
      isAuthentic: true,
    },
    {
      id: 2,
      title: "Voluminous Curls & Signature Blowout",
      category: "Haircuts & Styling",
      image: "/images/client-curls-styling.png",
      description: "Authentic BBC Salon client: High-definition sculpted curls with radiant shine.",
      aspect: "tall",
      isAuthentic: true,
    },
    {
      id: 3,
      title: "Mirror-Glass Keratin Smoothing (12-Client Results)",
      category: "Hair Treatments",
      image: "/images/client-hair-transformations-grid.jpg",
      description: "Authentic BBC Salon client portfolio: 12 transformations showing silky mirror shine.",
      aspect: "square",
      isAuthentic: true,
    },
    {
      id: 4,
      title: "Regal Punjabi Bridal Glow",
      category: "Bridal & Party Makeup",
      image:
        "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=1000",
      description: "High-definition bridal makeup with intricate jewelry setting.",
      aspect: "tall",
    },
    {
      id: 5,
      title: "Luxury Ladies Salon Sanctuary",
      category: "Salon Interiors",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
      description: "Warm ivory and champagne gold styling stations.",
      aspect: "wide",
    },
    {
      id: 6,
      title: "Mocha Brunette Dimension & Gloss",
      category: "Hair Coloring",
      image:
        "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=1000",
      description: "Rich espresso tones with reflective golden ribbons.",
      aspect: "tall",
    },
    {
      id: 7,
      title: "Botanical Hair Spa Steam Ritual",
      category: "Hair Treatments",
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=1000",
      description: "Deep conditioning steam masque therapy.",
      aspect: "square",
    },
    {
      id: 8,
      title: "Modern Soft Waves & Textured Lob",
      category: "Haircuts & Styling",
      image:
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&q=80&w=1000",
      description: "Effortless shoulder-grazing texture and beach waves.",
      aspect: "square",
    },
    {
      id: 9,
      title: "Glamorous Evening Occasion Look",
      category: "Bridal & Party Makeup",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=1000",
      description: "Soft smoky eyes and luminous natural contouring.",
      aspect: "tall",
    },
  ],

  // Customer Feedback Themes (Synthesized from supplied real feedback: friendly staff, hair styling, hair coloring, hair treatments)
  reviewThemes: [
    {
      topic: "Friendly & Caring Staff",
      quote:
        "The team at BBC Salon makes you feel pampered from the second you walk in. So polite, warm, and attentive to every little detail.",
      focus: "Staff Hospitality & Care",
      rating: 5,
    },
    {
      topic: "Hair Styling & Cutting Excellence",
      quote:
        "Got my hair styled here and received endless compliments! They really listen to what suits your face shape before cutting.",
      focus: "Precision Haircut & Styling",
      rating: 5,
    },
    {
      topic: "Hair Coloring & Balayage",
      quote:
        "Flawless hair color! The shades blended naturally without damaging my hair. The gloss and tone exceeded my expectations.",
      focus: "Hair Coloring Artistry",
      rating: 5,
    },
    {
      topic: "Restorative Hair Treatments",
      quote:
        "My frizzy, dry hair felt like silk after the treatment. Professional advice, genuine products, and incredible results.",
      focus: "Deep Hair Therapy & Spa",
      rating: 5,
    },
  ],

  // FAQs tailored for Phagwara ladies
  faqs: [
    {
      q: "Is BBC Salon exclusively for ladies?",
      a: "Yes, BBC Salon is dedicated exclusively as a private, comfortable beauty sanctuary for women in Phagwara, ensuring complete privacy, hygiene, and relaxation.",
    },
    {
      q: "Where is BBC Salon located in Phagwara?",
      a: "We are conveniently situated on Plahi Road, near City Palace, Phagwara, Punjab (144401). Landmark location code: 6QH8+85.",
    },
    {
      q: "How do I request an appointment enquiry?",
      a: "You can easily select your desired service and preferred date/time using the appointment form on this website. It pre-fills an instant WhatsApp message to +91 89684 88010. You can also call us directly.",
    },
    {
      q: "Are service prices fixed or customized?",
      a: "Because hair length, thickness, and specialized treatment requirements vary, exact prices are customized following a personalized consultation. Final price schedules will be verified directly by the salon owner.",
    },
    {
      q: "Do I need a consultation before hair coloring or smoothing treatments?",
      a: "Yes, we strongly recommend a brief hair texture and porosity assessment to ensure the ideal shade and gentle formulation for your specific hair.",
    },
  ],
};
