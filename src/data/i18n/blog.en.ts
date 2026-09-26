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
};
