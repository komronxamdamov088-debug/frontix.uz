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
};
