import type { BlogPostText } from "@/data/blog";

// Keyed by post slug (src/data/blog.ts).
export const blogEn: Record<string, BlogPostText> = {
  "qr-menyu-nima-va-qanday-ishlaydi": {
    category: "QR menu",
    title: "What a QR menu is and how it helps a restaurant",
    excerpt:
      "A QR menu is a digital system where guests scan the code on their table with a phone camera and browse dishes and order right on their phone — no paper menu needed.",
    sections: [
      {
        heading: "How a QR menu works",
        body: "Each table gets its own QR code. The guest scans it with their phone camera and a page opens in the browser with the dishes, prices and photos — no app to install. In many systems the guest can order right there, and the order goes straight to the kitchen or waiter's screen.",
      },
      {
        heading: "How it differs from a paper menu",
        body: "When a price or dish changes on a paper menu, the whole menu has to be reprinted. With a QR menu, prices or availability are updated from the admin panel in seconds, and the change shows on every table immediately. This is especially useful for restaurants whose prices change often or that add seasonal dishes.",
      },
      {
        heading: "The main benefit for a restaurant",
        body: "At peak hours waiters stop explaining the menu and writing orders on paper and focus on serving food. Guests don't wait in line and choose at their own pace. Dish photos and descriptions also lift sales — guests order what they can see.",
      },
      {
        heading: "What you need to launch",
        body: "Technically, you need the menu content (dishes, prices, photos) and a printed QR code for each table. With the FRONTIX QR menu service, launch usually takes 1-2 weeks, with a ready-made admin panel included.",
      },
    ],
    faq: [
      {
        question: "Do guests need a special app for a QR menu?",
        answer: "No. A regular phone camera and browser are enough; there's no separate app to install.",
      },
      {
        question: "Can I update the menu myself?",
        answer: "Yes, from the admin panel you can change prices, dish names or availability at any time.",
      },
      {
        question: "Does a QR menu work without internet?",
        answer:
          "No, the guest's phone needs an internet connection (Wi-Fi or mobile data), because the menu loads from the server in real time.",
      },
    ],
  },
  "telegram-bot-orqali-mijozlar-bilan-ishlash": {
    category: "Telegram bot",
    title: "How to automate customer service with a Telegram bot",
    excerpt:
      "A Telegram bot takes orders, questions and booking requests 24/7, replies automatically following a predefined script and hands over to an operator when needed.",
    sections: [
      {
        heading: "What a Telegram bot does",
        body: "The bot responds to the customer's message or button press following a pre-built script: it shows the menu, places the order, offers booking times or answers common questions. It isn't limited by a busy line or working hours — it runs around the clock.",
      },
      {
        heading: "Which businesses it suits",
        body: "It's useful for any business that takes orders or bookings by phone: restaurants, beauty salons, clinics, car services, training centres. It pays off most where phone lines can't keep up at peak hours and customers are lost as a result.",
      },
      {
        heading: "How the automation works",
        body: "The bot answers simple requests (prices, opening hours, address, free slots) on its own. For complex or individual cases it passes the conversation to a live operator, who sees the full chat history and request — the customer doesn't have to explain everything again.",
      },
      {
        heading: "Integration with other systems",
        body: "The bot can run on its own or connected to a CRM or order management system. Then every order or booking made in the bot is written to the shared system automatically, and staff don't have to re-enter it by hand.",
      },
    ],
    faq: [
      {
        question: "Is the bot limited to pre-written answers?",
        answer:
          "The main scripts are set in advance, but the bot automatically hands complex or unexpected requests to a live operator, so no customer is left without an answer.",
      },
      {
        question: "How long does it take to launch a bot?",
        answer:
          "Usually 1-2 weeks, depending on the script's complexity — the order/booking flow and reply texts are put together with the FRONTIX team.",
      },
      {
        question: "Can one bot route orders to several operators?",
        answer: "Yes, depending on the type of order or request, the bot can send it to the right department or operator.",
      },
    ],
  },
  "kichik-biznes-uchun-veb-sayt-kerakmi": {
    category: "Website",
    title: "A website for a small business: when and why you need one",
    excerpt:
      "An Instagram page alone doesn't give customers the full picture on prices, services and reliability — a website becomes necessary once being found in search and earning customer trust matter.",
    sections: [
      {
        heading: "Isn't Instagram enough?",
        body: "A social media page is quick to set up, but it's barely visible in search engines (Google), information is scattered in chronological order, and customers have to scroll a lot to find a price or service. A website is a structured, permanent address that brings in new customers through search.",
      },
      {
        heading: "When you definitely need a website",
        body: "You need one when customers start searching Google for \"[service] + city\" and your competitors' sites show up but yours doesn't — or when you need to show prices, portfolio, certificates and contact details in one place to earn trust.",
      },
      {
        heading: "What a minimal website should include",
        body: "A list of services and prices (or a price range), clear contact details (phone, address, Telegram), past work or customer reviews, and a quick-contact button — the minimal set that speeds up a customer's decision.",
      },
      {
        heading: "Why SEO matters",
        body: "Having a website isn't enough — people need to find it in search. The right headings, descriptions and fast loading help a site rank higher in Google; otherwise the site exists, but customers can't find it.",
      },
    ],
    faq: [
      {
        question: "Can I run Instagram and a website at the same time?",
        answer:
          "Yes, they complement each other: Instagram for everyday live content and quick contact, the website for being found in search and giving full information.",
      },
      {
        question: "How long does a small business website take?",
        answer: "Usually 1-3 weeks, depending on the content and design complexity.",
      },
      {
        question: "Can I update the website myself later?",
        answer: "Yes, you can update texts, photos and prices from the admin panel without calling a developer.",
      },
    ],
  },
  "onlayn-buyurtma-tizimi-restoran-uchun": {
    category: "Online ordering",
    title: "Online ordering system for a restaurant or shop: what you need and how it works",
    excerpt:
      "An online ordering system lets a customer pick items from a catalog, add them to a cart, pay with Click or Payme and place the order on a website or in Telegram, while the order reaches your staff automatically.",
    sections: [
      {
        heading: "What an online ordering system consists of",
        body: "It usually has four parts: a catalog of products or dishes, a cart and checkout page, online payment (Click, Payme) and an admin panel where staff see the orders. The customer orders from a phone or computer, and staff see every order in one place and update its status (accepted, being prepared, on the way).",
      },
      {
        heading: "How it differs from ordering by phone",
        body: "With phone orders, a busy operator means the customer waits or goes elsewhere, and orders are written down by hand, so mistakes happen. In an online system the customer enters the order with the correct price and contents, so there are fewer errors and the operator only confirms and arranges delivery.",
      },
      {
        heading: "Which businesses it suits",
        body: "Restaurants and cafes (delivery or pickup), grocery and clothing stores, small producers of flowers or made-to-order cakes, and any service business with a catalog. The main condition is that products or services have a clear list and prices.",
      },
      {
        heading: "Website or Telegram bot",
        body: "The system can be built as a website or inside a Telegram bot. A website brings new customers from search, while a Telegram bot suits regular customers, who order in the messenger they already use without installing an app. Many businesses use both, with orders arriving in one panel.",
      },
      {
        heading: "What is needed to launch",
        body: "A list of products or dishes, prices, photos, delivery terms and payment methods. FRONTIX usually launches an online ordering system in 2-4 weeks, including Click/Payme integration and an admin panel.",
      },
    ],
    faq: [
      {
        question: "Can I accept Click and Payme payments in an online ordering system?",
        answer: "Yes, Click or Payme is connected to the system, and the customer pays online or chooses cash. To connect, the business needs an agreement with the relevant payment provider.",
      },
      {
        question: "Where do I see the orders?",
        answer: "In the admin panel: each order, its contents, total and status are visible. If you wish, a Telegram notification arrives for every new order.",
      },
      {
        question: "Can the system be linked to a delivery service?",
        answer: "Yes, the delivery price and zone are configured in the system, and when needed the order details are passed to a courier or an external service automatically.",
      },
    ],
  },
  "crm-nima-kichik-biznesga-kerakmi": {
    category: "CRM",
    title: "What is a CRM and does a small business need one",
    excerpt:
      "A CRM is software that keeps customers, orders, payments and communication history in one system instead of Excel or a notebook, and automates repetitive tasks such as reminders and reports.",
    sections: [
      {
        heading: "What a CRM is",
        body: "CRM (Customer Relationship Management) is a system for managing customer relationships. It stores in one place who each customer is, what they ordered, when they paid and when you last contacted them. As a result, data is not scattered across notebooks, Excel files and employees' memory.",
      },
      {
        heading: "When Excel stops being enough",
        body: "While customers and orders are few, a spreadsheet is enough. But once you have more than two employees, several people handle the same customer, or reminders and reports take hours every day, the spreadsheet starts producing errors, duplicates and lost requests. That is the point where a CRM pays off.",
      },
      {
        heading: "What a CRM automates",
        body: "Reminders to customers about payments or meetings, assigning a new request to the responsible employee, collecting daily and monthly reports, keeping a list of debtors, and warning you when stock runs low. The system does these things instead of an employee doing them by hand.",
      },
      {
        heading: "Ready-made CRM or a custom system",
        body: "A ready-made CRM launches quickly and fits many businesses. If your processes are specific (for example appointment schedules in a clinic, room occupancy in a hotel, or the till and stock in a shop), a system built for the industry is more convenient. FRONTIX offers both: ready industry products FRX Business, FRX Hotel and FRX MED, and custom systems built to order.",
      },
      {
        heading: "How to start moving to a CRM",
        body: "First work out which tasks take the most time and where mistakes happen most often, and start with that part. There is no need to move everything in one day: first the customer database and orders, then reminders and reports.",
      },
    ],
    faq: [
      {
        question: "Is a CRM only for big companies?",
        answer: "No. A CRM is also useful for a small business with a steadily growing number of customers and orders, especially a shop, clinic, salon or training center: data does not get lost and reports are built automatically.",
      },
      {
        question: "Can I move my existing Excel data into a CRM?",
        answer: "Yes, lists of customers and products are usually imported, so you do not have to re-enter data when switching.",
      },
      {
        question: "How long does it take to launch a CRM?",
        answer: "A few days with a ready-made solution and usually a few weeks with a custom system. The exact timeline is set after a free consultation.",
      },
    ],
  },
  "sayt-yaratish-narxi-nimaga-bogliq": {
    category: "Website",
    title: "What website cost depends on and what to ask before ordering",
    excerpt:
      "Website cost depends on its type (business card, corporate, online store), the number of pages, design complexity, integrations with payments and other systems, and the deadline, so an exact price is given as a written proposal after your requirements are clear.",
    sections: [
      {
        heading: "What determines the price",
        body: "The first factor is the type of site: a one-page business card, a multi-page corporate site and an online store with a catalog and cart differ greatly in scope. Next come the number of pages, custom design or a ready template, who prepares the texts and photos, payments (Click, Payme), CRM or Telegram integration, a three-language version, and the deadline.",
      },
      {
        heading: "Template or custom design",
        body: "A template-based site launches faster and costs less, but looks like other sites and expresses the brand less. Custom design is drawn for the brand and helps build customer trust, but needs more time and budget.",
      },
      {
        heading: "Do not choose by price alone",
        body: "A cheap offer often leaves out support, speed, mobile adaptation or search engine setup, which you then pay for separately. That is why the proposal should spell out exactly what is included.",
      },
      {
        heading: "What to ask before ordering",
        body: "Ask for: exact deadlines and stages, the payment schedule (in stages or upfront), how the site works on a phone, whether basic SEO setup is included, whether technical support exists after launch, and in whose name the site code and domain are registered. All of this should be agreed in writing.",
      },
      {
        heading: "How FRONTIX works",
        body: "FRONTIX estimates each project separately: first a free consultation, then a proposal with clearly written deadlines and scope. A project is usually ready in 1-6 weeks, payment is made in stages, and technical support is offered after launch.",
      },
    ],
    faq: [
      {
        question: "Can I know the exact price of a website in advance?",
        answer: "Only once the requirements are clear. The price changes with the type of site, the number of pages and integrations, so FRONTIX gives a written proposal after a free consultation.",
      },
      {
        question: "Will there be extra payments after the site is ready?",
        answer: "Annual costs such as the domain and hosting, and technical support, are agreed separately. The proposal should state these items in advance.",
      },
      {
        question: "How long does it take to build a website?",
        answer: "Usually 1-6 weeks depending on complexity. A simple business card site is faster, while an online store or custom system takes longer.",
      },
    ],
  },
  "it-xizmatlar-narxi-toshkent": {
    category: "IT service pricing",
    title: "IT service prices in Tashkent 2026: what a website, Telegram bot, QR menu and CRM cost",
    excerpt: "FRONTIX prices in Tashkent: website $350, website with admin panel $550, QR menu from $50, Telegram bot from $250, CRM from 250,000 UZS. Complex projects are quoted individually.",
    sections: [
        { heading: "Main prices at a glance", body: "Website — $350. Website with an admin panel where you manage the content yourself — $550. QR menu — from $50. Telegram bot — from $250. CRM — from 250,000 UZS. Custom software and complex integrations are priced by functionality." },
        { heading: "What affects the price", body: "Number of features, design complexity, payment systems (Click, Payme), integration with CRM and other systems, and the timeline. A simple project takes 1-2 weeks, a complex one several weeks." },
        { heading: "Which service you need", body: "To be found online — a website. To take orders in Telegram — a Telegram bot. For a restaurant or cafe — a QR menu. To organise customers and sales — a CRM. These are often used together." },
        { heading: "What to check before taking a cheap offer", body: "Ask what is included: design, mobile layout, domain and hosting, technical support, code ownership. At the same price the scope can differ a lot." },
        { heading: "How to get an exact price", body: "Tell FRONTIX briefly about your project: we hold a free consultation and send a proposal with the scope and timeline spelled out." },
      ],
    faq: [
        { question: "How much does a website cost?", answer: "At FRONTIX a website costs $350, a website with an admin panel $550." },
        { question: "How much does a Telegram bot cost?", answer: "A Telegram bot starts from $250; the exact price depends on features." },
        { question: "How much does a QR menu cost?", answer: "A QR menu starts from $50." },
        { question: "How much does a CRM cost?", answer: "CRM starts from 250,000 UZS; custom systems are priced separately." },
      ],
  },
  "it-kompaniya-qanday-tanlash-toshkent": {
    category: "Choosing an IT company",
    title: "How to choose an IT company in Tashkent: 7 checks",
    excerpt: "When choosing an IT company, check the portfolio, written contract and proposal scope, timeline, support, code ownership, payment terms and response speed; choosing on price alone leads to extra costs later.",
    sections: [
        { heading: "1. Portfolio and real projects", body: "Look at the company's finished work and open it: does it work, is it comfortable on a phone, does it load fast." },
        { heading: "2. Written proposal and contract", body: "Scope, stages, timeline and price should be in writing. A verbal agreement leads to disputes later." },
        { heading: "3. Clear timeline and stages", body: "A good company splits the project into stages and shows results at each one." },
        { heading: "4. Payment terms", body: "Staged payment is safer for both sides. Be careful with full prepayment." },
        { heading: "5. Code and domain ownership", body: "Ask in advance in whose name the code and the domain are registered." },
        { heading: "6. Support after launch", body: "Find out who helps, and how fast, when an error appears or a change is needed." },
        { heading: "7. Response speed", body: "How quickly and clearly the company answers first questions shows the quality of later work." },
        { heading: "FRONTIX works on these principles", body: "FRONTIX builds websites, Telegram bots, QR menus, online ordering systems, CRM and custom software. A free consultation first, then a proposal with scope and timeline written out." },
      ],
    faq: [
        { question: "What matters most when choosing an IT company?", answer: "A written contract and proposal scope, a portfolio of finished projects, and support after launch." },
        { question: "Freelancer or company — which is better?", answer: "A freelancer can be enough for a small one-off job; for long-term support and several specialists a company is more reliable." },
      ],
  },
  "telegram-bot-yaratish-narxi-toshkent": {
    category: "Telegram bot",
    title: "Telegram bot cost: from $250, and what changes the price",
    excerpt: "A Telegram bot at FRONTIX starts from $250; the final price depends on features such as order intake, payments (Click, Payme), CRM integration and an admin panel.",
    sections: [
        { heading: "Why you need a Telegram bot", body: "A bot takes orders and bookings 24/7, answers frequent questions automatically and stores customers in a database. Customers install nothing — they are already in Telegram." },
        { heading: "What affects the price", body: "Number of features, integration with payment systems, connection to CRM and other systems, an admin panel, a multilingual interface and the timeline." },
        { heading: "Simple vs complex bot", body: "A simple bot answers questions and takes enquiries. A complex one includes a catalogue, cart, payment and order tracking, and needs more time." },
        { heading: "How long it takes", body: "A simple bot usually takes from a few days to 1-2 weeks, a complex one longer. The exact timeline is set after the consultation." },
      ],
    faq: [
        { question: "How much does a Telegram bot cost?", answer: "At FRONTIX from $250; the exact price depends on features." },
        { question: "Can payments be added to the bot?", answer: "Yes, Click, Payme and other payment systems can be integrated." },
        { question: "Can the bot be linked to a CRM?", answer: "Yes, orders and customers can flow into the CRM automatically." },
      ],
  },
  "qr-menyu-narxi-toshkent": {
    category: "QR menu",
    title: "QR menu price: from $50, what restaurants and cafes should consider",
    excerpt: "A QR menu at FRONTIX starts from $50; the price depends on the number of dishes, online ordering, an admin panel and design complexity.",
    sections: [
        { heading: "How much a QR menu costs", body: "A QR menu at FRONTIX starts from $50. A simple menu display is cheaper; adding online ordering and kitchen integration raises the price." },
        { heading: "What affects the price", body: "Number of dishes and categories, photos, multiple languages, online ordering, payment, the ability to change prices via the admin panel and branded design." },
        { heading: "Savings compared to a paper menu", body: "When a price or dish changes there is no reprinting: the change appears on every table at once through the admin panel." },
        { heading: "Launch", body: "You need the menu content (dishes, prices, photos) and a QR code for each table. Usually ready within 1-2 weeks." },
      ],
    faq: [
        { question: "How much does a QR menu cost?", answer: "At FRONTIX from $50." },
        { question: "Can I change prices myself?", answer: "Yes, you update prices and dishes yourself via the admin panel." },
        { question: "Does the guest need to install an app?", answer: "No, scanning the QR code with the phone camera is enough." },
      ],
  },
  "biznesni-avtomatlashtirish-toshkent": {
    category: "Automation",
    title: "Business automation in Tashkent: what you can automate and where to start",
    excerpt: "Business automation means handing repetitive work (taking orders, the customer database, reminders, reports) to software; it usually starts with a CRM or a Telegram bot, and a CRM at FRONTIX starts from 250,000 UZS.",
    sections: [
        { heading: "What can be automated", body: "Keeping the customer and enquiry database, taking orders, sending automatic reminders and replies, preparing reports and statistics, recording payments, tracking employee tasks." },
        { heading: "Where to start", body: "Pick the process that takes the most time and causes the most mistakes. This is usually work with customers: where the enquiry came from, who answered, what was agreed gets lost in a notebook or Excel. That is why the first step is often a CRM." },
        { heading: "CRM and Telegram bot together", body: "The customer writes to a Telegram bot, the request lands in the CRM automatically and the manager is notified. Manual copying disappears and replies get faster." },
        { heading: "What it costs", body: "At FRONTIX a CRM starts from 250,000 UZS and a Telegram bot from $250. Complex systems built for your business are priced individually by functionality." },
        { heading: "How to begin", body: "Tell FRONTIX what your business does and which process eats most of your time. In a free consultation we say what is worth automating and how long it takes." },
      ],
    faq: [
        { question: "Where does business automation start?", answer: "With identifying the process that takes the most time; most often that is customer work and a CRM." },
        { question: "How much does a CRM cost?", answer: "At FRONTIX from 250,000 UZS." },
        { question: "Does a small business need automation?", answer: "If orders and customers are handled by hand and cause mistakes and delays, yes, small businesses benefit quickly too." },
      ],
  },
  "crm-narxi-toshkent": {
    category: "CRM",
    title: "CRM price in Tashkent: from 250,000 UZS and what changes the cost",
    excerpt: "A CRM at FRONTIX starts from 250,000 UZS; the final price depends on the number of users, stages, integrations (Telegram, payments, 1C) and report complexity.",
    sections: [
        { heading: "Why you need a CRM", body: "A CRM keeps customers, enquiries and agreements in one place: who wrote, who answered, what the next step is. Enquiries lost in notebooks and Excel stop disappearing." },
        { heading: "What affects the price", body: "Number of users, sales stages, integration with a Telegram bot and payment systems, reports, migrating old data and design." },
        { heading: "Ready-made or custom CRM", body: "A ready-made solution launches fast and cheap but may not fully fit your process. A custom CRM is built around your business processes and takes longer." },
        { heading: "Price and timeline", body: "A CRM at FRONTIX starts from 250,000 UZS. The timeline is from a few days to a few weeks depending on complexity; the exact price and timeline come in a written proposal after a free consultation." },
      ],
    faq: [
        { question: "How much does a CRM cost?", answer: "At FRONTIX from 250,000 UZS." },
        { question: "Can the CRM be linked to a Telegram bot?", answer: "Yes, enquiries flow from the bot into the CRM automatically." },
        { question: "How long does launch take?", answer: "From a few days to a few weeks depending on complexity." },
      ],
  },
  "telegram-bot-biznes-uchun-soha-boyicha": {
    category: "Telegram bot",
    title: "Telegram bot for business: what it does for a salon, restaurant and delivery service",
    excerpt: "A Telegram bot takes bookings at a salon, orders and reservations at a restaurant, and order status in delivery, answering customers automatically; at FRONTIX a bot starts from $250.",
    sections: [
        { heading: "For a beauty salon", body: "The bot books the customer for a service and time, sends reminders and answers questions about prices and the address. The administrator is no longer tied to the phone." },
        { heading: "For a restaurant or cafe", body: "The bot shows the menu, takes orders and table reservations, passes the order to staff and can take payment via Click or Payme." },
        { heading: "For a delivery service", body: "The bot takes the order, asks for address and payment, tells the customer the order status and hands the order to the courier." },
        { heading: "Price and timeline", body: "A Telegram bot at FRONTIX starts from $250. A simple bot takes a few days to 1-2 weeks; a bot with payment and CRM integration takes longer." },
      ],
    faq: [
        { question: "Is a Telegram bot suitable for a salon?", answer: "Yes, for bookings, reminders and answering questions." },
        { question: "Can a restaurant bot take payments?", answer: "Yes, Click and Payme can be integrated." },
        { question: "How much does a bot cost?", answer: "At FRONTIX from $250." },
      ],
  },
  "crm-dlya-malogo-biznesa-tashkent": {
    category: "CRM",
    title: "CRM for small business in Tashkent: where to start and what it costs",
    excerpt: "A CRM for a small business keeps customers, enquiries and agreements in one place; at FRONTIX a CRM starts from 250,000 UZS and connects to a Telegram bot.",
    sections: [
        { heading: "What a CRM gives a small business", body: "All customers and enquiries in one place: who wrote, who answered, what was agreed. Fewer enquiries lost in notebooks and Excel, and history stays even when a manager changes." },
        { heading: "When you need a CRM", body: "Customers come from several places (Telegram, Instagram, phone), enquiries get lost, you do not know who answered and when, or you build reports by hand." },
        { heading: "Where to start", body: "First write down the process: where the customer comes from and what the steps are. Then move only those steps into the CRM without adding extra features." },
        { heading: "Price", body: "A CRM at FRONTIX starts from 250,000 UZS; the price depends on the number of users, integrations and report complexity." },
      ],
    faq: [
        { question: "Does a small business need a CRM?", answer: "If enquiries come from several channels and are handled by hand, yes, the benefit comes quickly." },
        { question: "How much does a CRM cost?", answer: "At FRONTIX from 250,000 UZS." },
        { question: "Can the CRM be linked to Telegram?", answer: "Yes, enquiries from the bot flow into the CRM automatically." },
      ],
  },
  "chat-bot-dlya-salona-krasoty-tashkent": {
    category: "Telegram bot",
    title: "Chatbot for a beauty salon in Tashkent: booking and reminders automatic",
    excerpt: "A Telegram chatbot for a salon books the customer for a service and time, sends reminders and answers questions; at FRONTIX a bot starts from $250.",
    sections: [
        { heading: "What the bot does in a salon", body: "The customer picks a service and time in Telegram, the bot saves the booking, sends a reminder beforehand and answers questions about prices and the address." },
        { heading: "How it helps the administrator", body: "Less time on calls and messages, bookings do not get mixed up, and customers can book even at night." },
        { heading: "Linking to a CRM", body: "Bookings and the customer base go into the CRM, making it easy to see and bring back regular customers." },
        { heading: "Price and timeline", body: "A Telegram bot at FRONTIX starts from $250; a simple bot is ready in a few days to 1-2 weeks." },
      ],
    faq: [
        { question: "How much does a salon bot cost?", answer: "At FRONTIX from $250." },
        { question: "Does the bot send reminders?", answer: "Yes, it can remind customers automatically before the booking." },
        { question: "Can the bot be linked to a CRM?", answer: "Yes, bookings flow into the CRM automatically." },
      ],
  },
  "crm-dlya-kliniki-tashkent": {
    category: "CRM",
    title: "CRM for a clinic in Tashkent: patients, booking and reports in one place",
    excerpt: "A clinic CRM keeps the patient database, appointment booking and reports in one place; FRONTIX has its own FRX MED product, and custom systems are priced by requirements.",
    sections: [
        { heading: "Why a clinic needs a CRM", body: "The patient database, appointment schedule, doctor workload and reports live in one system instead of a notebook or Excel." },
        { heading: "What can be automated", body: "Appointment booking, patient reminders, doctor schedules, payment records and reports." },
        { heading: "Ready-made or custom system", body: "A ready-made solution launches fast; if the clinic has a special process a custom system is built around it. FRONTIX has its own FRX MED product (a CRM for clinics)." },
        { heading: "Price", body: "A CRM at FRONTIX starts from 250,000 UZS; the exact price for a clinic is set by features after a free consultation." },
      ],
    faq: [
        { question: "How much does a clinic CRM cost?", answer: "At FRONTIX from 250,000 UZS; the exact price depends on features." },
        { question: "Can patients get reminders?", answer: "Yes, automatic reminders before the appointment can be added." },
        { question: "What is FRX MED?", answer: "FRONTIX's CRM system for clinics." },
      ],
  },
  "tayyor-crm-yoki-maxsus-crm": {
    category: "CRM",
    title: "Ready-made CRM or custom CRM: which suits your business",
    excerpt: "A ready-made CRM (such as amoCRM or Bitrix24) launches fast and cheap, while a custom CRM is built fully around your process; the choice depends on process complexity, budget and the need for flexibility.",
    sections: [
        { heading: "Ready-made CRM: when it fits", body: "If your process is standard (customer → enquiry → sale), a ready-made solution launches in days and the starting cost is low. A monthly fee per user may apply." },
        { heading: "Ready-made CRM: limits", body: "If your process is unusual you either adapt to the system or need extra settings and integrations. If a needed feature is missing, adding or working around it can be hard." },
        { heading: "Custom CRM: when it fits", body: "Your process is unique, the system must connect to several other programs (payments, Telegram, 1C), or you want to avoid ongoing yearly fees. Staff learn faster because the system follows their own steps." },
        { heading: "How to choose", body: "First write down the process. If it is 80% standard, start with a ready-made CRM. If your key steps do not fit a ready-made system, consider a custom one." },
        { heading: "What FRONTIX offers", body: "A CRM at FRONTIX starts from 250,000 UZS, and complex custom systems are priced by functionality after a free consultation." },
      ],
    faq: [
        { question: "Is a ready-made CRM cheaper than a custom one?", answer: "The starting cost is usually lower, but monthly per-user fees can add up over time." },
        { question: "Can I move from a ready-made to a custom CRM?", answer: "Yes, data can be exported and moved to the new system; check export options beforehand." },
        { question: "How do I choose a CRM?", answer: "Write down your process: if the key steps fit a ready-made system choose it, otherwise choose a custom one." },
      ],
  },
};
