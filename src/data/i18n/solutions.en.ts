import type { SolutionContent } from "@/data/solutions";

// Keyed by `${industrySlug}__${serviceSlug}` (src/data/solutions.ts).
export const solutionsEn: Record<string, SolutionContent> = {
  "restoranlar-va-kafelar__qr-menu": {
    intro: "A QR menu is a digital system that lets guests browse the menu and order on their phone without leaving the table. For restaurants and cafes in Tashkent, FRONTIX launches a QR menu in 1-2 weeks that updates prices and dishes from one place in real time and cuts the wait for a waiter.",
    bridge: "Instead of reprinting the paper menu every time, a price or dish can be updated from the admin panel in seconds, and the change shows on every table at once. At peak hours waiters focus on orders instead of queues, and guests order what they want without waiting.",
    faq: [
      { question: "How long does it take to launch a QR menu?", answer: "Usually 1-2 weeks, depending on the menu and design — FRONTIX loads the dishes, photos and prices into the system and hands over ready QR codes for every table." },
      { question: "Can I update the menu myself?", answer: "Yes, you can change prices, dish names or availability from the admin panel at any time — no developer needed." },
    ],
  },
  "restoranlar-va-kafelar__telegram-bot": {
    intro: "A Telegram bot is a system that takes orders 24/7 and replies to customers automatically. For restaurants and cafes in Tashkent, FRONTIX fully automates, through a bot, the orders that get lost to busy phone lines.",
    bridge: "Instead of a busy line or a mis-written order, the customer picks from the bot's menu, enters an address and completes the order in a few taps — it reaches the admin instantly and the chance of error disappears.",
    faq: [
      { question: "Can the bot accept payments?", answer: "Yes, payment options (cash, card or methods like Click) can be added to the Telegram bot, so customers complete the whole order inside it." },
      { question: "Does the bot replace Instagram or phone orders?", answer: "No, it works as an extra channel — customers order wherever suits them, and all orders are collected in one admin panel." },
    ],
  },
  "restoranlar-va-kafelar__online-ordering": {
    intro: "An online ordering system is a complete platform where customers choose dishes on a website or app, pay and track delivery. For restaurants in Tashkent, FRONTIX builds a system that collects orders in one dashboard instead of Excel or a notebook.",
    bridge: "Instead of delivery orders being lost or mixed up when tracked by hand, every order's status (received → cooking → on the way) is visible in real time and linked to ingredient stock.",
    faq: [
      { question: "How does it integrate with delivery services?", answer: "The system is built to track order status out of the box; if you use your own couriers or an external delivery service, we configure the statuses to match." },
      { question: "Can I use it for several branches?", answer: "Yes, it adapts to multi-branch restaurants — each branch sees its own orders, while combined reports are produced centrally." },
    ],
  },
  "gozallik-salonlari__telegram-bot": {
    intro: "A Telegram bot lets clients see free slots and book themselves without calling. For beauty salons and barbershops in Tashkent, FRONTIX builds automatic booking so no client is lost even when the receptionist is busy.",
    bridge: "Instead of going to a competitor while the receptionist can't answer, the client sees free slots in the bot, picks a stylist and service and books on their own. An automatic reminder goes out before the appointment, reducing no-shows.",
    faq: [
      { question: "How does the bot know when a stylist is busy or free?", answer: "Each stylist's working schedule is entered into the system, and the bot only offers free slots, so nothing gets booked into a taken slot." },
      { question: "Are reminders sent to clients automatically?", answer: "Yes, an automatic Telegram reminder is sent before the booking, which noticeably reduces no-shows." },
    ],
  },
  "gozallik-salonlari__website-development": {
    intro: "A website is a digital shop window that keeps the salon's services, prices and stylists always visible. For beauty salons in Tashkent, FRONTIX builds a fast website that people find not only through Instagram but also in Google search.",
    bridge: "Instead of client history and favourite services being kept on paper and lost by the next visit, the website offers an online booking form and a service catalogue — bringing in new clients from Google as well as Instagram.",
    faq: [
      { question: "Will the website have online booking?", answer: "Yes, the site connects to a Telegram bot or a dedicated booking form, so clients can book time directly from the website." },
      { question: "Do we need a website if we have an Instagram page?", answer: "Yes — Instagram depends on the algorithm and mostly reaches followers, while a website is always findable in Google and works as a link for ads." },
    ],
  },
  "gozallik-salonlari__business-automation": {
    intro: "CRM automation brings client history, bookings and payments together in one system. For beauty salons in Tashkent, FRONTIX stores every client's past services and favourite stylist and ends manual record-keeping.",
    bridge: "Instead of client history living on paper or nowhere, the CRM remembers each client's past visits, chosen services and stylist — enabling personalised service and keeping regulars coming back.",
    faq: [
      { question: "Does the CRM work together with the Telegram bot?", answer: "Yes, bookings made in the bot flow into the CRM automatically, and the admin sees all bookings in one place." },
      { question: "Can staff performance be tracked in the CRM?", answer: "Yes, services performed and revenue per stylist are visible in the system, which also serves as the basis for bonuses." },
    ],
  },
  "tibbiyot-klinikalari__website-development": {
    intro: "A website is the official, trustworthy source of information about a clinic's services, doctors and prices. For medical clinics in Tashkent, FRONTIX builds a website with an online booking form that patients find when they search Google.",
    bridge: "Instead of piecing together information about the clinic from different sources, patients see doctors, specialities and prices clearly on the website and can leave a booking request through the online form without calling.",
    faq: [
      { question: "Can doctors' schedules be shown on the website?", answer: "Yes, each doctor's consultation days and free times are shown on the site, and patients choose a suitable time for their request." },
      { question: "Is patient data stored securely?", answer: "Yes, data submitted through the form goes only to the clinic's admin panel and is never shared with third parties." },
    ],
  },
  "tibbiyot-klinikalari__telegram-bot": {
    intro: "A Telegram bot is an automatic system that lets patients book appointments without calling and receive reminders. For clinics in Tashkent, FRONTIX automates through a bot the bookings that get lost to busy phone lines.",
    bridge: "Instead of hitting a busy line, the patient picks a doctor and a free slot in the bot and books in a few taps. An automatic reminder is sent before the appointment, reducing no-shows.",
    faq: [
      { question: "Does the bot work for several doctors?", answer: "Yes, the bot shows all doctors and their free times, and patients book with the specialist they need." },
      { question: "Can follow-up reminders be sent?", answer: "Yes, the bot can be set to send an automatic reminder at a set time (for example, a check-up after treatment)." },
    ],
  },
  "tibbiyot-klinikalari__business-automation": {
    intro: "CRM automation brings patient history, appointments and doctors' schedules together in one system. For clinics in Tashkent, FRONTIX centralises patient data that's scattered across logbooks and files.",
    bridge: "Instead of patient history living in staff members' heads or separate logbooks, the CRM keeps each patient's diagnoses and visit history in one profile — at the next appointment the doctor sees it all instantly.",
    faq: [
      { question: "Does the CRM manage doctors' schedules automatically?", answer: "Yes, each doctor's availability is visible in the system and new appointments only go into free slots, so two patients never land in the same time." },
      { question: "How is patient data stored?", answer: "Data is accessible only to clinic staff with restricted permissions, and the structure is designed to meet security requirements." },
    ],
  },
  "onlayn-dokonlar__online-ordering": {
    intro: "An online ordering system is a complete platform where customers pick products, pay and track delivery. For online stores in Tashkent, FRONTIX brings orders handled by hand through Instagram and Telegram into one dashboard.",
    bridge: "Instead of mistakes from writing orders down and tracking stock by hand, the system records every order automatically, stock goes down on its own after a sale, and customers track their order status themselves.",
    faq: [
      { question: "Can several sales channels (Instagram, Telegram, website) be combined in one place?", answer: "Yes, orders from every channel are collected in one admin panel, and stock is shared across all channels." },
      { question: "Can payment systems be connected?", answer: "Yes, local payment systems such as Click and Payme can be integrated into the online ordering system." },
    ],
  },
  "onlayn-dokonlar__telegram-bot": {
    intro: "A Telegram bot is an automated sales channel where customers pick products from a catalogue and order right in the bot. For online stores in Tashkent, FRONTIX moves the manual Instagram DM ordering process into a bot.",
    bridge: "Instead of asking about a product in Instagram DMs and waiting for a reply, the customer browses the catalogue in the bot, adds to cart, enters an address and completes the order in minutes — all orders appear neatly in the admin panel.",
    faq: [
      { question: "Does the bot show stock levels?", answer: "Yes, sold-out products are automatically marked \"out of stock\" in the bot, so customers can't order what isn't there." },
      { question: "Can the bot offer discounts or promo codes?", answer: "Yes, promo code and discount logic can be added to the bot, encouraging repeat purchases." },
    ],
  },
  "onlayn-dokonlar__website-development": {
    intro: "A website is a full online store with a product catalogue, cart and checkout. For retail businesses in Tashkent, FRONTIX builds an independent online store that doesn't rely on Instagram alone.",
    bridge: "Instead of depending on Instagram's algorithm, customers browse products on your own website, add them to the cart and buy — the site is also found in Google, so new customers come from beyond Instagram.",
    faq: [
      { question: "Is it hard to add or change products on the website?", answer: "No, you can add or edit products, prices and photos from the admin panel at any time." },
      { question: "Does the website work well on phones?", answer: "Yes, every site is built mobile-first, since most purchases in Uzbekistan are made on a phone." },
    ],
  },
  "talim-markazlari__website-development": {
    intro: "A website is the official page with information about courses, prices and teachers that also accepts online applications. For training centres in Tashkent, FRONTIX builds a website that parents and students find when they search Google.",
    bridge: "Instead of new students' details being kept on paper or in scattered Excel files, an online application form is filled in on the website and the data goes straight to the admin panel — speeding up enrolment and preventing lost information.",
    faq: [
      { question: "Can course schedules and open places be shown on the website?", answer: "Yes, each course's schedule and number of open places are shown on the site, which reduces calls to the administrator." },
      { question: "Can parents follow their child's progress on the website?", answer: "This can be added as a personal account area, usually delivered together with CRM automation." },
    ],
  },
  "talim-markazlari__telegram-bot": {
    intro: "A Telegram bot is an automatic system for staying in touch with students and parents, taking applications and sending reminders. For training centres in Tashkent, FRONTIX automates the constant calls from parents through a bot.",
    bridge: "Instead of calling every time to ask about their child's attendance or a payment deadline, parents can get that information from the bot at any time, and the centre can message all subscribers about new groups or offers at once.",
    faq: [
      { question: "Can students sign up for a new course through the bot?", answer: "Yes, the bot lists new courses, and a student or parent can apply directly in the bot." },
      { question: "Can the bot send payment reminders?", answer: "Yes, the bot can send an automatic reminder as a payment deadline approaches, which reduces arrears." },
    ],
  },
  "talim-markazlari__business-automation": {
    intro: "CRM automation brings students, groups, payments and attendance together in one system. For training centres in Tashkent, FRONTIX centralises data scattered across different Excel files.",
    bridge: "Instead of student details and payment status sitting in scattered files, the CRM shows each student's group, attendance and payment history in one profile — overdue payments are flagged automatically, so fewer debts are forgotten.",
    faq: [
      { question: "Does the CRM show group schedules and open places?", answer: "Yes, each group's schedule, teacher and number of open places are visible in the system in real time." },
      { question: "Can payments be tracked automatically?", answer: "Yes, each student's payment history and due dates are stored in the system, and upcoming or overdue payments appear in a separate report." },
    ],
  },
  "fitnes-zallar__telegram-bot": {
    intro: "A Telegram bot automates membership status, class schedules and bookings. For gyms and sports clubs in Tashkent, FRONTIX lets people sign up and check the schedule without coming to the gym.",
    bridge: "Instead of a schedule on a sheet of paper on the wall, members see free spots and trainer availability in the bot and book classes in advance. When a membership is about to expire, the bot sends an automatic reminder.",
    faq: [
      { question: "Can members book a spot in a group class through the bot?", answer: "Yes, members see the free spots in the bot and sign up for the group class that suits them." },
      { question: "Do members get a reminder when their membership is ending?", answer: "Yes, a few days before it expires, the member automatically receives a Telegram message." },
    ],
  },
  "fitnes-zallar__business-automation": {
    intro: "CRM automation brings members, memberships and trainer schedules together in one system. For gyms in Tashkent, FRONTIX automatically monitors memberships that otherwise quietly expire when tracked by hand.",
    bridge: "Instead of tracking expired memberships by hand and quietly losing members, the CRM shows every member's membership status and history and automatically lists those nearing expiry — increasing renewals.",
    faq: [
      { question: "Does the CRM show trainer availability?", answer: "Yes, each trainer's schedule and busy/free times are visible in the system, making personal training easier to plan." },
      { question: "Can we see statistics on member growth and churn?", answer: "Yes, the system provides reports and analytics on new members and renewed and expired memberships." },
    ],
  },
  "fitnes-zallar__website-development": {
    intro: "A website presents membership options, trainers and schedules and lets people register online. For gyms in Tashkent, FRONTIX builds a website where new customers can get to know the gym and apply without visiting.",
    bridge: "Instead of having to go to the gym to learn prices and the schedule, new customers see everything on the website and can book their first session through an online form.",
    faq: [
      { question: "Will the website support online payment?", answer: "Yes, Click, Payme and similar systems can be integrated to accept membership payments online." },
      { question: "Can the website work together with our Instagram page?", answer: "Yes, the site links to Instagram and Telegram, and all channels point to one address — the website." },
    ],
  },
  "avtoservislar__telegram-bot": {
    intro: "A Telegram bot lets customers book a free slot and choose a service without calling the garage. For car repair shops and service stations in Tashkent, FRONTIX builds automatic booking so no customer is lost even when the mechanic is under a car.",
    bridge: "Instead of going to another garage while the mechanic can't pick up, the customer sees free slots in the bot, chooses the service and books. All mechanics' schedules are visible in one admin panel, so two customers can no longer be booked with the same mechanic at the same time.",
    faq: [
      { question: "Can the customer find out from the bot when the car will be ready?", answer: "Yes, once a service is chosen the bot shows an estimated completion time, so customers can plan when to collect their car." },
      { question: "In a garage with several mechanics, does the bot track each one's availability?", answer: "Yes, each mechanic has their own schedule, and the bot only offers free times, preventing bookings into taken slots." },
    ],
  },
  "avtoservislar__business-automation": {
    intro: "CRM automation keeps information about every customer and their car (repair history, replaced parts) in one system. For car repair shops in Tashkent, FRONTIX turns records that get lost on paper into digital history and enables individual service for every customer.",
    bridge: "When a customer returns, the CRM history instantly shows which parts were replaced and when, so nothing has to be rechecked. Part orders are tracked through a workflow and delivery dates update automatically, so customers don't have to keep calling.",
    faq: [
      { question: "How is a car's repair history stored?", answer: "Each car gets its own card, where replaced parts, dates and work performed are recorded automatically." },
      { question: "Can part deliveries be tracked?", answer: "Yes, the workflow marks the order status (ordered, in transit, arrived), keeping the admin — and, if needed, the customer — informed." },
    ],
  },
  "avtoservislar__website-development": {
    intro: "A website is an online shop window that clearly shows a garage's services, prices and opening hours. For car repair shops in Tashkent, FRONTIX builds a website that ranks in search and gives full service information without a phone call.",
    bridge: "Instead of hearing a busy tone, customers use the online request form to state the service and a convenient time, so they aren't lost at the first step. With CMS integration the admin updates prices and busy days themselves, reducing confusion in mechanics' schedules.",
    faq: [
      { question: "Can I update the garage's prices on the website myself?", answer: "Yes, with CMS integration you edit prices, service types and opening hours from the admin panel — no developer needed." },
      { question: "How do customers find the website in Google?", answer: "SEO optimisation sets the site up to appear for searches like \"car service in Tashkent\", increasing the flow of new customers." },
    ],
  },
  "avto-yuvish-detayling__telegram-bot": {
    intro: "A Telegram bot lets customers book a car wash or detailing in advance instead of queueing on site. For car washes and detailing centres in Tashkent, FRONTIX builds an automatic queue that assigns customers exact times even at peak hours.",
    bridge: "Instead of waiting in line on site, customers pick a free slot in the bot and book an exact hour, so pointless waiting outside disappears. Prices for ceramic coating, interior cleaning and other services are shown in the bot, so there's no need to call to ask.",
    faq: [
      { question: "Can customers see service prices in the bot in advance?", answer: "Yes, each service (exterior wash, interior cleaning, ceramic coating) appears in the bot with its price, so customers know the cost before choosing." },
      { question: "Can payment also be made through the bot?", answer: "Yes, with payment integration customers pay online right in the bot, with no need to settle in cash on site." },
    ],
  },
  "avto-yuvish-detayling__business-automation": {
    intro: "CRM automation tracks regular customers and their visit history automatically and runs the bonus and discount system. For car washes in Tashkent, FRONTIX counts how often each customer comes and which services they use, automating the loyalty programme.",
    bridge: "Discounts and bonuses for regulars are no longer calculated by hand: the CRM counts visits automatically and rewards the customer at a set number, so fewer switch to competitors. Reports and analytics show peak hours in advance, so schedules and staffing can be planned around them.",
    faq: [
      { question: "How does the bonus system for regulars work?", answer: "The CRM counts each customer's visits automatically and, when the set number is reached, prompts the admin to offer a discount or free service." },
      { question: "Can we see which hours are busiest?", answer: "Yes, the reports and analytics section shows hourly and daily visit statistics, so staffing can be matched to peak hours." },
    ],
  },
  "avto-yuvish-detayling__website-development": {
    intro: "A website is an online shop window that shows all of a car wash and detailing centre's services, prices and location on one page. For car washes in Tashkent, FRONTIX builds a fast website where customers can see prices without calling and head straight over.",
    bridge: "With services and prices clearly listed, customers don't have to call to find out the cost of ceramic coating or interior cleaning. Because the site loads quickly, customers can open it on their phone on the go and pick a quiet hour, shortening the queue on site.",
    faq: [
      { question: "Do we have to show all prices on the website?", answer: "It's not required, but showing prices reduces calls and increases conversions, and they can be updated at any time through the CMS." },
      { question: "Does the website open quickly on a phone?", answer: "Yes, a site built for fast loading opens in a few seconds even on a slow connection — important for customers on the go." },
    ],
  },
  "yuridik-firmalar__website-development": {
    intro: "A website is a credible online source that shows a law firm's specialists, practice areas and real experience. For law firms and lawyers in Tashkent, FRONTIX builds a professional website that clients find online and contact with confidence, without relying on personal connections.",
    bridge: "Instead of finding a trustworthy lawyer only through acquaintances, clients find the site through SEO for searches like \"lawyer in Tashkent\", and real information about the firm builds trust. Through the online consultation request form, clients book a convenient time without waiting on the phone at peak hours.",
    faq: [
      { question: "How does the website bring in new clients?", answer: "SEO optimisation ranks the site for relevant legal searches, providing a steady flow of new clients even without personal referrals." },
      { question: "Can clients book a consultation from the website?", answer: "Yes, through the request form clients briefly describe their issue and pick a convenient time, and the administrator confirms it." },
    ],
  },
  "yuridik-firmalar__business-automation": {
    intro: "CRM automation brings each client's cases, documents and correspondence together in one system. For law firms in Tashkent, FRONTIX organises client communication and case status scattered across channels into a system where nothing gets lost.",
    bridge: "The case stage (collecting documents, court proceedings, ruling) is clearly marked in the CRM, so clients don't have to call every time for an update. Instead of correspondence scattered across phone, WhatsApp and Telegram, API integrations gather all communication on one client card, so documents and agreements aren't lost.",
    faq: [
      { question: "How does a client find out their case status?", answer: "Each case is tracked stage by stage in the CRM, and client notifications can be set up for whenever the admin updates the status." },
      { question: "Can correspondence from different channels be gathered in one place?", answer: "Yes, API integrations link conversations from Telegram and other channels to the client's CRM card, keeping the history in one place." },
    ],
  },
  "yuridik-firmalar__telegram-bot": {
    intro: "A Telegram bot lets clients book an initial consultation and briefly describe their issue without waiting on the phone. For law firms in Tashkent, FRONTIX builds an automatic intake system so no client is lost even at peak hours.",
    bridge: "Instead of going to another firm while the phone is busy, the client describes the issue in the bot and books a free slot, so first enquiries aren't lost. All enquiries appear in one admin panel, so correspondence that used to be scattered across channels is now tracked in one system.",
    faq: [
      { question: "Does a lawyer have to reply immediately when a client messages the bot?", answer: "No, the bot takes the enquiry and passes it to the admin panel, and the lawyer replies or invites the client to a meeting when free." },
      { question: "Can clients find out through the bot which documents they need?", answer: "Yes, the bot automatically answers common questions (required documents, consultation fee) and prepares the client in advance." },
    ],
  },
  "buxgalteriya-xizmatlari__website-development": {
    intro: "A website is an online shop window that clearly shows an accounting firm's service packages, prices and specialisms. For accounting and financial service firms in Tashkent, FRONTIX builds a website that gives new clients a full picture of prices and services without a phone call.",
    bridge: "Instead of having to call to learn prices and packages, the site lists monthly bookkeeping, tax reporting and consulting packages with prices, making the first contact easier. With CMS integration, prices and terms are updated quickly, so outdated information never misleads a client.",
    faq: [
      { question: "Should prices be shown openly on the website?", answer: "It's recommended: visible prices let clients skip the call-to-ask step and get in touch directly." },
      { question: "Who updates the website when prices change?", answer: "With CMS integration you edit prices and service descriptions yourself from the admin panel at any time — no developer needed." },
    ],
  },
  "buxgalteriya-xizmatlari__business-automation": {
    intro: "CRM automation tracks each client company's filing deadlines and documents automatically and sends reminders. For accounting services in Tashkent, FRONTIX builds a solution that warns you as deadlines approach, instead of chasing everyone by hand.",
    bridge: "Instead of clients forgetting tax filing deadlines and paying fines, workflow automation records every client's deadlines and sends a reminder before the due date. Reports and analytics show in one list whose deadline is coming up, so accountants don't have to remember each one.",
    faq: [
      { question: "Are clients reminded automatically as a filing deadline approaches?", answer: "Yes, workflow automation sends the client a reminder before the set date, reducing the risk of fines." },
      { question: "How are each client's documents organised?", answer: "Each client's CRM card stores their documents and filing history, so they can be found quickly when needed." },
    ],
  },
  "buxgalteriya-xizmatlari__telegram-bot": {
    intro: "A Telegram bot sends client companies automatic reminders about filing deadlines and required documents. For accounting firms in Tashkent, FRONTIX organises document exchange scattered across channels through a single bot.",
    bridge: "Instead of each client's documents being scattered across personal Telegram chats and email, the bot receives them in a set format and files them by client in the admin panel. As tax and filing deadlines approach, the bot sends automatic notifications, so accountants don't have to remind every client by hand.",
    faq: [
      { question: "Do clients have to send documents through the bot?", answer: "Yes, sending documents through the bot is orderly and fast, and the admin finds each client's documents instantly, saving time." },
      { question: "How are reminders configured?", answer: "Automatic notifications are set to go out a few days before each client's filing deadline, reducing the risk of missing it." },
    ],
  },
  "sugurta-agentliklari__website-development": {
    intro: "A website is an online resource that explains insurance types (car, property, life) and their terms in plain language. For insurance agencies in Tashkent, FRONTIX builds a website where clients choose the cover they need and submit a request without calling an agent.",
    bridge: "Instead of calling an agent to learn about car, property or life insurance, clients find each type explained on its own page with terms and a price range. SEO helps the site rank for relevant searches and brings in new clients, who know in advance which cover suits them.",
    faq: [
      { question: "Do we need detailed information about insurance types on the website?", answer: "Yes, a clear page for each type (car, property, life) reduces the need to call an agent with questions." },
      { question: "Can clients submit a request from the website?", answer: "Yes, clients submit a request for the insurance type they're interested in, and an agent follows up to clarify the terms." },
    ],
  },
  "sugurta-agentliklari__telegram-bot": {
    intro: "A Telegram bot sends automatic reminders before a policy expires and answers insurance questions quickly. For insurance agencies in Tashkent, FRONTIX builds an automatic notification system that stops policies from lapsing.",
    bridge: "Instead of cover lapsing because the client didn't know the expiry date, the bot sends a notification a few days beforehand, so renewal isn't forgotten. After a claim is filed, its status can be followed in the bot, so the client doesn't have to call and wait for an answer.",
    faq: [
      { question: "When is the policy expiry notification sent?", answer: "Automatic notifications go out a few days before expiry, giving the client time to renew." },
      { question: "Can claim status be followed through the bot?", answer: "Yes, every stage from acceptance to settlement is visible in the bot, so the client doesn't have to call the agent each time." },
    ],
  },
  "sugurta-agentliklari__business-automation": {
    intro: "CRM automation keeps all of an agent's clients and their policy dates in one system and tracks them automatically. For insurance agencies in Tashkent, FRONTIX turns a client base kept in personal notebooks into an orderly digital system.",
    bridge: "Instead of agents keeping their client base in a personal notebook or Excel, the CRM stores each client's policy type, term and history in one place. Workflow automation finds clients whose policies are expiring and lists them for the agent, so fewer policies lapse.",
    faq: [
      { question: "Is it hard to move the client base from Excel to a CRM?", answer: "No, the existing client list is imported, and from then on policies and communication history are kept on each client's card." },
      { question: "How can we see which clients' policies are expiring?", answer: "The reports and analytics section automatically lists clients nearing expiry, so the agent can reach out in advance." },
    ],
  },
  "notarial-vositachilik__telegram-bot": {
    intro: "A Telegram bot lets clients learn which document they need and what to bring in advance, avoiding extra trips. For notary and document services in Tashkent, FRONTIX builds an automatic information system so clients arrive prepared.",
    bridge: "Instead of arriving without the right paperwork and having to come back, the client picks a service in the bot and receives the list of required documents in advance. When the document is ready, an automatic notification is sent, so the client doesn't have to keep calling.",
    faq: [
      { question: "How does the bot tell clients which documents they need?", answer: "When a client selects a service, the bot automatically sends the document list for it, so everything is submitted in one visit." },
      { question: "Are clients notified when a document is ready?", answer: "Yes, as soon as it's ready the client gets an automatic Telegram message, so there's no need to call and ask." },
    ],
  },
  "notarial-vositachilik__business-automation": {
    intro: "CRM automation tracks each client's application, documents and service status step by step. For notary services in Tashkent, FRONTIX builds a solution that organises prices, timelines and statuses and makes the process transparent.",
    bridge: "Instead of quoting price and turnaround only over the phone, workflow automation stores standard times and prices for each service, so the admin can answer clients quickly. Each application's stage (received, in progress, ready) is marked in the CRM, so staff don't have to dig through papers to update a client.",
    faq: [
      { question: "Can clients know the price and timeline in advance?", answer: "Yes, standard prices and timelines for each service are in the system, so the admin can give an exact answer immediately." },
      { question: "How do staff know which stage a document is at?", answer: "Each application is marked stage by stage in the CRM (received, in progress, ready), visible at a glance." },
    ],
  },
  "notarial-vositachilik__website-development": {
    intro: "A website is an information source that shows notary services, required documents and prices in advance. For notary and document services in Tashkent, FRONTIX builds a clear website that helps clients prepare before they visit.",
    bridge: "Instead of several trips because clients didn't know what to bring, the site lists the required documents for every service, so the job gets done in one visit. With CMS integration, opening hours and busy days stay up to date, and clients know about the queue in advance.",
    faq: [
      { question: "Will the website list documents for each service?", answer: "Yes, the required documents are listed separately for each notary service, so clients arrive prepared." },
      { question: "Are opening hours and busy days shown on the website?", answer: "Yes, the schedule and busy days are updated through the CMS, so clients don't make wasted trips." },
    ],
  },
  "reklama-agentliklari__website-development": {
    intro: "A website is an online shop window that presents an agency's past projects, prices and services as a professional portfolio. For advertising and marketing agencies in Tashkent, FRONTIX builds a solution where clients rely on a complete, credible website rather than Instagram alone.",
    bridge: "Instead of relying only on Instagram to see an agency's past work, new clients find a full portfolio, work by category and client reviews on dedicated pages. Custom UI/UX design makes the portfolio attractive and fast, increasing clients' trust in the agency.",
    faq: [
      { question: "How is the portfolio shown on the website?", answer: "Each project appears as its own card with a description and result, so clients can judge the agency's quality without Instagram." },
      { question: "How does the website bring in new clients?", answer: "SEO helps the site appear for searches like \"advertising agency in Tashkent\", bringing enquiries from beyond Instagram." },
    ],
  },
  "reklama-agentliklari__business-automation": {
    intro: "CRM automation tracks the stage (brief, design, approval, printing) and deadline of every client project in one system. For advertising agencies in Tashkent, FRONTIX turns a hand-kept project list into an orderly system that doesn't get mixed up.",
    bridge: "Instead of project stages being invisible to the client, workflow automation marks each stage so the admin can show the status instantly when asked. Several clients' projects and deadlines are no longer on paper but in one CRM list, so deadlines don't get confused.",
    faq: [
      { question: "How does a client stay informed about their project?", answer: "Project stages (brief, design, approval, printing) are marked in the CRM, so the admin can report the status quickly and accurately." },
      { question: "How does tracking several project deadlines get easier?", answer: "All projects and deadlines are listed in one system, and reports and analytics show which deadlines are coming up." },
    ],
  },
  "reklama-agentliklari__telegram-bot": {
    intro: "A Telegram bot automatically updates clients on project stages and campaign results. For advertising agencies in Tashkent, FRONTIX builds automatic reporting so clients never have to message to ask about their project.",
    bridge: "Instead of clients messaging to ask what stage their project is at, the bot notifies them automatically when key stages change. Instead of campaign results (views, clicks) being sent irregularly, the bot delivers a short weekly or monthly report automatically, so clients don't have to chase it.",
    faq: [
      { question: "Do clients get a message automatically when the project stage changes?", answer: "Yes, when the project reaches a key stage the client receives an automatic Telegram notification — no need to ask separately." },
      { question: "Can campaign results be received through the bot?", answer: "Yes, a short report prepared in the admin panel is sent to the client through the bot automatically and regularly (for example, weekly)." },
    ],
  },
  "veterinariya-klinikalari__website-development": {
    intro: "A website is a digital shop window that puts complete clinic information, opening hours and contact channels in one place. For veterinary clinics in Tashkent, FRONTIX builds a clear, fast website so owners know immediately which clinic is open in an emergency.",
    bridge: "When a pet falls ill in the evening or on a holiday, the owner sees the clinic's exact hours and on-duty vet on the website instead of calling several numbers. Fast loading means the site opens even on a slow connection, which matters in an emergency.",
    faq: [
      { question: "Can the clinic's opening hours be shown on the website in real time?", answer: "Yes, with CMS integration the admin changes opening hours or the on-call rota at any time and the site updates instantly." },
      { question: "How does the website appear in search engines?", answer: "SEO optimisation sets the site up to rank highly for searches like \"veterinary clinic in Tashkent\"." },
    ],
  },
  "veterinariya-klinikalari__telegram-bot": {
    intro: "A Telegram bot is an automatic system that lets pet owners book without calling and get vaccination reminders. For veterinary clinics in Tashkent, FRONTIX uses a bot to keep clients that would otherwise be lost to a busy phone line.",
    bridge: "With phone-only booking, clients wait at peak hours; in the bot they choose a free slot and book in a few taps. As the next vaccination or parasite treatment approaches, the bot sends an automatic notification, so nothing is missed.",
    faq: [
      { question: "Can the bot send separate reminders for several pets?", answer: "Yes, each pet gets its own profile, and vaccination or treatment dates are tracked per profile." },
      { question: "Can the bot be used in an emergency?", answer: "Yes, the bot quickly shares the on-duty vet and the clinic's current status, so the owner gets an answer without calling." },
    ],
  },
  "veterinariya-klinikalari__business-automation": {
    intro: "CRM automation keeps every pet's vaccination and treatment history in one system. For veterinary clinics in Tashkent, FRONTIX replaces paper cards with a central client base so any vet can see the history instantly.",
    bridge: "With history on a paper card, another vet has to ask for everything again; with CRM integration it lives in one profile any vet can open. Workflow automation sets the next vaccination date automatically and alerts the responsible staff member when it's time.",
    faq: [
      { question: "Is the client base shared across several branches?", answer: "Yes, API integrations connect all branches to one database, so a client's history is visible whichever branch they visit." },
      { question: "Can a report show which pets need vaccinating?", answer: "Yes, the reports and analytics section automatically lists vaccinations that are coming up or overdue." },
    ],
  },
  "stomatologiya-klinikalari__website-development": {
    intro: "A website is a digital source that gives patients clear information about dental services, prices and dentists. For dental clinics in Tashkent, FRONTIX builds a website showing price ranges by service, so patients don't have to call first.",
    bridge: "Because prices depend on the state of the teeth and stay unclear until a call, patients often go elsewhere — price ranges by service and clear navigation through custom UI/UX design ease this problem. With CMS integration the clinic updates prices and the list of dentists itself.",
    faq: [
      { question: "Can each dentist have their own page about their speciality?", answer: "Yes, with CMS integration each dentist gets a profile page showing their experience and focus." },
      { question: "Can the website rank for searches like \"implant price in Tashkent\"?", answer: "Yes, SEO with dedicated pages for each service type is tailored to exactly these searches." },
    ],
  },
  "stomatologiya-klinikalari__telegram-bot": {
    intro: "A Telegram bot sends patients automatic reminders about treatment stages and their annual check-up. For dental clinics in Tashkent, FRONTIX follows multi-stage treatment through a bot so patients don't forget.",
    bridge: "Multi-stage treatment plans (such as implants or braces) are only explained verbally and patients forget the next step — in the bot every stage and date is saved in writing and reminders go out automatically. The bot also tells patients on time when their annual check-up is due.",
    faq: [
      { question: "Can the bot show which stage of the treatment plan the patient is at?", answer: "Yes, the dentist marks the current stage in the admin panel, and the bot reminds the patient of the next visit date." },
      { question: "Can treatment be paid for stage by stage through the bot?", answer: "Yes, with payment integration each treatment stage can be paid for separately in the bot." },
    ],
  },
  "stomatologiya-klinikalari__business-automation": {
    intro: "CRM automation brings a patient's treatment history, X-rays and plan together in one system. For dental clinics in Tashkent, FRONTIX keeps the queue and patient data in order even when the dentist is busy.",
    bridge: "When the dentist is busy with the previous patient, the next one doesn't know how long they'll wait — workflow automation tracks queue times and notifies patients of delays. The CRM keeps all treatment history and X-rays in one profile, so the dentist doesn't have to ask again.",
    faq: [
      { question: "Can X-rays be attached in the system?", answer: "Yes, X-rays and other documents can be attached to the patient's CRM profile and viewed by the dentist at any time." },
      { question: "Can we identify patients who missed their annual check-up?", answer: "Yes, the reports and analytics section automatically lists patients whose last visit was more than a year ago." },
    ],
  },
  "dorixonalar__website-development": {
    intro: "A website is an online source that quickly tells customers about a pharmacy's branches, opening hours and medicine availability. For pharmacies in Tashkent, FRONTIX builds a fast, accurate website so customers can find the right branch without calling.",
    bridge: "Customers can't find the nearest night-time or 24-hour branch online — the website shows a branch map and hours, and fast loading means this opens instantly even in an emergency. With CMS integration the pharmacy keeps branch details up to date itself.",
    faq: [
      { question: "Can the website show which branch is open at night?", answer: "Yes, with CMS integration each branch has its own opening hours, including a night mode." },
      { question: "Can the website appear for \"pharmacy near me\" searches?", answer: "Yes, SEO with separate pages for each branch improves visibility in local search results." },
    ],
  },
  "dorixonalar__telegram-bot": {
    intro: "A Telegram bot is an automatic system where customers search for a medicine and quickly find out whether it's available. For pharmacies in Tashkent, FRONTIX lets customers get an answer from a bot instead of calling a branch.",
    bridge: "Instead of calling or going round several pharmacies, the customer types the medicine name into the bot and instantly sees which branch has it. When a regular medicine is about to run out, the bot sends an automatic notification, so the customer isn't left without it.",
    faq: [
      { question: "Can prescription medicines be pre-ordered through the bot?", answer: "Yes, with the order-taking feature the customer sends a photo of the prescription and reserves the medicine in advance." },
      { question: "Can customers pay through the bot?", answer: "Yes, with payment integration the customer pays in advance and picks the medicine up ready at the branch." },
    ],
  },
  "dorixonalar__online-ordering": {
    intro: "An online ordering system lets customers choose medicines on the website and order delivery or pick-up from a branch. For pharmacies in Tashkent, FRONTIX makes it possible to pre-order prescription medicines too.",
    bridge: "Without a way to pre-order prescription medicines, customers queue at the branch — with a cart and checkout they order online and simply collect at the branch. Warehouse integration shows in real time which branch has the medicine in stock, so customers don't make wasted trips.",
    faq: [
      { question: "Are ordered medicines delivered to the home?", answer: "Yes, with delivery tracking the customer can follow where their order is in real time." },
      { question: "Can past orders be repeated?", answer: "Yes, from the order history section the customer re-orders their regular medicines in one tap." },
    ],
  },
  "optika-salonlari__website-development": {
    intro: "A website is an online shop window that shows an optical store's services, frame collection and prices visually. For optical stores in Tashkent, FRONTIX builds a quality website so customers can browse available models without visiting.",
    bridge: "With no systematic way to announce new collections, customers miss them — on the website new collections get their own section and are presented attractively with custom UI/UX design. With CMS integration the store adds new products itself.",
    faq: [
      { question: "Can customers book an eye test online?", answer: "Yes, an online request form is placed on the site, and customers book a test by choosing a date and time." },
      { question: "Does the website work well on phones?", answer: "Yes, the site is built to adapt to every device and, thanks to fast loading, opens quickly even on mobile data." },
    ],
  },
  "optika-salonlari__telegram-bot": {
    intro: "A Telegram bot automatically tells customers when their glasses or lenses are ready. For optical stores in Tashkent, FRONTIX replaces staff phone calls with a bot, delivering updates faster and more reliably.",
    bridge: "When staff notify customers by hand, messages are sometimes late or forgotten — the bot sends an automatic notification whenever the order status changes. The frame model and lens type customers can't remember are saved in their bot profile and found quickly for the next order.",
    faq: [
      { question: "Can prescription details be stored in the bot?", answer: "Yes, the customer's eye test results are saved to their bot profile and not asked for again at the next visit." },
      { question: "How are customers told their order is ready?", answer: "Automatic notifications tell the customer the order is ready and when it can be collected." },
    ],
  },
  "optika-salonlari__business-automation": {
    intro: "CRM automation stores a customer's eye test results and order history in one profile. For optical stores in Tashkent, FRONTIX digitises prescriptions that get lost on paper and makes each visit easier to handle.",
    bridge: "Eye test results are only given on paper, and a lost one means a new test — the CRM keeps results in the customer's profile permanently, and staff can open them at any time. Workflow automation can send news of a new collection or discount to all customers at once.",
    faq: [
      { question: "Can a prescription from several years ago be found?", answer: "Yes, the CRM keeps all of a customer's past test results in chronological order." },
      { question: "Can we see which frame models sell best?", answer: "Yes, the reports and analytics section shows sales by product, which helps when choosing a new collection." },
    ],
  },
  "massaj-va-spa-markazlari__telegram-bot": {
    intro: "A Telegram bot shows session booking and therapist availability in one place. For massage and spa centres in Tashkent, FRONTIX uses a bot to keep clients who would otherwise be lost when the phone line is busy.",
    bridge: "With phone-only booking, clients can't get through at peak hours and go elsewhere — in the bot they see free times and book themselves. Remaining sessions on a package used to be marked on a paper card, causing disputes; now the count is kept automatically in the bot profile.",
    faq: [
      { question: "Can clients see in the bot which therapist is free?", answer: "Yes, the bot shows every therapist's availability, and clients book with the specialist they want." },
      { question: "Can package sessions be tracked through the bot?", answer: "Yes, the client's remaining sessions are saved in their bot profile and update automatically with each booking." },
    ],
  },
  "massaj-va-spa-markazlari__website-development": {
    intro: "A website gives clients a full picture of a spa's services, prices and therapists. For massage and spa centres in Tashkent, FRONTIX builds a quality website where clients see services and prices without calling.",
    bridge: "With several therapists' availability not visible in one place, the receptionist checks each schedule separately — with booking built into the website, clients see therapists and free times and choose themselves. Custom UI/UX design presents services and prices clearly.",
    faq: [
      { question: "Can service prices be shown on the website?", answer: "Yes, with CMS integration the centre enters and updates the price of each service itself." },
      { question: "Can the website rank for \"massage in Tashkent\" searches?", answer: "Yes, SEO with dedicated pages per service improves visibility for such searches." },
    ],
  },
  "massaj-va-spa-markazlari__business-automation": {
    intro: "CRM automation stores a client's health conditions, package and visit history in one system. For massage and spa centres in Tashkent, FRONTIX moves paper records into a digital database for safe, orderly management.",
    bridge: "Clients' health conditions and contraindications (such as pregnancy or allergies) weren't recorded and had to be asked verbally every time — the CRM keeps them in the client's profile, so therapists don't ask again. Workflow automation spots clients whose packages are running out and sends them a reminder.",
    faq: [
      { question: "Can the therapist see a client's contraindications?", answer: "Yes, health notes from the client's CRM profile are visible to the therapist before the session." },
      { question: "Can we identify clients whose package has run out?", answer: "Yes, the reports and analytics section automatically lists clients with few sessions left." },
    ],
  },
  "uy-hayvonlari-dokonlari__telegram-bot": {
    intro: "A Telegram bot combines stock checks for food and accessories with grooming bookings in one place. For pet stores in Tashkent, FRONTIX gives customers quick answers from a bot instead of calling the store.",
    bridge: "Grooming could only be booked by phone, so at peak hours customers went elsewhere — in the bot they see free times and book themselves. There's no longer any need to call about food or accessory stock: the bot answers by product name.",
    faq: [
      { question: "Can customers get food advice for their pet in the bot?", answer: "Yes, the bot filters product categories by animal type and age, so customers can find what suits their pet." },
      { question: "Can grooming be booked through the bot?", answer: "Yes, with the order-taking feature customers choose a date and time for grooming." },
    ],
  },
  "uy-hayvonlari-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers choose food and accessories on the website and order delivery or pick-up. For pet stores in Tashkent, FRONTIX lets customers find and order what they need without visiting the store.",
    bridge: "Customers used to call or visit to check whether food or accessories were in stock — with cart and checkout they browse products, check availability and order online. Warehouse integration shows stock in real time, so customers never order what isn't there.",
    faq: [
      { question: "Is re-ordering regular food convenient?", answer: "Yes, from the order history section the customer repeats a previous order in one tap." },
      { question: "Can customers track when the order will arrive?", answer: "Yes, with delivery tracking customers follow their order status in real time." },
    ],
  },
  "uy-hayvonlari-dokonlari__business-automation": {
    intro: "CRM automation stores information about each customer and their pet, including food purchase history. For pet stores in Tashkent, FRONTIX makes it possible to remind regular customers automatically before their pet's food runs out.",
    bridge: "Nobody tracked when a regular customer's food would run out, so no reminders went out — workflow automation estimates the run-out date from the last purchase and pack size and sends a reminder automatically. The CRM keeps each pet's species, breed and preferred products, making advice easier.",
    faq: [
      { question: "Does the system work out by itself who needs a food reminder?", answer: "Yes, workflow automation calculates the reminder time from the last purchase date and typical consumption." },
      { question: "Can we see statistics by animal type?", answer: "Yes, the reports and analytics section shows which products sell most for which animals." },
    ],
  },
  "qurilish-va-tamirlash__website-development": {
    intro: "A website is a digital shop window that brings together your completed work, prices and contact details. For construction and renovation companies in Tashkent, FRONTIX builds a website that earns client trust without relying on word of mouth.",
    bridge: "Instead of clients being unable to find reliable information on past projects and prices, the site keeps a gallery of completed projects — with photos, price per square metre and duration — up to date through the CMS, and SEO raises visibility for searches like \"renovation in Tashkent\".",
    faq: [
      { question: "How can completed projects be shown on the website?", answer: "A portfolio section is created with photos, area, duration and price range for each project, which you update yourself through the CMS." },
      { question: "Can clients request an estimate on the website?", answer: "Yes, through a form with the project type and approximate scope, clients send an estimate request that reaches you as a message." },
    ],
  },
  "qurilish-va-tamirlash__business-automation": {
    intro: "CRM automation tracks every construction site's stages, crews and materials in one system. For construction companies in Tashkent, FRONTIX lets you see project status instantly in the system instead of asking over the phone.",
    bridge: "Instead of clients not seeing what stage their project is at, workflow automation splits each site into estimate → materials → works → handover and shows the current status, while crews and materials across several sites are tracked in one CRM table — nobody has to call around anymore.",
    faq: [
      { question: "Does the system help track several sites at once?", answer: "Yes, each site is shown as its own card with the assigned crew, stage and deadline." },
      { question: "Can material usage be seen in reports?", answer: "Yes, materials allocated to each site and their usage are compared in the reports and analytics section." },
    ],
  },
  "qurilish-va-tamirlash__custom-software": {
    intro: "Custom software is a system built around your company's estimating and cost calculation process. For construction companies in Tashkent, FRONTIX builds an estimate calculator that eliminates the errors of manual Excel calculations.",
    bridge: "Instead of errors piling up when estimates are recalculated after material price changes, a system built on a custom architecture centralises the price database and automatically recalculates every related estimate when a price changes — and because it's scalable, it copes as the number of sites grows.",
    faq: [
      { question: "Can the system work with our existing price database?", answer: "Yes, the system is built on a custom architecture around your material and labour prices, and it can be updated at any time." },
      { question: "Can new features be added later?", answer: "Yes, long-term support covers adding new project types or report formats." },
    ],
  },
  "kochmas-mulk-agentliklari__website-development": {
    intro: "A website is a platform that gathers property listings in one place with filtering. For real estate agencies in Tashkent, FRONTIX builds a website where clients can search by price, area and number of rooms.",
    bridge: "Instead of listings posted by hand on several sites and updated late, all listings are managed from one CMS panel and a price change is edited in one place. Instead of calling the agent, clients find a suitable home on the site using filters for price, area and rooms.",
    faq: [
      { question: "Do we have to repost each listing on several sites?", answer: "No, you enter the listing once through the CMS, the site shows it automatically, and price or status changes are made only there." },
      { question: "How do clients filter properties on the site?", answer: "By price range, area, number of rooms and size — a list of matching listings appears in seconds." },
    ],
  },
  "kochmas-mulk-agentliklari__telegram-bot": {
    intro: "A Telegram bot automates viewing bookings and new listing alerts. For real estate agencies in Tashkent, FRONTIX solves the problem of arranging viewings only by phone.",
    bridge: "Instead of phone-only viewing bookings with clashing times, the bot shows clients free slots and they pick a suitable one; when a listing matching their criteria appears, an automatic notification is sent.",
    faq: [
      { question: "How does a client book a viewing in the bot?", answer: "The bot shows free slots, the client picks one, and the agent is notified automatically." },
      { question: "Can the bot announce new listings?", answer: "Yes, when a new listing matches the client's price and area criteria, the bot sends an automatic notification." },
    ],
  },
  "kochmas-mulk-agentliklari__business-automation": {
    intro: "CRM automation tracks the stages of a deal between seller and buyer from start to finish. For real estate agencies in Tashkent, FRONTIX keeps agreement, paperwork and notarisation deadlines in one place.",
    bridge: "Instead of deal stages tracked on paper or from memory with deadlines getting mixed up, workflow automation splits each deal into agreement → document collection → notarisation and shows the current status, while the CRM keeps a full history for every client and property — no deal slips through.",
    faq: [
      { question: "Does the system help track several deals at once?", answer: "Yes, each deal is shown as its own card with the current stage and next step." },
      { question: "Are there reminders so document deadlines aren't missed?", answer: "Yes, as notarisation or document submission deadlines approach, the system reminds the responsible staff member automatically." },
    ],
  },
  "usta-xizmatlari__telegram-bot": {
    intro: "A Telegram bot takes urgent call-outs and assigns an available tradesperson immediately. For plumbers, electricians and handyman services in Tashkent, FRONTIX means customers no longer hunt through random ads when, say, a pipe bursts.",
    bridge: "Instead of customers struggling to find a reliable tradesperson in an emergency, the bot asks for the problem type and assigns a free tradesperson straight away; once they set off, an automatic notification gives the estimated arrival time, so the customer doesn't wait all day.",
    faq: [
      { question: "How does the bot handle an urgent call-out?", answer: "The customer types or picks the problem type, and the bot instantly finds a free tradesperson and confirms they're on their way." },
      { question: "Can customers know in advance when the tradesperson will arrive?", answer: "Yes, once the job is accepted, an automatic notification gives the estimated arrival time." },
    ],
  },
  "usta-xizmatlari__business-automation": {
    intro: "CRM automation keeps completed jobs, warranty periods and tradespeople's availability in one system. For handyman services in Tashkent, FRONTIX turns a verbal warranty into a written, verifiable one.",
    bridge: "Instead of a verbal warranty and disputes when a problem returns, the CRM saves the warranty date for every job automatically so it can be checked instantly when a customer calls; and instead of availability being invisible, workflow automation shows every tradesperson's status in one table and routes jobs to whoever is free.",
    faq: [
      { question: "Can the customer check the warranty period?", answer: "Yes, the warranty date and terms are stored under the job number, and staff can show them at any time." },
      { question: "How are jobs distributed among tradespeople?", answer: "Each tradesperson's status (busy or free) is visible in the system, and new jobs go automatically to someone who's free." },
    ],
  },
  "usta-xizmatlari__website-development": {
    intro: "A website is a source of trust that brings services, prices and customer reviews together in one place. For plumbers, electricians and handyman services in Tashkent, FRONTIX provides a verifiable, professional website instead of random ads.",
    bridge: "Instead of customers failing to find a reliable tradesperson in an emergency, the site shows the list of services, approximate prices and examples of work, raising trust among visitors from search; SEO ranks the site for urgent searches like \"call a plumber in Tashkent\".",
    faq: [
      { question: "Do prices have to be shown on the website?", answer: "Not necessarily, but showing an approximate price range builds trust and cuts unnecessary calls." },
      { question: "Why does fast loading matter?", answer: "In an emergency the customer opens the site on their phone, and fast loading gets them to your contact details without waiting." },
    ],
  },
  "dizayn-studiyalari__website-development": {
    intro: "A website is a digital portfolio that sorts completed projects by style and room type. For architecture and interior design studios in Tashkent, FRONTIX builds a structured catalogue instead of scattered Instagram photos.",
    bridge: "Instead of projects posted randomly on Instagram with no way to search by style or room, each project is tagged by style, area and room type through the CMS, and clients use filters to find work close to their taste; custom UI/UX design presents the portfolio in line with the studio's brand.",
    faq: [
      { question: "How do we move the portfolio from Instagram to the website?", answer: "Each project is entered once through the CMS with photos, style and room type, then appears on the site as an organised catalogue." },
      { question: "How do clients find the style that suits them?", answer: "Filtering by style — modern, classic, minimalist and so on — quickly shows matching projects." },
    ],
  },
  "dizayn-studiyalari__telegram-bot": {
    intro: "A Telegram bot delivers project stages and files in order through a single channel. For design studios in Tashkent, FRONTIX presents sketches, 3D visualisations and final drawings to the client in a clear sequence.",
    bridge: "Instead of project stages being presented in a confusing order, the bot automatically tells the client when each stage — sketch, 3D visualisation, final drawings — is ready and asks for approval; instead of files scattered across Telegram, email and WhatsApp, everything goes through one bot channel, so versions don't get mixed up.",
    faq: [
      { question: "How does the client know what stage the project is at?", answer: "As each stage — sketch, 3D visualisation, final drawings — is ready, the bot automatically messages the client and asks for approval." },
      { question: "Will we have to search for files across channels?", answer: "No, all files and approvals are kept in one bot chat, so versions never get confused." },
    ],
  },
  "dizayn-studiyalari__business-automation": {
    intro: "CRM automation tracks several clients' projects and deadlines in one system. For design studios in Tashkent, FRONTIX turns deadlines kept in a notebook into a central schedule.",
    bridge: "Instead of projects and deadlines tracked by hand or from memory and forgotten, workflow automation shows each project with its stages and deadline on one panel; reports and analytics reveal straight away which project is running late, so the designer can focus on it in time.",
    faq: [
      { question: "How do I keep track of several projects at once?", answer: "Each project is shown as its own card with the deadline, current stage and responsible designer." },
      { question: "Does the system flag projects that are running late?", answer: "Yes, projects nearing or past their deadline are highlighted separately in the reports section." },
    ],
  },
  "ishlab-chiqarish-korxonalari__business-automation": {
    intro: "CRM automation tracks orders and production stages in one system. For small manufacturers in Tashkent, FRONTIX shows the manager in real time which stage every order is at.",
    bridge: "Instead of planning orders and delivery dates by hand with no clear priorities when several arrive, workflow automation queues each order by its deadline; whether a product is at raw material prep, processing or packing is visible to the manager in the CRM instantly.",
    faq: [
      { question: "How does the system set priorities when several orders arrive?", answer: "Each order is queued automatically by its delivery date, and the manager sees this in the schedule." },
      { question: "Who updates the production stage, and how?", answer: "Shop-floor staff mark each stage as done in the system, and the manager follows the order status in real time." },
    ],
  },
  "ishlab-chiqarish-korxonalari__custom-software": {
    intro: "Custom software calculates raw material and finished goods stock in real time. For small manufacturers in Tashkent, FRONTIX closes the gap between stock in Excel and what's actually in the warehouse.",
    bridge: "Instead of Excel stock figures that don't match reality, a system built on a custom architecture records every movement in and out automatically and updates stock in real time; instead of exchanging orders and reports on paper, distributors enter their orders directly into the system through API connections.",
    faq: [
      { question: "How does the system show the real warehouse stock?", answer: "As soon as a movement in or out is recorded, stock is recalculated automatically, so paper and reality stop diverging." },
      { question: "Can distributors connect to the system directly?", answer: "Yes, through API connections a separate access is created where distributors enter orders and view reports." },
    ],
  },
  "ishlab-chiqarish-korxonalari__website-development": {
    intro: "A website is an online catalogue that presents product types, technical specs and partnership terms. For small manufacturers in Tashkent, FRONTIX lets new partners and distributors get product information without calling.",
    bridge: "Instead of orders and reports exchanged on paper or by phone with data getting lost, the site answers new partners' first questions with a catalogue showing product types, specs and minimum order quantities; with CMS integration the range and prices are updated promptly.",
    faq: [
      { question: "How do we put our product catalogue on the website?", answer: "Each product type is entered through the CMS with photos, specs and minimum order quantity, and can be updated at any time." },
      { question: "Can new distributors get in touch through the website?", answer: "Yes, through a partnership request form new distributors contact you directly, and the request arrives as a message." },
    ],
  },
  "tadbir-va-toy-agentliklari__website-development": {
    intro: "A website is a professional platform showing an agency's past events, services and prices in one place. For wedding and event agencies in Tashkent, FRONTIX lays out a gallery of past events in order and builds client trust.",
    bridge: "Instead of hunting for a portfolio across scattered Instagram posts, clients browse an organised gallery on the website, filtering by wedding type, venue and style. Custom UI/UX design gives each event its own page, setting the agency apart from competitors.",
    faq: [
      { question: "Can event photos be shown by category on the website?", answer: "Yes, separate gallery sections are created by type — weddings, corporate events, birthdays and so on." },
      { question: "Can clients find prices and packages on the website?", answer: "Yes, service packages and approximate prices are shown clearly, so clients can choose in advance." },
    ],
  },
  "tadbir-va-toy-agentliklari__telegram-bot": {
    intro: "A Telegram bot automatically organises event dates, budgets and client requirements. For event agencies in Tashkent, FRONTIX makes it possible to handle several clients at once, accurately and without confusion.",
    bridge: "Instead of several clients' dates, budgets and requests being written in a notebook and mixed up, each client is recorded in the bot as a separate order and shown neatly in the admin panel. As the event approaches, the client gets an automatic reminder.",
    faq: [
      { question: "Can several clients' event dates be seen in one place?", answer: "Yes, all orders are shown in the admin panel, sorted by date and status." },
      { question: "Can clients leave their requirements (budget, guest count) in the bot?", answer: "Yes, the bot collects the necessary details in a questionnaire and passes them to the agency in order." },
    ],
  },
  "tadbir-va-toy-agentliklari__business-automation": {
    intro: "CRM automation coordinates contractors and payments in one system. For event agencies in Tashkent, FRONTIX organises work with photographers, decorators and caterers and keeps payment deadlines under control.",
    bridge: "Instead of coordinating contractors only by phone and losing agreements, the CRM assigns each contractor a task and deadline. Deposits and remaining balances are tracked through workflow automation, so payment never turns into a dispute on the day of the event.",
    faq: [
      { question: "Can the photographer, decorator and caterer be managed in one place?", answer: "Yes, each contractor gets their own tasks and deadlines, all visible in one system." },
      { question: "Can deposits and remaining balances be tracked automatically?", answer: "Yes, the payment status and outstanding amount for each order are shown clearly in the system." },
    ],
  },
  "fotostudiyalar__website-development": {
    intro: "A website is a showcase platform presenting a studio's work, services and prices. For photo studios in Tashkent, FRONTIX lays out the portfolio and packages clearly so clients can choose in advance.",
    bridge: "Instead of phone-only bookings where clients keep being offered taken slots, the site lets clients book directly through a form right after browsing the photographer's work. Fast loading means clients on mobile see the photos quickly and in good quality.",
    faq: [
      { question: "Can different shoot styles be shown separately on the website?", answer: "Yes, portraits, weddings, product shoots and other areas are presented in their own sections." },
      { question: "Can clients see prices and packages on the website in advance?", answer: "Yes, each package is shown clearly with its description and price." },
    ],
  },
  "fotostudiyalar__telegram-bot": {
    intro: "A Telegram bot manages photographers' schedules and client bookings automatically. For photo studios in Tashkent, FRONTIX shows free times in real time and prevents two jobs landing on the same day.",
    bridge: "Instead of phone-only bookings and repeatedly offered taken slots, clients see available dates and hours in the bot and choose themselves. Photographer availability is visible centrally in the admin panel, so two jobs never clash on one day.",
    faq: [
      { question: "Can clients see the studio's free times in the bot?", answer: "Yes, clients see available dates and hours in the bot and pick a suitable time themselves." },
      { question: "Are finished photos sent to clients through the bot?", answer: "Yes, once the photos are ready the bot automatically sends the client a notification and a link." },
    ],
  },
  "fotostudiyalar__business-automation": {
    intro: "CRM automation keeps photographers' schedules, orders and delivery of materials under control. For photo studios in Tashkent, FRONTIX tracks every order stage and keeps deadlines in order.",
    bridge: "Instead of clients worrying because editing times aren't set, workflow automation assigns each order its stages (shoot, retouching, delivery) and deadlines. Several photographers' availability is visible centrally through the CRM.",
    faq: [
      { question: "Can photo editing progress be tracked in the CRM?", answer: "Yes, every order is tracked through the shoot, retouching and delivery stages." },
      { question: "Can several photographers' availability be seen in one system?", answer: "Yes, all photographers' schedules are shown centrally, preventing booking clashes." },
    ],
  },
  "musiqa-va-sanat-maktablari__website-development": {
    intro: "A website informs parents about subjects, teachers and open places. For music and art schools in Tashkent, FRONTIX lets parents choose the right subject without calling.",
    bridge: "Instead of parents calling every time to check for places in an instrument or subject, each subject (piano, guitar, painting) has its own page on the site with a description and open places. With CMS integration the school updates place counts quickly itself.",
    faq: [
      { question: "Can teacher information be shown for each subject?", answer: "Yes, each teacher's experience and subject are presented on their own page." },
      { question: "Can the school update open places itself?", answer: "Yes, through the CMS school staff edit open places and group information themselves." },
    ],
  },
  "musiqa-va-sanat-maktablari__telegram-bot": {
    intro: "A Telegram bot automatically sends parents updates on attendance, progress and events. For music and art schools in Tashkent, FRONTIX delivers information about each child in real time.",
    bridge: "Instead of parents not getting regular updates on attendance and progress, the teacher enters a short report in the bot after each lesson and parents get an automatic notification. Concert and recital dates are sent to all parents at once.",
    faq: [
      { question: "Can I find out through the bot whether my child attended?", answer: "Yes, after each lesson parents receive an automatic attendance notification." },
      { question: "Do announcements about concerts and recitals come through the bot?", answer: "Yes, all parents automatically receive the event date and venue at the same time." },
    ],
  },
  "musiqa-va-sanat-maktablari__business-automation": {
    intro: "CRM automation manages teachers' schedules, room bookings and student information. For music and art schools in Tashkent, FRONTIX prevents room and time clashes.",
    bridge: "Instead of assigning teachers and rooms by hand with two groups ending up in one room, workflow automation assigns each group a room and time and warns of clashes in advance. Each student's attendance and progress are kept in one CRM profile.",
    faq: [
      { question: "Can the CRM prevent room and teacher clashes?", answer: "Yes, when a new group is added the system warns automatically if the room or teacher is already booked." },
      { question: "Can each student's progress history be viewed separately?", answer: "Yes, each student's profile stores attendance and progress results over time." },
    ],
  },
  "haydovchilik-maktablari__website-development": {
    intro: "A website gives clear information about the course programme, prices and training process. For driving schools in Tashkent, FRONTIX shows students all the conditions clearly before they sign up.",
    bridge: "Instead of an unclear theory and practice schedule, the site explains the course stages, duration and price in detail, so students know everything in advance. SEO helps the school rank highly for searches like \"driving courses Tashkent\".",
    faq: [
      { question: "Can students see the course price and duration in advance?", answer: "Yes, the duration of the theory and practice stages and the price are shown clearly on the site." },
      { question: "Can students register for a course through the website?", answer: "Yes, students submit the required documents and details through the form on the site." },
    ],
  },
  "haydovchilik-maktablari__telegram-bot": {
    intro: "A Telegram bot tracks lesson schedules, instructor availability and practice hours. For driving schools in Tashkent, FRONTIX delivers every lesson to students clearly and on time.",
    bridge: "Instead of arranging practice with an instructor only by phone with repeated calls, students see the instructor's free times in the bot and choose an hour themselves. The bot also shows automatically how many practice hours remain before the licence exam.",
    faq: [
      { question: "Can I choose my practice time myself through the bot?", answer: "Yes, the instructor's free hours are shown in the bot, and students book a suitable time." },
      { question: "Does the bot show how many practice hours are left?", answer: "Yes, each student's practice hours are counted and the remaining hours are shown in the bot." },
    ],
  },
  "haydovchilik-maktablari__business-automation": {
    intro: "CRM automation manages student schedules, instructor availability and payments. For driving schools in Tashkent, FRONTIX keeps accurate records of payments and practice.",
    bridge: "Instead of disputes because the balance isn't clear when fees are paid in instalments, the CRM automatically calculates each student's paid and remaining amount. Theory and practice schedules are shown to each student individually through workflow automation.",
    faq: [
      { question: "Can the CRM show a student's remaining balance precisely?", answer: "Yes, each student's paid and outstanding amounts are calculated automatically in the system." },
      { question: "Can instructors' availability be seen in one place?", answer: "Yes, all instructors' schedules and availability are shown centrally." },
    ],
  },
  "onlayn-talim-platformalari__website-development": {
    intro: "A website presents courses, the curriculum and the creator professionally. For online course creators in Tashkent, FRONTIX builds a credible, professional sales platform instead of personal Instagram DMs.",
    bridge: "Instead of buying a course through personal Instagram DMs, which feels informal, customers see the curriculum, creator information and reviews on the website and buy with confidence. Custom UI/UX design presents the course as a professional product.",
    faq: [
      { question: "Can the course curriculum and topics be shown in detail on the website?", answer: "Yes, each course's curriculum, duration and topics are presented on their own page." },
      { question: "Does the website run fast on mobile?", answer: "Yes, thanks to fast loading customers browse course pages quickly and comfortably on their phones." },
    ],
  },
  "onlayn-talim-platformalari__telegram-bot": {
    intro: "A Telegram bot automates course sign-ups, reminders and announcements. For online course creators in Tashkent, FRONTIX moves customer communication from Instagram DMs to a structured bot.",
    bridge: "Instead of having no way to remind students who haven't finished, the bot automatically messages students who haven't watched lessons for a set number of days. When a new course or discount launches, past customers get an automatic notification through the bot at the same time.",
    faq: [
      { question: "Does the bot remind students who haven't finished the course?", answer: "Yes, students who haven't logged in to lessons for a set period receive an automatic reminder." },
      { question: "Do past customers hear about new courses?", answer: "Yes, all past customers receive a message about new courses or discounts through the bot at once." },
    ],
  },
  "onlayn-talim-platformalari__online-ordering": {
    intro: "An online ordering system automatically manages course payments and access to video lessons. For online course creators in Tashkent, FRONTIX grants access to lessons automatically after payment, not by hand.",
    bridge: "Instead of the creator having to grant access to video lessons by hand after payment, the cart and payment system opens access automatically once payment is confirmed. Each customer's purchased courses are recorded precisely in the order history.",
    faq: [
      { question: "Does access to video lessons open automatically after payment?", answer: "Yes, once payment is confirmed the customer is given access automatically — no manual step needed." },
      { question: "Can we track which courses a customer has bought?", answer: "Yes, every customer's purchase history is stored in the system and available at any time." },
    ],
  },
  "bolalar-bogchalari__website-development": {
    intro: "A website informs parents about a kindergarten's groups, prices and open places. For kindergartens in Tashkent, FRONTIX lets parents find what they need without calling.",
    bridge: "Instead of new parents calling several kindergartens about places and prices, the site clearly shows groups, prices and the number of open places. With CMS integration the kindergarten's administration updates place counts itself.",
    faq: [
      { question: "Can open places be seen on the website in real time?", answer: "Yes, the administration updates the number of open places frequently through the CMS." },
      { question: "Can parents get full information about groups and prices on the website?", answer: "Yes, each age group, programme and price is explained on its own page." },
    ],
  },
  "bolalar-bogchalari__telegram-bot": {
    intro: "A Telegram bot keeps parents informed in real time about their child's day. For kindergartens in Tashkent, FRONTIX shares updates on meals, naps and activities without waiting until evening.",
    bridge: "Instead of parents only hearing about their child's day verbally at pick-up, carers post short notes and photos in the bot during the day and parents get an automatic notification. Important notes on the child's health or allergies are also kept separately in the bot.",
    faq: [
      { question: "Can I find out through the bot what my child did during the day?", answer: "Yes, carers post short updates on meals, naps and activities in the bot throughout the day." },
      { question: "Is information about a child's allergies stored in the bot?", answer: "Yes, important health notes are saved in the child's profile and visible to all carers." },
    ],
  },
  "bolalar-bogchalari__business-automation": {
    intro: "CRM automation manages payments, attendance and children's information. For kindergartens in Tashkent, FRONTIX moves notebook-based records into an automatic system.",
    bridge: "Instead of payments and attendance kept in a notebook by hand with month-end errors, workflow automation records daily attendance and calculates the monthly fee automatically. Children's health and allergy information is kept in one CRM profile visible to all carers.",
    faq: [
      { question: "Can the CRM calculate monthly fees automatically?", answer: "Yes, the monthly fee is calculated automatically from daily attendance." },
      { question: "Do all carers see the same health information about a child?", answer: "Yes, health and allergy details are kept in one profile, so every carer has the same information." },
    ],
  },
  "kuryer-xizmatlari__telegram-bot": {
    intro: "A Telegram bot automates communication between customer and courier, handling order intake and notifications in one place. For courier services in Tashkent, FRONTIX develops a bot that shows customers their parcel status in real time and automatically sends new orders to couriers.",
    bridge: "Instead of customers calling the operator to ask when the courier will arrive, the bot sends an automatic notification at each stage (received, on the way, delivered), and couriers accept new orders instantly from the bot's admin panel.",
    faq: [
      { question: "How does the customer track their parcel?", answer: "The bot messages the customer automatically at each stage (received, on the way, delivered), so there's no need to call." },
      { question: "How do couriers use the bot?", answer: "Couriers see the orders assigned to them in the bot and update the delivery status with one button." },
    ],
  },
  "kuryer-xizmatlari__business-automation": {
    intro: "CRM automation brings courier availability, order dispatch and reports together in one system. For courier services in Tashkent, FRONTIX builds a system that automatically assigns new orders to the nearest free courier and prices them by address and weight.",
    bridge: "Instead of courier availability being invisible and orders assigned at random, workflow automation tracks each courier's status, assigns new orders to the nearest free courier and calculates the price from address and weight automatically.",
    faq: [
      { question: "Do delivery prices have to be calculated by hand?", answer: "No, the system calculates the price from address and weight, and the operator just confirms it." },
      { question: "Can we work with several partner courier services?", answer: "Yes, partner services' orders can be integrated into one system through API connections." },
    ],
  },
  "kuryer-xizmatlari__custom-software": {
    intro: "Custom software is a system built around a company's unique processes that ready-made templates can't handle. For courier services in Tashkent, FRONTIX builds a custom architecture that covers integration with several partner companies and your own dispatch logic.",
    bridge: "Instead of coordinating with several delivery partners by hand over phone and Excel, a custom architecture automatically receives orders from each partner's system and merges them into one format, and the scalable system stays stable as new partners join.",
    faq: [
      { question: "Can it integrate with our existing IT systems?", answer: "Yes, the custom architecture is adapted to work with your existing systems (warehouse, accounting)." },
      { question: "Will the system cope as order volume grows?", answer: "Yes, the scalable system is built to handle more load as orders and couriers increase." },
    ],
  },
  "logistika-va-yuk-tashish__business-automation": {
    intro: "CRM automation tracks driver availability, trips and costs in one system. For logistics companies in Tashkent, FRONTIX automates the truck schedule kept in Excel and prevents two orders landing on one truck.",
    bridge: "Instead of an Excel schedule where two orders accidentally land on the same truck, workflow automation shows every truck and driver's availability in real time, while reports and analytics calculate each trip's real cost including fuel.",
    faq: [
      { question: "How can driver availability be tracked?", answer: "The system shows each driver and truck's current trip and free time in real time, so the dispatcher assigns orders to free trucks." },
      { question: "Is trip cost calculation automated?", answer: "Yes, the reports and analytics module automatically calculates each trip's cost by distance, fuel and time." },
    ],
  },
  "logistika-va-yuk-tashish__custom-software": {
    intro: "Custom software is a system built around a logistics company's own routing and consolidation processes. For freight companies in Tashkent, FRONTIX develops a custom architecture that automatically combines several small orders into one trip in the same direction.",
    bridge: "Instead of unsystematic consolidation and trucks running half-empty, the custom architecture groups orders in the same direction automatically, while security standards protect cargo and customer data.",
    faq: [
      { question: "Can the consolidation logic be built around us?", answer: "Yes, the custom architecture reflects your routes and cargo volume logic in its consolidation rules." },
      { question: "Is there long-term support for the system?", answer: "Yes, after launch FRONTIX provides updates and technical help through long-term support." },
    ],
  },
  "logistika-va-yuk-tashish__website-development": {
    intro: "A website is a digital shop window showing customers a company's services, rates and shipment tracking. For logistics companies in Tashkent, FRONTIX builds a website with a tracking page so customers see where their cargo is without calling.",
    bridge: "Instead of customers calling the dispatcher every time, a tracking section built into the site shows cargo status in real time, and CMS integration lets staff update rates and routes quickly themselves.",
    faq: [
      { question: "Does the website have to include shipment tracking?", answer: "It's optional but recommended — when customers enter a shipment number and see the status themselves, calls drop." },
      { question: "Can we update rates and routes ourselves?", answer: "Yes, with CMS integration your staff edit rates and route information without a developer." },
    ],
  },
  "oziq-ovqat-yetkazib-berish__online-ordering": {
    intro: "An online ordering system is a platform combining a product catalogue, cart and checkout. For grocery delivery services in Tashkent, FRONTIX lets you manage a product list with frequently changing prices from one place and show precise delivery windows.",
    bridge: "Instead of spending hours updating prices on paper or in Excel, the cart and checkout module lets you edit the catalogue from one place with changes visible on the site immediately, while delivery tracking shows customers a precise two-hour delivery window.",
    faq: [
      { question: "When prices change, do customers see the new price immediately?", answer: "Yes, as soon as a catalogue change is saved, every customer sees the new price — no paper list to update." },
      { question: "Can customers be shown an exact delivery time?", answer: "Yes, the system lets customers choose and track an exact time slot (for example, 14:00-16:00)." },
    ],
  },
  "oziq-ovqat-yetkazib-berish__telegram-bot": {
    intro: "A Telegram bot lets customers pick products from a catalogue and manage orders and notifications in one chat. For grocery delivery services in Tashkent, FRONTIX builds a bot that lets regulars resend their weekly order with one button.",
    bridge: "Instead of regulars picking the same products by hand every week, the bot saves the previous order and resends it instantly with a \"repeat\" button, and automatic notifications remind customers as their delivery window approaches.",
    faq: [
      { question: "Can a customer resend their previous order?", answer: "Yes, the bot saves the last order, and the customer can resend it with one tap." },
      { question: "Do customers get a reminder about delivery time?", answer: "Yes, automatic notifications message the customer before the delivery window starts." },
    ],
  },
  "oziq-ovqat-yetkazib-berish__business-automation": {
    intro: "CRM automation manages stock, orders and repeat purchases in one system. For grocery delivery services in Tashkent, FRONTIX makes it possible to plan large weekly orders in advance and repeat them automatically by subscription.",
    bridge: "Instead of having no way to plan large weekly orders ahead, workflow automation saves the customer's weekly order schedule and builds the order automatically on the set day, while the CRM tracks regulars' order history and sets up subscription-based repeat deliveries.",
    faq: [
      { question: "Can a weekly order be planned in advance?", answer: "Yes, the system stores the customer's weekly order schedule and builds the order automatically on the set day." },
      { question: "Can subscription-based repeat deliveries be set up?", answer: "Yes, regulars can have a weekly or monthly subscription, and orders go out automatically without being repeated by hand." },
    ],
  },
  "turizm-agentliklari__website-development": {
    intro: "A website shows customers tour packages, prices and booking options directly. For travel agencies in Tashkent, FRONTIX builds a website where customers see tour prices and details without calling.",
    bridge: "Instead of customers having to call to learn about a package and its price, the site openly shows each tour's price, dates and itinerary, and CMS integration lets agents add new tours without a developer.",
    faq: [
      { question: "Can customers book directly on the website?", answer: "Yes, customers choose a tour and send a preliminary booking request, and an agent then confirms it." },
      { question: "Can we add new tour packages ourselves?", answer: "Yes, with CMS integration new tours, prices and photos are added without a developer." },
    ],
  },
  "turizm-agentliklari__telegram-bot": {
    intro: "A Telegram bot automatically reminds customers about booking stages and document deadlines. For travel agencies in Tashkent, FRONTIX builds a system that tracks deposits, balances and document submission in one bot.",
    bridge: "Instead of tracking deposits, balances and documents on paper and getting confused, the bot stores each customer's payment and document status, and automatic notifications remind customers as their visa or passport expiry approaches.",
    faq: [
      { question: "How does the bot track payment stages?", answer: "For each customer the bot records whether the deposit is paid and when the balance is due, and shows it in the admin panel." },
      { question: "Do customers get reminders about expiring documents?", answer: "Yes, a few days before a visa or passport expires, the bot sends the customer an automatic reminder." },
    ],
  },
  "turizm-agentliklari__business-automation": {
    intro: "CRM automation tracks customers, bookings and seats on group tours in real time. For travel agencies in Tashkent, FRONTIX builds a central system where every agent sees at once how many seats are left on a group tour.",
    bridge: "Instead of agents asking each other by phone about free seats and risking selling one seat to two customers, the CRM updates free seats per tour in real time, and reports and analytics show which tours sell best.",
    faq: [
      { question: "Is the risk of two agents selling the same seat eliminated?", answer: "Yes, the system marks a seat as taken the moment it's booked, and every agent sees it in real time." },
      { question: "Can we see which tours bring in the most revenue?", answer: "Yes, the reports and analytics module shows sales and revenue for each tour." },
    ],
  },
  "mehmonxonalar-va-hostellar__website-development": {
    intro: "A website shows guests rooms, prices and booking options directly. For hotels and hostels in Tashkent, FRONTIX builds a website that automates room availability otherwise updated by hand across several booking sites, reducing the risk of overbooking.",
    bridge: "Instead of updating availability and prices by hand on several booking sites and selling one room to two guests, the site tracks availability centrally and marks booked rooms as \"taken\" automatically, while fast loading lets guests book comfortably on their phones.",
    faq: [
      { question: "Can the risk of overbooking be reduced?", answer: "Yes, the site tracks availability centrally and immediately marks a booked room as \"taken\", reducing conflicts with other channels." },
      { question: "Can guests book directly on the website?", answer: "Yes, guests choose a room, set their dates and send a booking request through the site." },
    ],
  },
  "mehmonxonalar-va-hostellar__telegram-bot": {
    intro: "A Telegram bot handles guest communication and passes room status between staff. For hotels and hostels in Tashkent, FRONTIX builds a bot that automatically informs all staff when a guest changes their arrival or departure time.",
    bridge: "Instead of a guest phoning reception about a change and the information never reaching other staff, the bot updates the change in the admin panel immediately, and automatic notifications alert the relevant staff (reception, housekeeping).",
    faq: [
      { question: "If a guest changes their arrival time, does every relevant staff member find out?", answer: "Yes, the bot updates the change in the admin panel and sends automatic notifications to the relevant staff." },
      { question: "Can room status (cleaned/not cleaned) be marked in the bot?", answer: "Yes, housekeeping marks the status after cleaning, and reception sees it in real time." },
    ],
  },
  "mehmonxonalar-va-hostellar__business-automation": {
    intro: "CRM automation keeps guest history, room status and preferences in one system. For hotels and hostels in Tashkent, FRONTIX builds a system that remembers regular guests' preferences (high floor, early check-in).",
    bridge: "Instead of regular guests' preferences going unrecorded and being asked again every time, the CRM stores each guest's past stays and preferences, and workflow automation keeps room status (cleaned/not cleaned) up to date between staff.",
    faq: [
      { question: "Does the system remember a regular guest's preferences?", answer: "Yes, the CRM stores every guest's past stays, preferred rooms and services." },
      { question: "Do we need a separate log to track room status?", answer: "No, workflow automation keeps room status in the system, and housekeeping and reception see it in real time." },
    ],
  },
  "fermer-xojaliklari__website-development": {
    intro: "A website is a digital shop window showing a farm's produce directly to city buyers. For farms in Tashkent and the region, FRONTIX builds a website showing products and prices so farms can sell without middlemen.",
    bridge: "Instead of having no online presence and selling only through middlemen, the site openly shows product types, volumes and prices, and with CMS integration the farmer updates the information whenever the harvest changes.",
    faq: [
      { question: "Can the website connect us directly with end consumers or small shops?", answer: "Yes, the site shows products and contact details, so buyers can order directly without a middleman." },
      { question: "Can we update the website ourselves when the harvest changes?", answer: "Yes, with CMS integration available quantities and prices can be edited without a developer." },
    ],
  },
  "fermer-xojaliklari__business-automation": {
    intro: "CRM automation tracks harvest stock, agreements with buyers and the fieldwork schedule in one system. For farms, FRONTIX builds a system that tracks stock and orders digitally instead of in a paper notebook.",
    bridge: "Instead of keeping harvest and stock in a paper notebook with no clear picture of what's been sold, the CRM records every sale and remaining stock automatically, and workflow automation reminds workers about irrigation, fertilising and harvesting on schedule.",
    faq: [
      { question: "Can orders agreed with buyers by phone be recorded in the system?", answer: "Yes, each order is entered with the agreed quantity and delivery date, serving as written confirmation." },
      { question: "How can the fieldwork schedule reach workers?", answer: "Workflow automation sends workers reminders for tasks like irrigation and fertilising on the scheduled date." },
    ],
  },
  "fermer-xojaliklari__custom-software": {
    intro: "Custom software is a system built around a farm's harvest, storage and delivery processes. For farms, FRONTIX develops a system tailored to their specific needs that tracks harvest stock and digitises agreements with buyers.",
    bridge: "Instead of tracking stock on paper and agreeing deals only by phone, a custom architecture is built around the farm's specific crops and sales process, and long-term support adapts the system as new crops are added.",
    faq: [
      { question: "Will the system be tailored to our specific crops?", answer: "Yes, the custom architecture is built around your crops, harvest season and sales process." },
      { question: "Can the system be expanded in future years?", answer: "Yes, the scalable system grows as new crops or buyers are added, backed by long-term support." },
    ],
  },
  "kiyim-kechak-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers pick the size and colour they need on a website or bot and order directly. For clothing stores in Tashkent, FRONTIX builds an ordering system that tracks stock for every size-colour variant automatically and hides sold-out ones.",
    bridge: "Instead of tracking sizes S, M and L of the same shirt in three colours separately in a notebook, the system updates each variant's stock in real time — if the chosen size is sold out, the order button is disabled automatically. The seller no longer has to count by hand and then call the customer to say \"sorry, that size is gone\".",
    faq: [
      { question: "How do I enter all size and colour variants of one product?", answer: "You add size and colour variants as separate rows on each product card, each with its own stock and price — FRONTIX sets this up in the admin panel as a simple table." },
      { question: "What if a sold-out size still shows on the site or bot?", answer: "That won't happen: the system automatically marks any variant with zero stock as \"unavailable\", so customers can't select it and there are no pointless orders and returns." },
    ],
  },
  "kiyim-kechak-dokonlari__website-development": {
    intro: "A website is an online catalogue that sorts all of a store's products by category, size and price. For clothing stores in Tashkent, FRONTIX builds a website where refreshing seasonal collections and moving old stock to the sale section takes a few clicks.",
    bridge: "Instead of rebuilding the whole catalogue every new season, you just tag products \"new collection\" or \"sale\" in the admin panel — the site shows the new sections automatically and last season's items stay on a separate sale page. Customers find this clearer and faster than a paper catalogue or scattered social media posts.",
    faq: [
      { question: "Can seasonal sales have their own page on the website?", answer: "Yes, a separate section such as \"Sale\" or \"New collection\" is created, and tagging a product puts it on that page automatically." },
      { question: "Can I upload new collection photos myself?", answer: "Yes, you can add or change product photos, descriptions and prices from the admin panel at any time — no developer needed." },
    ],
  },
  "kiyim-kechak-dokonlari__telegram-bot": {
    intro: "A Telegram bot is an automatic system where customers pick products and place orders directly in the bot instead of through Instagram or verbal requests. For clothing stores in Tashkent, FRONTIX launches a Telegram bot that gathers all orders in one place so none are missed.",
    bridge: "Instead of screenshotting Instagram DMs and writing them down separately, the bot saves the customer's choice, size and address as a tidy order automatically — the seller sees all new orders in one list, and none get mixed up or forgotten.",
    faq: [
      { question: "How does a customer order in the bot?", answer: "The customer picks a category, size and colour in the bot, then types their address — the order reaches the seller in a tidy format, with no back-and-forth." },
      { question: "How do I move existing Instagram customers to the bot?", answer: "Just share the bot link in your Instagram bio and stories; FRONTIX sets up the bot so that after one /start, customers place all future orders there." },
    ],
  },
  "zargarlik-dokonlari__online-ordering": {
    intro: "An online ordering system is a secure way for customers to choose a piece and reserve it or order with prepayment. For jewellery stores in Tashkent, FRONTIX builds an ordering system that gives every order a confirmation receipt and status tracking.",
    bridge: "Instead of transferring money for an expensive piece over the phone \"on trust\", the system gives the customer a confirmation with an order number, product photo and payment status — they see exactly what they paid for and how much, which removes the distrust.",
    faq: [
      { question: "How do we confirm a customer has prepaid?", answer: "The system automatically gives each order a number and status (reserved, paid, ready), and both customer and seller can check it at any time." },
      { question: "Can we take a partial payment (deposit) for expensive orders?", answer: "Yes, the deposit and balance can be set separately, and the customer pays the balance on collection." },
    ],
  },
  "zargarlik-dokonlari__website-development": {
    intro: "A website is an online shop window showing every piece in a jewellery store with photos, prices and availability. For jewellery stores in Tashkent, FRONTIX builds a website where a piece sold from the display is automatically marked as \"sold\".",
    bridge: "Every piece is one of a kind, so a ring sold in store still showing as \"available\" online misleads customers. As soon as a piece sells, its status is updated in the admin panel with one click and the site reflects it immediately — the display and the online catalogue always match.",
    faq: [
      { question: "How are one-of-a-kind pieces shown on the website?", answer: "Each piece gets its own page and a unique status (available/sold); after a sale the admin marks it \"sold\" with one click and the site updates." },
      { question: "Can new pieces be added to the site quickly?", answer: "Yes, upload the photo and price and a new product page is ready in minutes — no waiting for a developer." },
    ],
  },
  "zargarlik-dokonlari__telegram-bot": {
    intro: "A Telegram bot takes customers' custom requests, such as engraving or resizing, and tracks their status. For jewellery stores in Tashkent, FRONTIX launches a Telegram bot that saves every special order as a separate request.",
    bridge: "When a customer asked to \"engrave my name on the ring\", the request stayed verbal and could be forgotten — now the bot saves it as a separate order with text and photos and automatically updates the customer on its status (received, in progress, ready).",
    faq: [
      { question: "How is a custom order (engraving) placed?", answer: "The customer chooses \"custom order\" in the bot and adds text or a photo, and the bot sends the request to the seller as a separate card — no request gets lost." },
      { question: "How is the customer told the order is ready?", answer: "Once the seller marks the order \"ready\", the bot messages the customer automatically, so there's no waiting for a call." },
    ],
  },
  "gul-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers choose a bouquet's contents and set the delivery date and address in advance. For flower shops in Tashkent, FRONTIX builds an ordering system that schedules wedding and event orders placed days ahead by exact date.",
    bridge: "Instead of saying \"bring 50 flowers in the morning\" for a wedding, the customer sets the exact date, time and address in the system, and the seller sees all advance orders in a calendar and plans preparation ahead — no event order gets mixed up with another.",
    faq: [
      { question: "Can flowers for a wedding be ordered months in advance?", answer: "Yes, any future date and time can be set; the order stays in the seller's calendar and a reminder arrives as the date approaches." },
      { question: "How is a deposit taken for a large order?", answer: "Part of the order total can be set as a deposit, with the rest paid on delivery day." },
    ],
  },
  "gul-dokonlari__website-development": {
    intro: "A website is an online catalogue showing the flowers and bouquets in stock with photos and prices. For flower shops in Tashkent, FRONTIX builds a website that's updated daily and only shows flowers actually available.",
    bridge: "Flowers wilt quickly and stock changes every day, so a static catalogue soon goes out of date — each morning the seller marks in the admin panel which flowers have arrived in a few minutes, and the site shows only what's available that day, so customers don't count on flowers that aren't there.",
    faq: [
      { question: "Isn't updating the product list every day difficult?", answer: "No, you just tick \"available\" or \"unavailable\" in the admin panel — no need to rebuild the page, and it takes a few minutes." },
      { question: "Can seasonal flowers (such as peonies) get their own section?", answer: "Yes, a separate category is created for seasonal or holiday flowers, and it can be hidden with one click when the season ends." },
    ],
  },
  "gul-dokonlari__telegram-bot": {
    intro: "A Telegram bot automatically takes the surge of holiday orders without a busy phone line. For flower shops in Tashkent, FRONTIX launches a Telegram bot that can take many orders at once on 8 March or Valentine's Day.",
    bridge: "On 8 March the phone was always busy and customers went to other shops — the bot \"talks\" with hundreds of customers in parallel and takes each order in turn, so nobody hears a busy tone.",
    faq: [
      { question: "How many orders can the bot take at once on a holiday?", answer: "There's no limit — it chats with hundreds of customers in parallel and takes each order in its own sequence." },
      { question: "Can ready-made holiday bouquets be shown in the bot?", answer: "Yes, ready options like an \"8 March set\" can be added to the bot menu in advance, so customers choose quickly and order right away." },
    ],
  },
  "elektronika-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers choose products on the website and order based on live prices and stock. For electronics stores in Tashkent, FRONTIX builds an ordering system that makes it easy to change old models' prices and show stock when new models launch.",
    bridge: "Instead of rebuilding the catalogue to discount an old phone when a new model comes out, you change the price in the admin panel in seconds — the system shows the new price and a \"sale\" badge on the order page automatically, so outdated stock doesn't sit in the warehouse.",
    faq: [
      { question: "When the price changes, does the ordering system on the site and bot update automatically?", answer: "Yes, as soon as the price is changed in the admin panel, every ordering channel (website, bot) shows the new price immediately." },
      { question: "How can low stock be shown to customers?", answer: "The system can add an automatic label like \"only 2 left\", which encourages customers to decide faster." },
    ],
  },
  "elektronika-dokonlari__website-development": {
    intro: "A website is an online catalogue that lets customers compare electronics specs in a table. For electronics stores in Tashkent, FRONTIX builds a website where customers can compare several models side by side.",
    bridge: "Instead of calling the seller to compare two phones' memory and battery, the customer selects both in the \"compare\" section and sees all specs in one table — saving both the seller's time and the customer's.",
    faq: [
      { question: "How does the product comparison feature work?", answer: "The customer picks two or three products from the catalogue, and the site shows their specs (memory, screen, battery) side by side in one table." },
      { question: "How long does it take to enter all specs for a new model?", answer: "There's a ready template in the admin panel — filling in the fields takes a few minutes, with no code changes needed." },
    ],
  },
  "elektronika-dokonlari__telegram-bot": {
    intro: "A Telegram bot stores a customer's purchase history, warranty period and service-centre details digitally and sends reminders. For electronics stores in Tashkent, FRONTIX launches a Telegram bot that keeps warranty information safe even if the paper receipt is lost.",
    bridge: "A lost paper receipt used to mean a dispute about whether the warranty applied — now the bot records every purchase in the customer's profile automatically, and the customer can check the purchase date and warranty period in the bot at any time, without depending on the receipt.",
    faq: [
      { question: "How does a customer check their warranty period?", answer: "They just choose \"My purchases\" in the bot menu, where the purchase date and warranty end date are shown automatically." },
      { question: "Do customers get a reminder when the warranty is about to end?", answer: "Yes, a few days before the warranty ends the bot sends an automatic reminder, so the customer can still contact the service centre." },
    ],
  },
  "mebel-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers choose furniture and set the delivery date and time in advance. For furniture stores in Tashkent, FRONTIX builds an ordering system that schedules bulky furniture deliveries in an orderly way.",
    bridge: "Instead of delivering a large wardrobe or sofa \"sometime today\", the customer chooses an available date and time slot in the system, and the seller sees all deliveries in a calendar and plans trucks and movers ahead — no single day gets overloaded.",
    faq: [
      { question: "Can customers choose the delivery date themselves?", answer: "Yes, the system shows free dates, and customers choose a convenient day and time slot." },
      { question: "What if too many deliveries pile up on one day?", answer: "The system sets a limit per date based on trucks and staff; a full day isn't shown to customers, so they pick another date." },
    ],
  },
  "mebel-dokonlari__website-development": {
    intro: "A website is an online catalogue showing the exact dimensions, photos and price of every piece of furniture. For furniture stores in Tashkent, FRONTIX builds a website with precise measurements that help customers check in advance whether a piece will fit their room.",
    bridge: "Customers used to order a sofa without knowing whether it would fit, then return it — now every product page shows exact length, width and height, customers compare these with their room first and then order, reducing returns.",
    faq: [
      { question: "How can dimensions be shown for each piece of furniture?", answer: "Length, width and height appear in separate fields on the product card, and a dimension drawing can be added too if you like." },
      { question: "Is it easy for customers to compare dimensions?", answer: "Yes, exact measurements in centimetres are given in the description, so customers decide by comparing them with their room." },
    ],
  },
  "mebel-dokonlari__telegram-bot": {
    intro: "A Telegram bot asks customers in advance whether they need assembly after delivery and helps plan how many workers are needed. For furniture stores in Tashkent, FRONTIX launches a Telegram bot that builds the assembly service into the ordering process.",
    bridge: "Instead of customers calling after delivery to ask \"can you assemble it?\" and a worker being found at the last minute, the bot asks \"do you need assembly?\" when the order is placed, and the right number of workers is assigned in advance — no surprises on delivery day.",
    faq: [
      { question: "How is the assembly price calculated?", answer: "The bot calculates the assembly price automatically from the furniture type and complexity and adds it to the order total, so customers see the exact amount upfront." },
      { question: "Can customers choose delivery only, without assembly?", answer: "Yes, the bot offers \"delivery only\" or \"delivery + assembly\" as separate options, and customers pick what they need." },
    ],
  },
  "qurilish-mollari-dokonlari__online-ordering": {
    intro: "An online ordering system shows the wholesale or retail price automatically when a customer enters the quantity. For building materials stores in Tashkent, FRONTIX builds an ordering system that calculates price and discount by quantity on its own.",
    bridge: "Selling cement or bricks at one price for 10 units and another for 500 was easy to get wrong by hand — the system applies the wholesale threshold and price automatically from the entered quantity, so the seller doesn't sit with a calculator.",
    faq: [
      { question: "From what quantity does the wholesale price apply?", answer: "A wholesale threshold (for example, from 100 units) is set per product in the admin panel, and when a customer enters that quantity the system applies the wholesale price automatically." },
      { question: "Do retail and wholesale customers use the same ordering system?", answer: "Yes, one system serves both; the only difference is the price, calculated automatically from the quantity." },
    ],
  },
  "qurilish-mollari-dokonlari__website-development": {
    intro: "A website is an online catalogue comparing building materials of different brands and grades by price and specs. For building materials stores in Tashkent, FRONTIX builds a website where customers can compare several cement or paint brands side by side.",
    bridge: "Not knowing which cement grade suits their project, customers might pick at random and buy the wrong product — the site shows each brand's quality grade, setting time and price separately, so customers compare and choose knowingly.",
    faq: [
      { question: "How can different brands be shown in one category?", answer: "Each product can be filtered by brand, quality grade and technical specs, so customers find the brand they need quickly." },
      { question: "What if a customer doesn't understand the difference between brands?", answer: "Each product page has a short description and recommended use, and there's also a button to send the seller a question if needed." },
    ],
  },
  "qurilish-mollari-dokonlari__telegram-bot": {
    intro: "A Telegram bot quickly agrees delivery date, vehicle type and site address with the customer. For building materials stores in Tashkent, FRONTIX launches a Telegram bot that brings order to delivering heavy loads to construction sites.",
    bridge: "Agreeing by phone how much cement, which truck and which day to deliver to a site often caused confusion — the bot asks the customer for the address, volume and date in order and sends the seller a ready order, removing the ambiguity of verbal agreements.",
    faq: [
      { question: "How does the bot work out which vehicle a large order needs?", answer: "The bot asks for the weight and quantity of goods and recommends a vehicle type (van or truck) based on that." },
      { question: "Can the delivery date be changed through the bot?", answer: "Yes, the customer opens their order and requests a new date; once the seller confirms, the updated date is saved in the order." },
    ],
  },
  "bolalar-oyinchoqlari-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers order gift wrapping and a greeting card along with a toy. For toy stores in Tashkent, FRONTIX builds an ordering system with gift services built into the order flow.",
    bridge: "Requests to gift-wrap a toy and add a card used to be remembered by hand and got forgotten — now the order form has \"gift wrap needed?\" and \"greeting text\" fields, so the seller sees the request clearly on every order.",
    faq: [
      { question: "Does gift wrapping cost extra?", answer: "Yes, gift wrapping has its own price, which customers see when ordering and can add if they wish." },
      { question: "Can customers write the greeting text themselves?", answer: "Yes, there's a separate text field in the order form; the customer writes their message and the seller prints it on the card." },
    ],
  },
  "bolalar-oyinchoqlari-dokonlari__website-development": {
    intro: "A website is an online catalogue that filters toys by the child's age. For toy stores in Tashkent, FRONTIX builds a website that helps parents quickly find a toy suited to their child's age.",
    bridge: "Instead of parents asking the seller at length which toy suits a three-year-old, they choose a category in the \"age\" filter (0-1, 1-3, 3-6, 6+) and see only toys recommended for that age — speeding up the choice and reducing wrong purchases.",
    faq: [
      { question: "How does the age filter work?", answer: "Each product has a recommended age range, and choosing a filter shows only the toys suited to that age." },
      { question: "What if a toy suits several age groups?", answer: "A product can have several age ranges and will appear in every relevant group." },
    ],
  },
  "bolalar-oyinchoqlari-dokonlari__telegram-bot": {
    intro: "A Telegram bot automatically takes the surge of orders before New Year and 1 June. For toy stores in Tashkent, FRONTIX launches a Telegram bot that helps handle holiday order flow without losing customers.",
    bridge: "Before New Year, manual order intake couldn't keep up and some customers left for other shops without an answer — the bot talks to every customer at once and takes each order in turn, so nobody is left waiting.",
    faq: [
      { question: "How does the bot speed up holiday orders?", answer: "The bot can talk to an unlimited number of customers in parallel, so everyone gets an instant reply even on holidays." },
      { question: "Can ready-made holiday gift sets be shown in the bot?", answer: "Yes, options like a \"New Year set\" or \"1 June gift\" can be added to the bot menu in advance, so customers choose and order quickly." },
    ],
  },
  "sport-anjomlari-dokonlari__online-ordering": {
    intro: "An online ordering system lets customers pick the exact size from a size chart and order. For sports stores in Tashkent, FRONTIX builds an ordering system that reduces the chance of choosing the wrong size of trainers or sportswear.",
    bridge: "Customers used to guess their trainer size and then ask for an exchange — the system shows each product's brand-specific size chart (for example, foot length in centimetres), so customers choose more accurately and exchange requests fall.",
    faq: [
      { question: "Does the system account for size charts that differ by brand?", answer: "Yes, a separate size chart is entered for each brand or product, and customers see the one for that exact product." },
      { question: "If the wrong size arrives, can an exchange be requested through the system?", answer: "Yes, the customer sends an exchange request from their order history, and the seller sees it as a separate request and resolves it quickly." },
    ],
  },
  "sport-anjomlari-dokonlari__website-development": {
    intro: "A website is an online catalogue showing sports products' brand authenticity, certificates and warranty. For sports stores in Tashkent, FRONTIX builds a website that clearly shows proof that every product is genuine.",
    bridge: "Knowing that cheap fakes are common online, customers might hesitate to buy — now each product page shows the official distributor certificate or warranty period, giving confidence in authenticity and making the decision easier.",
    faq: [
      { question: "How do I add certificate and warranty information to each product?", answer: "The product card has a separate \"warranty and certificate\" section where you upload a photo or text of the document." },
      { question: "If a customer doubts the certificate, can more proof be shown?", answer: "Yes, an official distributor certificate or brand partnership document can be placed on a separate page, strengthening trust further." },
    ],
  },
  "sport-anjomlari-dokonlari__telegram-bot": {
    intro: "A Telegram bot automatically tells customers when seasonal sports products (skis, bikes) are back in stock. For sports stores in Tashkent, FRONTIX launches a Telegram bot that helps gather demand before the season starts.",
    bridge: "When skis sold out in winter, customers left not knowing when stock would return and the store lost the demand — in the bot a customer taps \"notify me when available\", and once stock arrives the bot messages everyone waiting, while the store knows demand ahead of the season and plans stock accordingly.",
    faq: [
      { question: "When does a customer get notified after tapping \"notify me\"?", answer: "As soon as the product arrives and the admin marks it \"available\", the bot messages every waiting customer automatically." },
      { question: "Can the bot show demand ahead of the season?", answer: "Yes, by looking at the number of \"notify me\" requests the seller can estimate which products are in higher demand and prepare stock to match." },
    ],
  },
  "maishiy-texnika-tamirlash__telegram-bot": {
    intro: "A Telegram bot lets customers describe an appliance fault and see the technician's estimated arrival window without waiting on the phone. For appliance repair workshops in Tashkent, FRONTIX builds a bot that saves customers from waiting at home all day for a technician.",
    bridge: "Instead of spending the whole day at home waiting after a fridge or washing machine breaks, the customer picks the fault type in the bot and immediately sees the estimated time window for that day, reducing waits caused by a busy technician.",
    faq: [
      { question: "Can the bot tell me exactly when the technician will arrive?", answer: "Yes, the bot shows an estimated window based on the dispatcher's route for the day, and if the technician is delayed the customer gets an automatic update." },
      { question: "Which appliances can I report through the bot?", answer: "Every household appliance — fridge, washing machine, air conditioner, gas cooker — can be added to the bot menu, each with fitting questions (brand, symptom)." },
    ],
  },
  "maishiy-texnika-tamirlash__business-automation": {
    intro: "CRM automation keeps technicians' locations, jobs and spare part history in one system. For appliance repair companies in Tashkent, FRONTIX builds a CRM that automatically assigns nearby jobs to the nearest free technician and keeps the history of every part.",
    bridge: "Instead of the dispatcher relying on memory and sending a nearby job to a technician far away, the CRM shows technicians' routes for the day and offers new requests to the geographically nearest free technician, while the warranty for every replaced part stays on the customer's card.",
    faq: [
      { question: "How does the CRM know where technicians are?", answer: "Each technician enters their daily route in the app, or their location is set automatically when the previous job is completed, and the CRM offers new requests to the nearest one." },
      { question: "Does the CRM show if a part's warranty has expired?", answer: "Yes, each replaced part has a warranty date attached, and when the customer calls again the system shows immediately whether it's still valid." },
    ],
  },
  "maishiy-texnika-tamirlash__website-development": {
    intro: "A website lets customers choose the appliance type and fault symptoms and see an estimated price range with their request. For appliance repair workshops in Tashkent, FRONTIX builds a website that gives customers a price estimate before they call out a technician.",
    bridge: "Instead of the price only being set after the appliance is opened at home — and a wasted trip if the customer disagrees — the site shows an estimated price range by appliance type, brand and symptom, so the customer knows the rough budget before calling out a technician.",
    faq: [
      { question: "Is the price on the website exact?", answer: "The site shows an estimated range; the final price is set after the technician inspects the appliance, but the customer knows the rough budget in advance." },
      { question: "Can a request be submitted directly from the website?", answer: "Yes, the customer enters the appliance type, symptom and address, and the request goes automatically to the nearest free technician." },
    ],
  },
  "telefon-va-kompyuter-tamirlash__telegram-bot": {
    intro: "A Telegram bot lets customers follow the repair stage of their phone or laptop without calling the shop. For phone and computer repair workshops in Tashkent, FRONTIX builds a bot that gives every order a status code and keeps customers informed in real time.",
    bridge: "Instead of calling every time to ask whether it's ready, the customer enters the order number in the bot and instantly sees whether the device is in diagnostics, waiting for parts or ready, and the bot messages them automatically whenever the stage changes.",
    faq: [
      { question: "What do I need to track my order in the bot?", answer: "Just the order number given when the device was dropped off — the bot shows the current stage from that number instantly." },
      { question: "Is a separate message sent when the stage changes?", answer: "Yes, as soon as the technician updates the status in the system, the bot messages the customer automatically — no need to call." },
    ],
  },
  "telefon-va-kompyuter-tamirlash__business-automation": {
    intro: "CRM automation keeps spare part stock, warranty periods and order history in one place. For phone and computer repair services in Tashkent, FRONTIX builds a CRM that warns before parts run out and stores every warranty digitally.",
    bridge: "Instead of sending customers away with \"we're out of that part\", the CRM warns automatically when screen or battery stock hits a minimum, and each repair's warranty is saved on the customer's card and can be checked in the system regardless of a lost paper receipt.",
    faq: [
      { question: "Is the warranty still confirmed if the receipt is lost?", answer: "Yes, every repair is linked to the customer's number in the CRM, and the warranty can be checked at any time without the paper receipt." },
      { question: "How do we know in advance that a part is running out?", answer: "A minimum stock level is set for each part, and when it's reached the CRM automatically alerts staff so shortages are avoided." },
    ],
  },
  "telefon-va-kompyuter-tamirlash__website-development": {
    intro: "A website lets customers fill in an online request and get a tracking code before posting a device from another city. For phone and computer repair workshops in Tashkent, FRONTIX builds a system where customers track their device in transit on the website.",
    bridge: "Instead of relying on trust about who received a posted device, the customer uses the request number from the website to see online that the device was received, entered diagnostics and is ready — giving confidence to distant customers too.",
    faq: [
      { question: "If I send a device from another city, can I track it on the website?", answer: "Yes, you fill in an online request and get a tracking number, which shows the device's arrival and every repair stage." },
      { question: "Does the website give price information in advance?", answer: "The site shows estimated price ranges for common faults (screen, battery, charging), with the final price confirmed after diagnostics." },
    ],
  },
  "poligrafiya-xizmatlari__telegram-bot": {
    intro: "A Telegram bot lets a print shop's customers follow their order stage (layout approved, printing, laminating) without calling. For printing services in Tashkent, FRONTIX builds a bot that shows every stage of a large print run in real time.",
    bridge: "Instead of calling to ask what stage a large run is at, the customer enters the order number in the bot and instantly sees whether the layout is approved, the paper cut or lamination under way, and the bot sends an automatic message whenever the stage changes.",
    faq: [
      { question: "Which stages does the bot show?", answer: "Each production stage — layout approval, printing, cutting and laminating — is marked separately, and customers see the current status by order number." },
      { question: "Can urgent orders be placed through the bot?", answer: "Yes, the bot menu has a \"rush order\" option; such requests reach the operator with a special flag and are prioritised in the queue." },
    ],
  },
  "poligrafiya-xizmatlari__business-automation": {
    intro: "CRM automation stores colour codes and paper types from a customer's previous orders and manages the production queue. For print shops in Tashkent, FRONTIX builds a CRM that repeats \"same as last time\" orders with the exact colour code and moves rush jobs up the queue.",
    bridge: "Instead of colours not matching because nobody remembered last time's Pantone code and paper, the CRM stores the exact colour codes and materials for each customer, and rush orders get a priority flag — the press operator no longer sorts the queue by hand.",
    faq: [
      { question: "How does the CRM remember the colour from a previous order?", answer: "After each order, the CMYK or Pantone code, paper type and weight are saved on the customer's card and shown automatically on the next order." },
      { question: "How are rush and regular orders separated in the queue?", answer: "Each order gets a deadline and priority in the CRM, and the system moves rush orders higher in the production queue." },
    ],
  },
  "poligrafiya-xizmatlari__website-development": {
    intro: "A website lets customers upload a layout, see an online print preview and use a price calculator. For printing companies in Tashkent, FRONTIX builds a website that warns in advance about differences between on-screen and printed colours.",
    bridge: "Instead of colours printing differently from the screen and the whole run being reprinted, the site checks CMYK compatibility on upload and clearly warns that the print may differ from the screen, preventing the mistake in advance.",
    faq: [
      { question: "Is a layout uploaded to the website checked automatically?", answer: "Yes, the site checks the file format and colour mode (RGB or CMYK); if it's RGB, a warning appears that the print may differ from the screen." },
      { question: "Can the price be calculated on the website by run size and paper type?", answer: "Yes, the calculator instantly shows an estimated price based on run size, paper type and extras such as lamination." },
    ],
  },
  "tikuv-atelyelari__telegram-bot": {
    intro: "A Telegram bot lets a tailoring customer follow their order stage (cutting, fitting, finishing) without calling every day. For tailoring studios in Tashkent, FRONTIX builds a bot that spares customers from calling to ask \"is it ready?\".",
    bridge: "Instead of calling every day, the customer enters the order number in the bot and instantly sees whether the garment is at cutting, first fitting or finishing, and when a fitting date is set the bot sends a reminder.",
    faq: [
      { question: "Does the bot remind me of my fitting date?", answer: "Yes, once the tailor enters the fitting date, the bot sends the customer an automatic reminder the day before." },
      { question: "If I have several orders, does the bot show them separately?", answer: "Yes, each order is logged under its own number, and the customer sees their order list and each one's status in the bot menu." },
    ],
  },
  "tikuv-atelyelari__business-automation": {
    intro: "CRM automation keeps customer measurements, fabric history and tailors' schedules in one system. For tailoring studios in Tashkent, FRONTIX builds a CRM that prevents lost measurement notebooks and keeps date-bound orders, such as weddings, on time.",
    bridge: "Instead of a lost measurement notebook meaning re-measuring, the CRM keeps each customer's height, waist and shoulder measurements on a digital card, and plans which tailor finishes which order when, putting wedding-dated orders first.",
    faq: [
      { question: "Are customer measurements saved so they don't have to be retaken?", answer: "Yes, all measurements from the first visit are stored in the CRM under the customer's number and reused for later orders." },
      { question: "How do you make sure a wedding order isn't late?", answer: "The event date is entered with the order, and the CRM counts back from it, reserves priority time in the tailor's schedule and warns as the deadline approaches." },
    ],
  },
  "tikuv-atelyelari__website-development": {
    intro: "A website hosts a portfolio of the studio's work and an online request form. For tailoring studios in Tashkent, FRONTIX builds a website where customers choose fabric and style in advance and submit a request.",
    bridge: "Instead of customers having to explain which fabric they used last time, their account on the website stores previous orders with photos and fabric details, so they simply reference a past order when submitting a new one.",
    faq: [
      { question: "Are my previous orders saved on the website?", answer: "Yes, each order of a registered customer is saved in their account with photos, fabric type and measurements, ready to reuse in the next request." },
      { question: "Can I choose a style on the website and submit a request?", answer: "Yes, the site lets you pick a style from the catalogue, specify the fabric and submit an online request with an estimated completion date." },
    ],
  },
  "konditsioner-xizmatlari__telegram-bot": {
    intro: "A Telegram bot lets customers see free dates for air conditioner installation or servicing and book themselves. For air conditioning services in Tashkent, FRONTIX builds a bot that gives an exact date even on the hottest days, instead of a vague \"tomorrow or the day after\".",
    bridge: "Instead of a paper technician schedule and vague answers, the bot shows technicians' free slots for the week in real time, and customers pick a day and hour and book themselves — two customers can't land in the same slot.",
    faq: [
      { question: "Is booking faster through the bot in summer?", answer: "Yes, the bot shows all technicians' free hours for today and tomorrow in real time, and customers book the nearest slot instantly — no waiting on the phone." },
      { question: "Can maintenance be booked through the bot too?", answer: "Yes, customers choose \"preventive cleaning\" separately in the bot menu and book it apart from installation." },
    ],
  },
  "konditsioner-xizmatlari__business-automation": {
    intro: "CRM automation manages the customer base, technical history and seasonal reminders. For air conditioning services in Tashkent, FRONTIX builds a CRM that automatically reminds past customers about spring maintenance.",
    bridge: "Instead of last year's customers going unrecorded and moving to competitors, the CRM automatically sends a maintenance reminder a year after each installation, and the unit's model and last refrigerant top-up are kept on the card so the technician doesn't have to ask again.",
    faq: [
      { question: "When is the maintenance reminder sent?", answer: "The CRM counts from each installation date and, after a year or at the start of the season, sends the customer an automatic SMS or Telegram message." },
      { question: "How is the unit's technical history stored?", answer: "At every call-out, the model, capacity, refrigerant date and work done are recorded on the customer's CRM card, and next time the technician opens that history." },
    ],
  },
  "konditsioner-xizmatlari__website-development": {
    intro: "A website lets customers specify room parameters and installation location in advance when submitting a request. For air conditioning services in Tashkent, FRONTIX builds a website that tells the technician before the visit whether extra tools are needed.",
    bridge: "Instead of finding out on site that the ceiling height or outdoor unit location is awkward and extra tools or a second technician are needed, the request form asks about the floor and outdoor unit location in advance, so the technician arrives prepared.",
    faq: [
      { question: "What does the website's request form ask for?", answer: "Room area, floor, and where the outdoor unit will go (balcony, wall) — this information is passed to the technician in advance." },
      { question: "Can the website suggest air conditioner capacity by room size?", answer: "Yes, after entering the room area the site recommends a suitable capacity range, and the customer chooses a model and submits a request." },
    ],
  },
  "mebel-tamirlash__telegram-bot": {
    intro: "A Telegram bot lets customers follow their furniture repair order, including fabric delivery time, without calling. For furniture repair workshops in Tashkent, FRONTIX builds a system that answers \"when will it be ready?\" precisely through a bot.",
    bridge: "Instead of calling several times because fabric or fittings delivery is uncertain, the bot shows by order number whether the fabric has arrived or work has started, and messages the customer automatically the moment the fabric comes in.",
    faq: [
      { question: "Will the bot tell me if fabric delivery is delayed?", answer: "Yes, the fabric's expected arrival date is entered in the system, and if it changes the bot sends the customer the updated date automatically." },
      { question: "How will I find out through the bot that the work is done?", answer: "Once the craftsman marks the job complete in the CRM, the bot tells the customer right away that the furniture can be collected." },
    ],
  },
  "mebel-tamirlash__business-automation": {
    intro: "CRM automation keeps measurements, price and chosen fabric on one order card. For furniture repair services in Tashkent, FRONTIX builds a CRM that closes the information gap between the craftsman and the workshop.",
    bridge: "Instead of measurements and price staying in the craftsman's head and being recalculated by someone else at the workshop, the craftsman enters measurements and the chosen fabric into the CRM on their phone on the spot, so workshop staff see the details ready and don't start with the wrong fabric.",
    faq: [
      { question: "How does the craftsman enter measurements, and how does it help?", answer: "At the customer's home the craftsman enters measurements and fabric choice into the CRM via the mobile app, and workshop staff see it instantly and start with the right fabric." },
      { question: "Won't several orders in the workshop get mixed up?", answer: "No, each order runs in the CRM with its own number and stage marker, and a shared board shows who is working on which order and at what stage." },
    ],
  },
  "mebel-tamirlash__website-development": {
    intro: "A website hosts the workshop's before-and-after portfolio and an online request form. For furniture repair services in Tashkent, FRONTIX builds a website that builds trust and gives customers a rough idea of the price.",
    bridge: "Instead of customers learning the price and timeline only after the craftsman visits, the site shows an estimated price range and before-and-after photos of similar jobs by furniture type (sofa, armchair, wardrobe) and repair type, so customers have a rough budget before calling.",
    faq: [
      { question: "How do the before-and-after photos help?", answer: "Customers see past work on similar furniture and faults, gain confidence in the workshop's quality and can picture the result of their own order." },
      { question: "Can I choose fabric on the website and submit a request?", answer: "Yes, the site shows a catalogue of fabric samples; the customer picks one, enters the furniture type and address and submits an online request." },
    ],
  },
  "elektr-montaj-kompaniyalari__business-automation": {
    intro: "CRM automation tracks work progress on sites and crew locations in real time. For electrical installation companies in Tashkent, FRONTIX builds a CRM that shows the main contractor a live report instead of an Excel file.",
    bridge: "Instead of progress reported verbally or in Excel with the real state unclear, the CRM marks the work on each site (cable pulling, panel installation, connection) as separate stages, and the main contractor can log in at any time to see the real percentage.",
    faq: [
      { question: "How does the main contractor see progress?", answer: "Each site gets its own link, through which the main contractor follows the percentage and stages of work in real time — no need to call for a report." },
      { question: "Does the CRM keep several sites separate?", answer: "Yes, each site opens as its own card, and crew, material and stage details are linked only to that site." },
    ],
  },
  "elektr-montaj-kompaniyalari__custom-software": {
    intro: "Custom software tracks material usage and crew locations. For electrical installation companies in Tashkent, FRONTIX develops a program that compares estimated material quantities with actual usage and shows all crews in one place.",
    bridge: "Instead of cable and breaker usage at the end of a project not matching the estimate with no way to find out why, the program records materials issued to each crew by site, compares them with the estimate and shows the difference immediately, while every crew's site appears on one map.",
    faq: [
      { question: "How is material usage compared with the estimate?", answer: "Materials issued to each crew are entered into the system, and when the project ends the program automatically compares planned and actual quantities and shows the difference." },
      { question: "Can crew locations be tracked from one place?", answer: "Yes, a central panel shows which site each crew is on and what equipment is assigned to them, so a free crew is easy to find in an emergency." },
    ],
  },
  "elektr-montaj-kompaniyalari__website-development": {
    intro: "A website is a presentation space that builds trust through a portfolio of completed sites and technical documentation. For electrical installation companies in Tashkent, FRONTIX builds a corporate website that makes a credible impression on main contractors and tender panels.",
    bridge: "Instead of technical documents getting lost on paper and not being found when a warranty issue arises, the site creates an electronic portfolio for every completed site, storing as-built drawings and certificates digitally for the main contractor to review.",
    faq: [
      { question: "How does the website build trust with new tenders and main contractors?", answer: "The site has a portfolio listing completed sites, capacities and client reviews, proving the company's experience to new clients." },
      { question: "Can technical documents be found through the website?", answer: "Yes, a registered client's account stores the as-built drawings and certificates for each site digitally, so there's no digging through paper during the warranty period." },
    ],
  },
  "avtomobil-shina-markazlari__telegram-bot": {
    intro: "A Telegram bot lets customers see free tyre-change slots and book themselves even at the height of the season, without waiting on the phone. For tyre fitting centres in Tashkent, FRONTIX builds a bot that eases the autumn and spring rush.",
    bridge: "Instead of everyone calling at once when the season starts and bookings overlapping, the bot shows free lifts for today and tomorrow in real time, customers pick a time and book, and nobody waits hours in the waiting room.",
    faq: [
      { question: "Is booking through the bot faster at peak season?", answer: "Yes, the bot shows all lifts' free hours for today and tomorrow in real time, and customers book the nearest slot instantly — no waiting on the phone." },
      { question: "Can tyre storage drop-off be booked through the bot?", answer: "Yes, \"tyre storage\" is a separate service in the bot menu, so customers choose in advance when to bring their tyres." },
    ],
  },
  "avtomobil-shina-markazlari__business-automation": {
    intro: "CRM automation keeps track of customers' stored tyres and the history of work done. For tyre fitting centres in Tashkent, FRONTIX builds a CRM that shows instantly where every set is stored instead of searching shelf by shelf.",
    bridge: "Instead of not recording the shelf and turning the whole storeroom upside down next season, the CRM assigns a shelf number to each set and finds it instantly by customer number, while every balancing result and pressure reading is stored digitally on the job sheet.",
    faq: [
      { question: "How does finding tyres in storage get faster?", answer: "When a set is received it's given a shelf number and customer details, so next season entering the customer number shows where the tyres are straight away." },
      { question: "How are balancing and pressure documented?", answer: "After each service the balancing result and tyre pressure are recorded on the customer's CRM card, so if a complaint comes in the work done can be confirmed from the system." },
    ],
  },
  "avtomobil-shina-markazlari__website-development": {
    intro: "A website lets customers check their tyres' age and tread condition and get reminders about replacement. For tyre fitting centres in Tashkent, FRONTIX builds a website that reminds customers of safety-critical replacement dates.",
    bridge: "Instead of replacement dates being missed for lack of reminders about tread depth and tyre age, the site calculates from the last inspection date once the customer enters their plate number or tyre size, and sends a reminder when the next check or replacement is due.",
    faq: [
      { question: "How can tyre condition be checked on the website?", answer: "The customer logs into their account and, based on data from the previous visit, sees the tread condition and the last inspection date." },
      { question: "Will the website tell me when my tyres need replacing?", answer: "Yes, the site calculates from the last inspection and the tyres' production year and sends a message when the recommended replacement date approaches." },
    ],
  },
  "bolalar-oyin-markazlari__telegram-bot": {
    intro: "A Telegram bot lets customers book a place and time for a birthday party or play room directly in the messenger. For children's play centres in Tashkent, FRONTIX builds a bot that shows room and entertainer schedules automatically and prevents double bookings.",
    bridge: "Instead of writing down birthday dates by phone by hand, the bot shows all booked rooms and entertainers in real time — so two parties can't accidentally land on the same slot.",
    faq: [
      { question: "Can an exact date and time for a birthday be booked through the bot?", answer: "Yes, the bot shows taken and free times; the customer picks a date and confirms the entertainer and room type together." },
      { question: "What if two families try to book the same date?", answer: "The bot marks the first confirmed booking as taken immediately, shows the second customer that the slot is gone and suggests alternative times." },
    ],
  },
  "bolalar-oyin-markazlari__website-development": {
    intro: "A website is an online resource with full details on a centre's services, prices and birthday packages. For children's play centres in Tashkent, FRONTIX lays out all package details (cake, entertainer, room hire, duration) clearly on one page.",
    bridge: "Instead of parents having to call or visit to learn package prices, the site shows each birthday package's contents, price and photos separately — speeding up the decision.",
    faq: [
      { question: "Can birthday packages be compared on the website?", answer: "Yes, the site shows each package (basic, standard, VIP) side by side in a table with price, duration and included services." },
      { question: "Can a package be chosen and a request submitted on the website?", answer: "Yes, each package has a request form beneath it; the customer leaves the date and phone number and quickly hears from a manager." },
    ],
  },
  "bolalar-oyin-markazlari__business-automation": {
    intro: "CRM automation calculates entry times and payments automatically. For children's play centres in Tashkent, FRONTIX builds a solution that records each child's entry and exit and calculates hourly fees without mistakes.",
    bridge: "Instead of staff calculating hourly fees by hand and making mistakes, the system records when a child enters and leaves and calculates the amount due precisely.",
    faq: [
      { question: "Can the system calculate the price for several children together?", answer: "Yes, the CRM tracks each child's entry time separately and totals the payment automatically when a family brings several children." },
      { question: "Do staff have to count the day's takings by hand at the end of a shift?", answer: "No, the system produces a daily revenue report automatically from all the day's entries." },
    ],
  },
  "bouling-va-bilyard-klublari__telegram-bot": {
    intro: "A Telegram bot lets customers book a bowling lane or billiards table in advance. For bowling and billiards clubs in Tashkent, FRONTIX builds a solution where customers see free lanes or tables in the bot and book an hour.",
    bridge: "Instead of customers coming to the club to check whether a lane is free, the bot shows the current status of every lane and table and lets them book the hour they want in a few taps.",
    faq: [
      { question: "Can I see in the bot exactly which lane is free?", answer: "Yes, the bot shows each lane's or table's busy and free hours separately, and customers pick a convenient time." },
      { question: "Can a booking be cancelled or changed?", answer: "Yes, customers can cancel or move their booking through the bot at any time, and the freed slot opens to others immediately." },
    ],
  },
  "bouling-va-bilyard-klublari__website-development": {
    intro: "A website is an online platform where corporate customers and large groups can book several lanes or tables together. For bowling and billiards clubs in Tashkent, FRONTIX adds a dedicated group booking form and pricing to the website.",
    bridge: "Instead of arranging several lanes for a corporate event by phone, a company sends the number needed, date and time in one go through a special form on the site, and the manager's confirmation comes faster.",
    faq: [
      { question: "Are corporate event prices shown separately on the website?", answer: "Yes, the site calculates an estimated price automatically based on group size and the number of lanes or tables booked." },
      { question: "How is a large group's booking request confirmed?", answer: "Once submitted, the manager gets a notification and contacts the customer to confirm the booking details." },
    ],
  },
  "bouling-va-bilyard-klublari__business-automation": {
    intro: "CRM automation tracks regular customers' play history and bonus points automatically. For bowling and billiards clubs in Tashkent, FRONTIX provides a solution that records every customer's hours played and calculates discounts and bonuses automatically.",
    bridge: "Instead of staff trying to remember how many hours a customer has played, the system records every visit automatically and decides on its own when a customer has earned a bonus or discount.",
    faq: [
      { question: "How does the bonus system work — do staff enter anything by hand?", answer: "No, the system totals each customer's play hours automatically and activates the bonus itself when the threshold is reached." },
      { question: "Can a customer's past visits be viewed?", answer: "Yes, the CRM keeps every past visit, hours played and bonuses used on each customer's card." },
    ],
  },
  "yoga-studiyalari__telegram-bot": {
    intro: "A Telegram bot automates booking and cancelling yoga classes. For yoga studios in Tashkent, FRONTIX builds a solution where clients see classes with free spots in the bot and sign up in a few taps.",
    bridge: "Instead of messaging the administrator to ask for a spot, the bot shows the remaining spots in every group class in real time, and clients sign up for the class they want directly.",
    faq: [
      { question: "Does the bot show how many spots are left in a class?", answer: "Yes, each class card shows the remaining spots, and once they're gone the class is marked \"full\"." },
      { question: "Can a class be cancelled at the last minute?", answer: "Yes, clients cancel through the bot, and the freed spot opens to the next client immediately." },
    ],
  },
  "yoga-studiyalari__website-development": {
    intro: "A website is an online resource with full information on instructors, class levels (beginner, intermediate, advanced) and the schedule. For yoga studios in Tashkent, FRONTIX builds a website that introduces each instructor and their class format on a separate page.",
    bridge: "Instead of new clients accidentally joining a class at the wrong level, the site clearly shows which level each class is for and who teaches it, helping them choose correctly.",
    faq: [
      { question: "Does the website show which instructor teaches which level?", answer: "Yes, each instructor's profile lists their specialism and the class levels they teach (beginner, advanced, etc.)." },
      { question: "How does a new client choose the right class?", answer: "The site lets them filter classes by level, pick one that fits their experience and go straight to the sign-up form." },
    ],
  },
  "yoga-studiyalari__business-automation": {
    intro: "CRM automation tracks membership types and remaining classes automatically. For yoga studios in Tashkent, FRONTIX builds a solution that calculates each client's membership status (monthly, 8 classes, unlimited) automatically.",
    bridge: "Instead of staff writing remaining classes in a notebook by hand, the system deducts each attended class from the client's membership automatically and sends a reminder as the end date approaches.",
    faq: [
      { question: "How can we tell how many classes are left on a client's membership?", answer: "The CRM updates the remaining class count on each client's card automatically, and staff can see it instantly at any time." },
      { question: "Are clients notified when their membership is ending?", answer: "Yes, a few days before it ends the system sends the client an automatic reminder, so renewal isn't forgotten." },
    ],
  },
  "bolalar-yozgi-lagerlari__telegram-bot": {
    intro: "A Telegram bot delivers the daily camp schedule and photos of their child to parents. For children's summer camps in Tashkent, FRONTIX builds a solution where parents receive updates in an orderly way through the bot throughout each session.",
    bridge: "Instead of photos and schedules getting lost in scattered WhatsApp groups, the bot automatically sends the session schedule and photos to each parent's private chat at a set time every day.",
    faq: [
      { question: "Does each parent see only their own child's photos?", answer: "Yes, the bot links each parent to the group their child is registered in and sends only that group's daily photos and schedule." },
      { question: "What time is the daily schedule sent?", answer: "The bot automatically sends the day's schedule and photos at a set hour each day (for example, in the evening), so parents don't have to hunt for them." },
    ],
  },
  "bolalar-yozgi-lagerlari__website-development": {
    intro: "A website shows summer sessions, open places and the registration process. For children's summer camps in Tashkent, FRONTIX builds a website that shows open places in every session in real time.",
    bridge: "Instead of parents signing up and only then learning there's no room, the site shows the exact number of open places in each session, and the online registration form stays open only while places remain.",
    faq: [
      { question: "Does the website show how many places are left in each session?", answer: "Yes, each session card shows current open places, and when they run out the session is marked \"full\" automatically." },
      { question: "Can registration be paid for on the website?", answer: "Yes, parents choose a session, fill in the form and can make the advance payment online." },
    ],
  },
  "bolalar-yozgi-lagerlari__business-automation": {
    intro: "CRM automation processes a flood of simultaneous summer session applications in an orderly way. For children's summer camps in Tashkent, FRONTIX builds a solution that registers every application automatically and assigns them to sessions.",
    bridge: "Instead of sorting hundreds of applications by hand in a short window, the system accepts each one automatically and organises it by chosen session, age group and payment status — ending confusion and duplicate sign-ups.",
    faq: [
      { question: "How does the system organise many applications arriving at once?", answer: "Each application goes automatically into a separate list by chosen session and age group, so staff don't have to sort them by hand." },
      { question: "Can the system detect a duplicate application?", answer: "Yes, it spots applications resubmitted with the same child's details and alerts staff." },
    ],
  },
  "konsert-va-tadbir-zallari__telegram-bot": {
    intro: "A Telegram bot gathers hall hire requests in one place. For concert and event halls in Tashkent, FRONTIX builds a solution that takes requests — which arrive scattered across calls, Instagram and personal contacts — through a bot in an orderly way.",
    bridge: "Instead of requests arriving from different sources and being hard to bring together, the bot asks the customer for the event date, type and guest count and puts every request into one organised list.",
    faq: [
      { question: "How are requests from the bot organised?", answer: "Each request reaches the manager's panel with its date, event type and guest count, so every request can be followed from one place." },
      { question: "Can customers check hall availability in the bot in advance?", answer: "Yes, the bot shows instantly whether the hall is free on the requested date and suggests alternatives if it's taken." },
    ],
  },
  "konsert-va-tadbir-zallari__website-development": {
    intro: "A website is a platform for buying event tickets online. For concert and event halls in Tashkent, FRONTIX builds a website where audiences can buy tickets online in advance.",
    bridge: "Instead of tickets being sold only at the box office, the site shows the seating plan and prices for each event, and audience members choose a seat and receive their ticket instantly after paying online.",
    faq: [
      { question: "Can I choose a seat and buy a ticket on the website?", answer: "Yes, free seats are shown on the hall plan, and the audience member picks one and completes the purchase with online payment." },
      { question: "How is a purchased ticket validated?", answer: "After purchase an e-ticket with a QR code is sent, which is scanned at the entrance to the event." },
    ],
  },
  "konsert-va-tadbir-zallari__business-automation": {
    intro: "CRM automation manages hall bookings automatically in a single calendar. For concert and event halls in Tashkent, FRONTIX builds a solution that tracks every event date in one system and prevents clashes.",
    bridge: "Instead of two events accidentally being booked on the same day, the system automatically checks every new booking against existing dates and alerts staff immediately if there's a clash.",
    faq: [
      { question: "How does the system prevent two events clashing?", answer: "When a new booking is entered, the system checks existing bookings on that date automatically and alerts staff immediately if it finds a clash." },
      { question: "Can all staff see the booking calendar at the same time?", answer: "Yes, the calendar is stored in the cloud, and every authorised staff member can view and update it in real time." },
    ],
  },
  "coworking-markazlari__telegram-bot": {
    intro: "A Telegram bot shows desk and office availability in real time and lets members book. For coworking spaces in Tashkent, FRONTIX builds a solution where members see a free desk or room in the bot and book it right away.",
    bridge: "Instead of two members accidentally booking the same spot, the bot updates the status of every desk and room in real time, and a booked spot is shown as \"taken\" to others instantly.",
    faq: [
      { question: "Can I see in the bot exactly which desk or room is free?", answer: "Yes, the bot shows the status of every workspace and room separately, and members book a free one straight away." },
      { question: "Can a booking be cancelled unexpectedly?", answer: "Yes, members cancel through the bot, and the freed spot opens to others immediately." },
    ],
  },
  "coworking-markazlari__website-development": {
    intro: "A website shows a coworking space's available spots and membership terms. For coworking spaces in Tashkent, FRONTIX builds a solution where people see free spots and prices on the website without calling and apply online.",
    bridge: "Instead of calling or visiting to check for space, the site shows the current number of free desks and rooms, and people apply for membership directly from the site.",
    faq: [
      { question: "Are membership types (day, month, year) shown with prices?", answer: "Yes, the site shows each membership type with its price and features in a comparison table." },
      { question: "Can someone sign up for membership directly on the website?", answer: "Yes, they choose a membership type and leave their details through the form, and a manager gets in touch quickly to confirm." },
    ],
  },
  "coworking-markazlari__business-automation": {
    intro: "CRM automation tracks membership types and usage automatically. For coworking spaces in Tashkent, FRONTIX builds a solution that calculates each member's plan, term and usage history automatically.",
    bridge: "Instead of tracking membership terms and usage by hand in a spreadsheet, the system calculates each member's plan end date automatically and reminds both staff and member as it approaches.",
    faq: [
      { question: "Are members notified automatically when their membership is ending?", answer: "Yes, a few days before it ends the system sends the member a reminder, helping them renew on time." },
      { question: "How can staff quickly see each member's plan?", answer: "The CRM shows each member's current plan, start and end dates on their card automatically." },
    ],
  },
  "kompyuter-oyinlari-klublari__telegram-bot": {
    intro: "A Telegram bot takes tournament sign-ups in an orderly way. For gaming clubs in Tashkent, FRONTIX builds a solution that collects participant lists automatically through a bot instead of scattered Telegram groups.",
    bridge: "Instead of participant lists piling up chaotically in different groups, the bot registers each participant by team and game automatically and builds the full participant list instantly.",
    faq: [
      { question: "Can a team sign up for a tournament through the bot?", answer: "Yes, the bot asks for the team name, members and game and registers the whole team as one entry." },
      { question: "Does the bot show when tournament places are full?", answer: "Yes, once the set number of participants is reached, the bot closes registration automatically and offers newcomers a waiting list." },
    ],
  },
  "kompyuter-oyinlari-klublari__website-development": {
    intro: "A website shows the availability of PCs and consoles online. For gaming clubs in Tashkent, FRONTIX builds a solution where customers see a free PC on the website and book it in advance.",
    bridge: "Instead of customers having to come to the club to check whether a PC is free, the site shows the current status of every PC or console, and the hour they want can be booked online in advance.",
    faq: [
      { question: "Can I see on the website which PC is free in real time?", answer: "Yes, the site shows the busy/free status of every PC or console in the club in real time." },
      { question: "Is the spot held if I arrive late for my booking?", answer: "The site holds the booking for a set time (for example, 15 minutes), after which the spot is released automatically." },
    ],
  },
  "kompyuter-oyinlari-klublari__business-automation": {
    intro: "CRM automation calculates customers' play time and payments automatically. For gaming clubs in Tashkent, FRONTIX builds a solution that tracks session time on every PC and produces hourly charges without mistakes.",
    bridge: "Instead of staff calculating hourly rates by hand and making mistakes, the system records the start and end of each session automatically and calculates the amount due precisely.",
    faq: [
      { question: "Is a combined bill produced automatically for a group using several PCs?", answer: "Yes, the system calculates each PC's session separately and totals the group's payment on one receipt." },
      { question: "Can we get daily or monthly revenue reports?", answer: "Yes, the CRM produces daily and monthly revenue reports automatically from all sessions." },
    ],
  },
  "sayohat-gid-xizmatlari__telegram-bot": {
    intro: "A Telegram bot manages a tour guide's daily bookings automatically. For tour guide services in Tashkent, FRONTIX builds a solution that shows the guide's free and busy times in the bot and steers tourists to the right date.",
    bridge: "Instead of the guide's bookings getting lost in personal chats and two tours clashing, the bot checks the guide's schedule for that day automatically before any booking and offers only free times.",
    faq: [
      { question: "Can I find out in advance through the bot which days the guide is booked?", answer: "Yes, the bot keeps the guide's calendar and shows instantly whether they're free on the date a tourist asks about." },
      { question: "If one guide works in several languages, does the bot account for that?", answer: "Yes, the bot tracks the guide's languages and availability in each separately and steers tourists to a suitable guide and time." },
    ],
  },
  "sayohat-gid-xizmatlari__website-development": {
    intro: "A website lets foreign tourists pay for tours online. For tour guide services in Tashkent, FRONTIX builds a multilingual website where tourists can prepay with international cards, cash-free.",
    bridge: "Instead of foreign tourists having to pay in cash, the site lets them pay online in advance through international payment systems, making things easier for overseas guests.",
    faq: [
      { question: "Can tourists pay in foreign currency on the website?", answer: "Yes, the site accepts online payments in dollars and other major currencies through international payment systems." },
      { question: "Does the tourist get a confirmation after paying?", answer: "Yes, once payment goes through, the tour date, guide details and confirmation are emailed to the tourist automatically." },
    ],
  },
  "sayohat-gid-xizmatlari__business-automation": {
    intro: "CRM automation collects tourists' language and route requests and assigns them to a suitable guide automatically. For tour guide services in Tashkent, FRONTIX builds a solution that sorts every request by language, route preference and date and routes it to the right guide.",
    bridge: "Instead of the language a tourist wants and their route wishes getting lost in conversations and scattered chats, the system records every request with language and route tags and assigns it to a suitable guide automatically.",
    faq: [
      { question: "How does the system match a tourist with a guide who speaks the right language?", answer: "The tourist specifies the language in their request, and the system automatically matches them with a guide who works in that language and is free that day." },
      { question: "Does the CRM keep special route requests?", answer: "Yes, each tourist's route preferences and special requests are saved on their card, and the guide can see them before the tour." },
    ],
  },
  "import-eksport-kompaniyalari__business-automation": {
    intro: "CRM automation lets a company manage contracts, documents and deals in one system. For import-export companies in Tashkent, FRONTIX builds a CRM that tracks every deal, document and payment deadline in one place.",
    bridge: "Instead of contracts and invoices scattered across Excel files, the CRM keeps each deal's documents, payment deadlines and currency terms on one card and sends automatic reminders as deadlines approach.",
    faq: [
      { question: "Can customs documents be stored in the CRM?", answer: "Yes, the contract, invoice, certificate and declaration files can be attached to each deal card and found easily through search." },
      { question: "Does the CRM track exchange rates?", answer: "The deal amount and currency can be entered, and reminders about rate changes can be set up, making payment deadlines easier to manage." },
    ],
  },
  "import-eksport-kompaniyalari__custom-software": {
    intro: "Custom software is a program built around a company's own processes. For import-export companies in Tashkent, FRONTIX develops a dedicated system that brings together customs declarations, certification and shipment tracking.",
    bridge: "Instead of tracking by hand which stage a shipment is at (production, in transit, customs, warehouse), the program marks each shipment's stages and shows customers the status in real time, reducing calls.",
    faq: [
      { question: "Can the software integrate with customs systems?", answer: "Yes, customs declaration numbers and statuses can be entered manually or via API, and the shipment stage updates automatically from them." },
      { question: "Can a pricing function be added too?", answer: "Yes, a module can be added that calculates quotes automatically, taking into account delivery time, exchange rates and extra costs." },
    ],
  },
  "import-eksport-kompaniyalari__website-development": {
    intro: "A website is an official source that gives partners confidence in the products, routes and services a company offers. For import-export companies in Tashkent, FRONTIX builds a professional, multilingual website for international partners and local buyers.",
    bridge: "Instead of new partners relying only on word of mouth about the company, the site shows the product catalogue, delivery routes and certificates, building trust and letting first enquiries come in online.",
    faq: [
      { question: "Should the website also be in English or Russian?", answer: "Yes, a multilingual site is recommended for companies with international partners — FRONTIX prepares Uzbek, Russian and English versions." },
      { question: "Don't we need to show product prices on the website?", answer: "No — prices often depend on the deal, so the site has a request form where customers specify the product and volume." },
    ],
  },
  "ombor-ijarasi-xizmatlari__business-automation": {
    intro: "CRM automation lets you track rental contracts, customers and payments in one system. For warehouse rental services in Tashkent, FRONTIX builds a CRM that clearly shows every storage area, tenant and payment status.",
    bridge: "Instead of information about free and occupied space living in the manager's memory, the CRM shows each section's status (free, occupied, reserved) in real time, so new customers get a quick answer.",
    faq: [
      { question: "Does the CRM track late payments?", answer: "Yes, a payment due date is entered for each contract, and the system reminds the manager automatically when it's approaching or overdue." },
      { question: "Does it work with several warehouse locations?", answer: "Yes, the system tracks each location and its sections separately, and a combined occupancy report is available in one place." },
    ],
  },
  "ombor-ijarasi-xizmatlari__custom-software": {
    intro: "Custom software is a program developed to manage storage space and stock turnover. For warehouse rental services in Tashkent, FRONTIX builds a dedicated system that tracks space occupancy and customers' stock in the warehouse.",
    bridge: "Instead of customers not knowing how much of their own stock is in storage, the program opens a separate account for each customer, records goods in and out, and lets customers see their balance in a personal account at any time.",
    faq: [
      { question: "Can separate personal accounts be created for customers?", answer: "Yes, each tenant logs in with their own credentials and sees their stock balance and occupied space." },
      { question: "Can the warehouse layout be shown visually?", answer: "Yes, the program divides the warehouse plan into sections and shows each one's occupancy as a colour-coded map." },
    ],
  },
  "ombor-ijarasi-xizmatlari__website-development": {
    intro: "A website is an online shop window with information about a warehouse company's available space, location and prices. For warehouse rental services in Tashkent, FRONTIX builds a website that shows free space and terms and includes a request form.",
    bridge: "Instead of new customers only learning about the warehouse by phone, the site shows space sizes, a location map and prices, and customers choose the size they need and submit a request online.",
    faq: [
      { question: "Can the warehouse location be shown on a map?", answer: "Yes, the site shows the warehouse address on an interactive map, so customers see immediately how convenient the location is." },
      { question: "Can the number of free spaces update automatically on the website?", answer: "Yes, the site can connect to the CRM and update free space information automatically." },
    ],
  },
  "avtomobil-ijarasi__website-development": {
    intro: "A website is an online shop window listing rental cars with prices and availability. For car rental services in Tashkent, FRONTIX builds a website with a car catalogue and an online booking form.",
    bridge: "Instead of customers calling and leaving when the operator is busy, the site shows each car's free days in a calendar and customers can send a booking request online at any time.",
    faq: [
      { question: "Is each car's availability calendar shown on the website?", answer: "Yes, each car's card shows booked and free days in calendar form, and customers pick a suitable date and submit a request." },
      { question: "Are prices shown separately by car type?", answer: "Yes, daily and long-term rental prices are shown separately for each car, so customers can compare and choose." },
    ],
  },
  "avtomobil-ijarasi__telegram-bot": {
    intro: "A Telegram bot automates quick communication with customers and bookings. For car rental services in Tashkent, FRONTIX builds a Telegram bot that shows car availability and takes booking requests.",
    bridge: "Instead of one car accidentally being booked to two customers, the bot keeps every booked date in one database, checks each new request automatically and never offers booked days.",
    faq: [
      { question: "Are bookings through the bot confirmed in real time?", answer: "Yes, once the customer picks a date the bot checks the fleet and offers only unbooked cars, preventing double bookings." },
      { question: "Can the bot send a reminder about returning the car?", answer: "Yes, the bot sends the customer an automatic reminder as the return date approaches." },
    ],
  },
  "avtomobil-ijarasi__business-automation": {
    intro: "CRM automation lets you manage car availability, customers and contracts in one system. For car rental services in Tashkent, FRONTIX builds a CRM that tracks every car's condition, bookings and inspection dates.",
    bridge: "Instead of a car's condition going undocumented on return and causing disputes later, the CRM requires a checklist (fuel, mileage, damage) at the end of every rental and saves it on the customer's card.",
    faq: [
      { question: "Does the CRM track inspection and insurance dates?", answer: "Yes, each car's inspection and insurance dates are entered and the system sends reminders as they approach, reducing the risk of a car going out with expired papers." },
      { question: "Can photos be attached to prove a car's condition in disputes?", answer: "Yes, photos of the car's condition can be attached to the card at the end of each rental and used as evidence in any dispute." },
    ],
  },
  "avtosalonlar__website-development": {
    intro: "A website is an online shop window with a catalogue of cars for sale, prices and terms. For car dealerships in Tashkent, FRONTIX builds a website that shows every available model with filters and includes a test-drive booking form.",
    bridge: "Instead of buyers hunting for available models across social media, the site shows every car for sale filtered by price, make and year, and buyers can book a test drive of the car they like directly.",
    faq: [
      { question: "Are detailed specs shown for each car on the website?", answer: "Yes, each car's card shows the year, mileage, engine size and other technical details." },
      { question: "Can a loan calculator be added to the website?", answer: "Yes, the site gets a loan calculator that estimates the monthly payment from the down payment and term." },
    ],
  },
  "avtosalonlar__telegram-bot": {
    intro: "A Telegram bot handles quick communication with buyers and alerts about new arrivals. For car dealerships in Tashkent, FRONTIX builds a Telegram bot that announces new cars and books test drives.",
    bridge: "Instead of the phone queue for test drives getting muddled, the bot shows customers free time slots, books the chosen one automatically and notifies the dealership manager.",
    faq: [
      { question: "Can customers get notifications about new arrivals through the bot?", answer: "Yes, if the customer chooses a make or budget they're interested in, the bot notifies them automatically when a matching car arrives." },
      { question: "Can a trade-in request be left through the bot?", answer: "Yes, the customer sends photos and details of their old car to the bot, and the request goes to a manager as the basis for getting in touch." },
    ],
  },
  "avtosalonlar__business-automation": {
    intro: "CRM automation lets you manage buyers, car inventory and deals in one system. For car dealerships in Tashkent, FRONTIX builds a CRM that tracks each car's status, the negotiation stage with each buyer and trade-in requests.",
    bridge: "Instead of trade-in requests and agreed prices getting lost on paper, the CRM opens a separate deal card for each buyer, storing the old car's condition, the price offered and the negotiation stage.",
    faq: [
      { question: "Does the CRM track car inventory?", answer: "Yes, each car's status (for sale, reserved, sold) is shown in the system, so managers know the real available stock in real time." },
      { question: "How do you stop several managers working with the same customer at once?", answer: "The CRM assigns each customer to a responsible manager, preventing two managers from working with the same buyer independently." },
    ],
  },
  "lombard-xizmatlari__website-development": {
    intro: "A website is an online source describing a pawnshop's services, the items it accepts and its valuation terms. For pawnshops in Tashkent, FRONTIX builds a website showing estimated amounts by item type and accepting online requests.",
    bridge: "Instead of customers having to visit a branch to learn how much they could get, the site shows an estimated valuation table for gold, electronics and other items, so customers can calculate in advance before coming in.",
    faq: [
      { question: "Can customers learn an item's exact value on the website?", answer: "The site shows an estimate, since the exact valuation is set at the branch after inspection — but it gives customers an idea in advance." },
      { question: "Are branch addresses and opening hours shown on the website?", answer: "Yes, every branch's address, phone number and hours are shown on a separate page and on a map." },
    ],
  },
  "lombard-xizmatlari__telegram-bot": {
    intro: "A Telegram bot sends customers automatic reminders about pledge deadlines and payments. For pawnshops in Tashkent, FRONTIX builds a Telegram bot that messages customers before their pledge term ends.",
    bridge: "Instead of customers forgetting their deadline, paying more interest or losing their item, the bot sends an automatic reminder as each pledge agreement's deadline approaches, so the customer can decide in advance whether to extend or redeem.",
    faq: [
      { question: "Which channel does the bot use, and does the customer need to register?", answer: "The customer connects to the bot once when the pledge is set up; after that, all reminders arrive automatically with no further registration." },
      { question: "Can an extension request be sent through the bot?", answer: "Yes, after receiving a reminder the customer can say through the bot that they want to extend or pay, and the request goes to the branch." },
    ],
  },
  "lombard-xizmatlari__business-automation": {
    intro: "CRM automation lets you manage pledge agreements, customers and deadlines in one system. For pawnshops in Tashkent, FRONTIX builds a CRM that tracks every pledged item, its amount and term.",
    bridge: "Instead of pledged items and their storage locations being logged on scattered paper, the CRM opens a card for each item showing its type, valuation, storage location and term, making items quick to find.",
    faq: [
      { question: "Does the CRM show overdue pledges automatically?", answer: "Yes, the system lists overdue and upcoming pledges separately, so staff can deal with them first." },
      { question: "If there are several branches, does each keep its own records?", answer: "Yes, the system keeps each branch's pledges and customers separately, while combined reports can be viewed centrally." },
    ],
  },
  "tarjima-xizmatlari__website-development": {
    intro: "A website is an online source showing a translation agency's language pairs, prices and ordering process. For translation agencies in Tashkent, FRONTIX builds a website that shows prices by language and document type and includes an upload-and-order form.",
    bridge: "Instead of customers having to call to learn the price, the site shows prices by language pair and document type in a table, and customers upload their document, see the price and order online.",
    faq: [
      { question: "Is notarisation shown separately on the website?", answer: "Yes, notarisation is listed as an extra service with its own price and timeline, and customers add it to the order if needed." },
      { question: "Can an urgent translation be ordered on the website?", answer: "Yes, the site shows standard and urgent (express) options with the price difference, and customers pick the timeline they need." },
    ],
  },
  "tarjima-xizmatlari__telegram-bot": {
    intro: "A Telegram bot automatically tells customers about their order status. For translation agencies in Tashkent, FRONTIX builds a Telegram bot that shows which stage a document is at (translation, editing, notarisation).",
    bridge: "Instead of customers constantly calling to check on their document, the bot shows the current stage by order number and messages the customer automatically when each stage is complete.",
    faq: [
      { question: "Does the bot tell me when my document is ready to collect?", answer: "Yes, as soon as the document has been notarised and is ready, the bot messages the customer right away." },
      { question: "Can new orders be placed through the bot?", answer: "Yes, customers send the document file to the bot and choose the language pair to place a new order." },
    ],
  },
  "tarjima-xizmatlari__business-automation": {
    intro: "CRM automation lets you manage documents, translators and deadlines in one system. For translation agencies in Tashkent, FRONTIX builds a CRM that tracks which translator has each document and what stage it's at.",
    bridge: "Instead of document assignments among several translators being logged in scattered messengers with deadlines getting confused, the CRM assigns each document to a responsible translator, marks the stages (translation, editing, notarisation) and sends reminders as deadlines approach.",
    faq: [
      { question: "Does the CRM flag urgent orders?", answer: "Yes, urgent orders are flagged separately and shown at the top of the list so they don't run late." },
      { question: "Can translators' workloads be compared?", answer: "Yes, the system shows how many documents each translator has, helping assign new orders to whoever is least busy." },
    ],
  },
  "audit-va-konsalting__website-development": {
    intro: "A website is an official source that builds trust in a firm's services, experience and specialists. For audit and consulting firms in Tashkent, FRONTIX builds a website showing specialisms and completed projects, with a consultation booking form.",
    bridge: "Instead of new clients only learning about the firm's experience through referrals, the site shows specialisms, certificates and past projects, building trust and letting clients book a consultation online.",
    faq: [
      { question: "Doesn't the website have to show details of client contracts?", answer: "No, confidentiality is preserved — instead of contract details, experience is shown in general terms (industry, scope of work)." },
      { question: "Should prices be put on the website?", answer: "Since pricing depends on project scope, the site offers a request form for an initial estimate instead of fixed prices." },
    ],
  },
  "audit-va-konsalting__business-automation": {
    intro: "CRM automation lets you manage clients, projects and reporting deadlines in one system. For audit and consulting firms in Tashkent, FRONTIX builds a CRM that tracks each client project's stage and deadlines.",
    bridge: "Instead of reporting deadlines getting mixed up when working with several clients at once, the CRM marks each project's stages (collecting documents, analysis, preparing the report) and reminds the responsible staff member automatically as deadlines approach.",
    faq: [
      { question: "Can the CRM also be used to store client documents?", answer: "Yes, financial documents and reports can be attached to each client's card, removing the need to search through scattered emails." },
      { question: "If several staff work on one project, can tasks be divided up?", answer: "Yes, the system lets each task within a project be assigned to a specific person and its progress tracked." },
    ],
  },
  "audit-va-konsalting__telegram-bot": {
    intro: "A Telegram bot automatically updates clients on project status and reporting deadlines. For audit and consulting firms in Tashkent, FRONTIX builds a Telegram bot that sends reminders about project stages and consultation meetings.",
    bridge: "Instead of clients having to email to ask what stage their project is at, the bot messages them automatically when the stage changes (documents received, analysis started, report ready).",
    faq: [
      { question: "Can clients book a consultation through the bot?", answer: "Yes, clients choose a free time slot in the bot and book the meeting online." },
      { question: "Can clients get the list of required documents through the bot?", answer: "Yes, when a project starts the bot automatically sends the client the list of documents needed for the audit or consulting work." },
    ],
  },
  "kadrlar-agentliklari__website-development": {
    intro: "A website is an online source of information about an agency's open vacancies and services. For HR and recruitment agencies in Tashkent, FRONTIX builds a website with a regularly updated vacancy list and a CV submission form.",
    bridge: "Instead of job seekers only learning about vacancies by calling or visiting, the site shows every open vacancy filtered by field and city, and candidates submit their CV online to the ones that fit.",
    faq: [
      { question: "Do vacancies update automatically on the website?", answer: "Yes, the list is connected to the CRM and updates automatically when a vacancy is added or closed." },
      { question: "Can companies submit hiring requests through the website?", answer: "Yes, there's a separate form for client companies where they specify the position and requirements to request a search." },
    ],
  },
  "kadrlar-agentliklari__business-automation": {
    intro: "CRM automation lets you manage candidates, vacancies and client companies in one system. For HR and recruitment agencies in Tashkent, FRONTIX builds a CRM that matches the candidate base with vacancies.",
    bridge: "Instead of CVs scattered across folders making good matches hard to find, the CRM stores each candidate's qualifications, experience and preferred field, and automatically filters matching candidates when a new vacancy arrives.",
    faq: [
      { question: "Does the CRM show which vacancies are open and which are closed?", answer: "Yes, each client company's vacancy request is kept on its own card, and its status (searching, candidate selected, closed) is visible in real time." },
      { question: "Can the interview schedule be managed in the CRM?", answer: "Yes, the system sets each candidate's interview date and time and prevents two meetings from being booked in the same slot by accident." },
    ],
  },
  "kadrlar-agentliklari__telegram-bot": {
    intro: "A Telegram bot handles quick communication with candidates and client companies. For HR and recruitment agencies in Tashkent, FRONTIX builds a Telegram bot that announces new vacancies and books interviews.",
    bridge: "Instead of interviews clashing because times are arranged by phone, the bot shows candidates free slots, books the chosen one automatically and adds it to the agency's calendar.",
    faq: [
      { question: "Can I get notified through the bot about vacancies in my field?", answer: "Yes, if a candidate tells the bot which field and role interest them, the bot notifies them automatically when a matching vacancy appears." },
      { question: "Can I send my CV through the bot?", answer: "Yes, candidates can send their CV file straight to the bot, and it's added to the agency's database automatically." },
    ],
  },
  "repetitorlik-markazlari__website-development": {
    intro: "A tutoring centre is an education service offering one-to-one or small-group lessons in school subjects or exam prep (DTM, IELTS, SAT). For tutoring centres in Tashkent, FRONTIX builds a website that shows each tutor's subject, experience and free hours and earns parents' trust.",
    bridge: "Instead of new clients calling every number to find out which tutor has a free slot in which subject, the site shows each tutor's subject, level and open time slots and leads the client straight to an application.",
    faq: [
      { question: "Can each tutor's free hours be shown separately on the website?", answer: "Yes, each tutor gets a page showing their subject, level (such as DTM or IELTS) and free hours for the current week, and clients pick a time and apply." },
      { question: "Can practice test results be posted on the website?", answer: "Yes, the centre's achievements (for example, how many students scored highly on the DTM last year) are shown in a dedicated section, building trust with new parents." },
    ],
  },
  "repetitorlik-markazlari__telegram-bot": {
    intro: "A tutoring centre is an education service that organises one-to-one lessons in subjects or exam prep. For tutoring centres in Tashkent, FRONTIX develops a Telegram bot that communicates directly with parents and students and manages the lesson schedule.",
    bridge: "Instead of 30-45 minute lessons being arranged verbally by phone and two students ending up in the same slot, the bot shows each tutor's busy and free times in real time and books lessons automatically.",
    faq: [
      { question: "Does the bot remind parents when their child's lesson is?", answer: "Yes, the bot sends parents an automatic reminder a few hours before each lesson and also notifies them of cancellations or reschedules." },
      { question: "Can the bot track how many days are left until the exam?", answer: "Yes, if the student enters their DTM or IELTS date, the bot counts down the days and sends reminders according to the prep plan." },
    ],
  },
  "repetitorlik-markazlari__business-automation": {
    intro: "A tutoring centre is an education service providing individual preparation in subjects or for exams. For tutoring centres in Tashkent, FRONTIX implements CRM automation that keeps every student's personal progress and payments in one system.",
    bridge: "Instead of each student's programme and practice test scores being kept on paper or in the tutor's head with no way to show progress, the CRM keeps mastered topics and test history on each student's card, so a report for parents can be produced at any time.",
    faq: [
      { question: "Can the CRM show a chart of a student's practice test results?", answer: "Yes, results are entered over time and the system builds a progress chart automatically, which can be shared with parents." },
      { question: "Can several tutors' schedules be managed in one system?", answer: "Yes, the CRM shows every tutor's busy and free hours in one place, so new clients can quickly be routed to a free tutor." },
    ],
  },
  "xalq-tabobati-markazlari__website-development": {
    intro: "A traditional medicine centre is a health service using traditional treatments such as herbal therapy, hirudotherapy and acupuncture. For traditional medicine centres in Tashkent, FRONTIX builds a website that openly shows practitioners' certificates and experience and earns clients' trust.",
    bridge: "Instead of clients doubting the safety of treatments and hearing about practitioners' experience only by word of mouth, the site shows each practitioner's certificates, training and years of experience on an official page, giving clients confidence before they decide.",
    faq: [
      { question: "Can practitioners' certificates be scanned and posted on the website?", answer: "Yes, each practitioner's page shows images of their diplomas, certificates and specialisms, which builds client trust." },
      { question: "Can misconceptions about traditional medicine be explained on the website?", answer: "Yes, each treatment type gets its own page explaining how it works, how many sessions are needed and what realistic results to expect." },
    ],
  },
  "xalq-tabobati-markazlari__telegram-bot": {
    intro: "A traditional medicine centre treats patients with traditional methods (herbal therapy, acupuncture, hirudotherapy). For traditional medicine centres in Tashkent, FRONTIX builds a Telegram bot where clients who are hesitant to call can ask questions in writing.",
    bridge: "Instead of clients holding back from calling, they send their question to the bot in writing, and the administrator or practitioner answers in detail without pressure — making the first step easier.",
    faq: [
      { question: "Can the bot remind clients of their next session date?", answer: "Yes, during an 8-10 session course the bot sends a reminder the day before each session, preventing the course from being interrupted." },
      { question: "Who answers when a client asks the bot about a treatment?", answer: "The question goes automatically to the administrator or the relevant practitioner, and the client receives a written answer in the bot — no need to call." },
    ],
  },
  "xalq-tabobati-markazlari__business-automation": {
    intro: "A traditional medicine centre is a health facility using traditional treatment methods. For traditional medicine centres in Tashkent, FRONTIX implements CRM automation that tracks the length of each client's treatment course and their attendance.",
    bridge: "Instead of an 8-10 session course losing effect when clients skip sessions with nobody reminding them, the CRM stores each client's course schedule and sends automatic reminders before the next session, increasing the chance of finishing the course.",
    faq: [
      { question: "Can the CRM show which session a client is on?", answer: "Yes, each client's card shows how many sessions are done and how many remain, and the next visit is scheduled automatically." },
      { question: "Does the CRM track when practitioners' certificates expire?", answer: "Yes, each practitioner's certificate expiry is entered, and the administrator is reminded as it approaches — helping maintain trust." },
    ],
  },
  "fizioterapiya-markazlari__website-development": {
    intro: "A physiotherapy and rehabilitation centre provides long-term treatment to restore mobility after injury or illness. For physiotherapy centres in Tashkent, FRONTIX builds a website with clear information about rehabilitation programmes and specialists.",
    bridge: "Instead of patients abandoning rehabilitation halfway because they feel no change, the site shows examples of how previous patients progressed (such as changes in range of motion), explaining to new patients why patience matters.",
    faq: [
      { question: "Can the website show how many sessions a programme involves?", answer: "Yes, for each condition (for example, post-stroke or post-injury rehabilitation) the estimated number of sessions and stages is explained on its own page." },
      { question: "Can a patient book a first consultation through the website?", answer: "Yes, the online form collects a short description of the patient's condition and schedules an initial consultation with a suitable specialist." },
    ],
  },
  "fizioterapiya-markazlari__telegram-bot": {
    intro: "A physiotherapy and rehabilitation centre restores patients' mobility through a long-term programme. For physiotherapy centres in Tashkent, FRONTIX builds a Telegram bot that sends patients their home exercises and progress data.",
    bridge: "Instead of a home exercise set sketched on paper that gets lost or done incorrectly, the bot sends each patient their assigned exercises as videos or images they can rewatch at any time.",
    faq: [
      { question: "Can the bot show a patient's range-of-motion progress?", answer: "Yes, after each session the specialist enters measurements in the bot, and the bot sends the patient their progress as a simple chart or short summary." },
      { question: "Is information shared through the bot for a patient working with several specialists?", answer: "Yes, the bot keeps the patient's overall treatment history, so any specialist can see previous sessions without asking the patient again." },
    ],
  },
  "fizioterapiya-markazlari__business-automation": {
    intro: "A physiotherapy and rehabilitation centre provides long-term treatment to restore patients' mobility step by step. For physiotherapy centres in Tashkent, FRONTIX implements CRM automation that records each patient's measurements at every session.",
    bridge: "Instead of range-of-motion measurements written on paper with no overall progress chart ever shown, the CRM keeps every session's measurements on the patient's card and builds a progress chart automatically, which can be shown to patients to motivate them to continue.",
    faq: [
      { question: "Does the CRM share patient information between specialists (physiotherapist, massage therapist, instructor)?", answer: "Yes, all specialists can access the patient's shared card, so nobody has to ask about the patient's condition from scratch each time." },
      { question: "Can the CRM reduce the number of patients who drop out halfway?", answer: "Yes, because the system shows progress in numbers, even patients who don't feel a change can see real improvement on the chart, making it easier to persuade them to continue." },
    ],
  },
  "tibbiy-buyumlar-dokonlari__online-ordering": {
    intro: "A medical supply store sells equipment such as wheelchairs, blood pressure monitors and walking sticks. For medical supply stores in Tashkent, FRONTIX builds an online ordering system that lets customers order without seeing the product in person.",
    bridge: "Instead of an out-of-town customer ordering a wheelchair for elderly parents by describing it over the phone, the online ordering system shows each product's size, specs and photos, so the customer chooses, enters the delivery address and orders themselves.",
    faq: [
      { question: "Does the ordering system show whether a product is in stock?", answer: "Yes, each product card shows stock status in real time, so customers never arrive at the shop to find it sold out." },
      { question: "Can I order the model my doctor recommended?", answer: "Yes, in the order form the customer can leave the doctor's recommendation or a photo of the prescription with a note, and the seller picks the matching product and gets in touch to confirm." },
    ],
  },
  "tibbiy-buyumlar-dokonlari__website-development": {
    intro: "A medical supply store is a specialist shop selling wheelchairs, blood pressure monitors, orthopaedic products and more. For medical supply stores in Tashkent, FRONTIX builds a website that presents the full product catalogue with technical specs.",
    bridge: "Instead of customers who don't know sizes and specs having to visit the store to inspect every wheelchair or monitor, the site offers detailed spec tables, comparisons and usage advice for every product, so customers can choose the right one from home.",
    faq: [
      { question: "Can products be compared on the website?", answer: "Yes, different models in one category (such as wheelchairs) can be compared side by side by weight, load capacity and price." },
      { question: "Does the website help with products chosen on a doctor's advice, like orthopaedic mattresses or compression garments?", answer: "Yes, each such product's page explains which model is recommended in which cases, and customers can request a consultation if unsure." },
    ],
  },
  "tibbiy-buyumlar-dokonlari__telegram-bot": {
    intro: "A medical supply store is a specialist outlet for medical equipment and products. For medical supply stores in Tashkent, FRONTIX builds a Telegram bot that gives customers quick advice on choosing products.",
    bridge: "Instead of the seller failing to find the right product when a doctor's recommendation is explained over the phone, the bot collects details about the condition and recommendation through short questions, offers matching options with photos and prices, and connects to a specialist if needed.",
    faq: [
      { question: "Can stock be checked through the bot?", answer: "Yes, when a customer types a product name or picks it from the catalogue, the bot shows stock status in real time." },
      { question: "Can I order with delivery through the bot?", answer: "Yes, customers choose a product in the bot, enter their address and order, and the bot sends the order to the store team automatically." },
    ],
  },
  "optom-savdo-kompaniyalari__business-automation": {
    intro: "A wholesale company supplies retail shops with goods in large volumes. For wholesale companies in Tashkent, FRONTIX implements CRM automation that manages price tiers, stock and receivables in one place.",
    bridge: "Instead of individual discounts and price tiers being calculated by hand in Excel with errors, the CRM applies each customer's set price tier automatically and calculates order totals without mistakes.",
    faq: [
      { question: "Can a customer's outstanding debt be tracked in the CRM?", answer: "Yes, each customer's card automatically shows their current debt, payment history and available credit limit." },
      { question: "Can the order stage (confirmed, being picked, shipped) be tracked in the CRM?", answer: "Yes, every order has a step-by-step status, and sales, warehouse and accounting all see it in the same system in real time." },
    ],
  },
  "optom-savdo-kompaniyalari__custom-software": {
    intro: "A wholesale company sells goods to retail outlets in large batches. For wholesale companies in Tashkent, FRONTIX develops custom software that brings the warehouse, price tiers and customer accounts together in one system.",
    bridge: "Instead of warehouse stock and customer debts being kept separately so managers never have the full picture, custom software links the warehouse and financial records in real time, letting a manager see a customer's debt and available stock on one screen.",
    faq: [
      { question: "Can the custom software integrate with our existing accounting program?", answer: "Yes, the system can integrate with the accounting or warehouse software the company already uses, with two-way data sync." },
      { question: "Can stock be tracked separately for several branches or warehouses?", answer: "Yes, the system keeps separate stock and order flows for each warehouse or branch, while the overall report is shown centrally." },
    ],
  },
  "optom-savdo-kompaniyalari__website-development": {
    intro: "A wholesale company is a trading organisation selling goods to retail shops in large volumes. For wholesale companies in Tashkent, FRONTIX builds a corporate website with information about the product range and terms.",
    bridge: "Instead of a new customer (shop owner) having to call a salesperson to learn about the range and minimum order, the site shows the full product catalogue, price tiers and partnership terms, so customers can explore independently and submit a request.",
    faq: [
      { question: "Can prices be shown only to registered partners?", answer: "Yes, with a login system the general catalogue is public while exact prices are shown only to approved partners." },
      { question: "Can a new partnership application be submitted through the website?", answer: "Yes, a new customer can send details about their shop and a partnership request through the site, and the company receives and reviews it in the CRM." },
    ],
  },
  "bilbord-ijarasi__website-development": {
    intro: "A billboard rental service leases advertising boards across the city to advertisers. For billboard rental companies in Tashkent, FRONTIX builds a website that shows every billboard's location and availability on a map.",
    bridge: "Instead of clients having to visit in person to judge a billboard's location and visibility, the site shows each billboard on a map with quality photos and dimensions, so clients can choose the right spot from home and submit a request.",
    faq: [
      { question: "Does the website show whether billboards are free or booked?", answer: "Yes, each billboard's current status (free or booked, and until when) is updated in real time." },
      { question: "Can a client book a billboard for a specific date through the website?", answer: "Yes, the client chooses a billboard, enters the start date and duration and sends a request, and the team confirms and gets in touch." },
    ],
  },
  "bilbord-ijarasi__telegram-bot": {
    intro: "A billboard rental service leases advertising boards for varying periods. For billboard rental companies in Tashkent, FRONTIX builds a Telegram bot that announces free billboards and reminds about expiring rentals.",
    bridge: "Instead of tracking days left on each rental by hand and billboards sitting empty because clients weren't reminded in time, the bot sends automatic reminders to both client and manager a few days before the rental ends, keeping billboards continuously booked.",
    faq: [
      { question: "Can a new client check free billboards through the bot?", answer: "Yes, when a client types an area or route, the bot sends a list of free billboards there with photos and prices." },
      { question: "How does the bot tell the manager about expiring billboards?", answer: "Every week the bot automatically sends the manager a list of all billboards whose rental ends within 7 days, so the search for new clients can start early." },
    ],
  },
  "bilbord-ijarasi__business-automation": {
    intro: "A billboard rental service leases advertising boards across the city. For billboard rental companies in Tashkent, FRONTIX implements CRM automation that manages occupancy and payments for every billboard.",
    bridge: "Instead of payment dates for billboards rented to different clients at different terms and prices being kept on paper and overdue payments going unnoticed, the CRM stores each billboard's rental term and payment schedule and alerts automatically as payments approach or become overdue.",
    faq: [
      { question: "Can the CRM help plan in advance when a billboard will become free?", answer: "Yes, the system shows every billboard's rental period in a calendar, so new clients can be sought ahead of time for billboards about to free up." },
      { question: "Does the CRM keep a client's payment history?", answer: "Yes, each client's card shows their full payment history and current balance, which also informs future contracts." },
    ],
  },
  "klining-kompaniyalari__telegram-bot": {
    intro: "A cleaning company provides professional cleaning of offices, apartments and post-renovation spaces. For cleaning companies in Tashkent, FRONTIX builds a Telegram bot that takes orders and tracks crew status.",
    bridge: "Instead of customers calling again and again to ask when the crew will arrive, the bot tells them in real time when the crew sets off, arrives on site and finishes the job, so they stay informed without calling.",
    faq: [
      { question: "Can the bot calculate the price by area and service type?", answer: "Yes, when a customer enters the room area and cleaning type (standard, post-renovation, etc.), the bot calculates an estimated price automatically." },
      { question: "Can the bot remind regular customers about weekly cleaning?", answer: "Yes, for regulars such as offices, the bot reminds both the customer and the crew the day before the next cleaning, reducing missed visits." },
    ],
  },
  "klining-kompaniyalari__business-automation": {
    intro: "A cleaning company cleans all kinds of premises (offices, apartments, post-renovation spaces). For cleaning companies in Tashkent, FRONTIX implements CRM automation that manages crews and customer history.",
    bridge: "Instead of customer complaints after a clean going unrecorded and the same problem recurring, the CRM stores customer comments and complaints for each site, and the next crew reviews the previous notes before setting off.",
    faq: [
      { question: "Can the CRM show which crew is heading to which site during the day?", answer: "Yes, the system shows each crew's daily route and the job status at the current site (started, finished) in real time." },
      { question: "Does the CRM manage regular customers' repeat cleaning schedules automatically?", answer: "Yes, the agreed weekly or monthly schedule is entered once, and the CRM creates the next dates automatically and reminds both crew and customer." },
    ],
  },
  "klining-kompaniyalari__website-development": {
    intro: "A cleaning company provides professional cleaning for offices and homes. For cleaning companies in Tashkent, FRONTIX builds a website that shows service types and prices clearly.",
    bridge: "Instead of customers working out the exact price by hand with a manager over the phone every time, the site offers a calculator that estimates the price from area and service type, and customers submit an order request right away.",
    faq: [
      { question: "How does the price calculator on the website work?", answer: "The customer chooses the area, cleaning type (standard, post-renovation, deep clean) and any extras, and the site shows an estimated price instantly." },
      { question: "Is there a separate section for regular (office) customers?", answer: "Yes, offices needing regular cleaning have a separate request form for agreeing monthly or weekly service terms." },
    ],
  },
  "quyosh-panellari-ornatish__website-development": {
    intro: "A solar panel installation service designs and installs solar energy systems for homes and buildings. For solar panel installers in Tashkent, FRONTIX builds a website that gives customers a preliminary estimate.",
    bridge: "Instead of customers waiting for a specialist visit to learn what system size they need, the site offers a calculator that estimates capacity and price from monthly electricity usage and roof area, so customers get an initial idea and then call a specialist for exact measurements.",
    faq: [
      { question: "What data does the website calculator use?", answer: "The customer enters their monthly electricity bill or usage, and the site shows roughly how many panels and what capacity are needed, and the estimated price." },
      { question: "Can customers learn about leasing or subsidy terms on the website?", answer: "Yes, a separate page explains state subsidy and instalment terms, so customers know in advance whether they qualify." },
    ],
  },
  "quyosh-panellari-ornatish__telegram-bot": {
    intro: "A solar panel installation business installs solar energy systems for homes and businesses. For solar panel installers in Tashkent, FRONTIX builds a Telegram bot that gathers new enquiries and sends customers reports.",
    bridge: "Instead of new orders coming from different channels (calls, social media) with some going unanswered, the bot gathers every enquiry in one place, asks each customer about their address, roof type and budget, and sends the details to the team automatically — so no enquiry is overlooked.",
    faq: [
      { question: "Can the bot send customers their installed panels' generation figures?", answer: "Yes, based on data from the system after installation, the bot can send customers a monthly or weekly report on energy generated and money saved." },
      { question: "Can customers get initial advice about subsidies or leasing in the bot?", answer: "Yes, when a customer asks, the bot gives a short overview of general terms and connects them to a specialist for an exact calculation." },
    ],
  },
  "quyosh-panellari-ornatish__business-automation": {
    intro: "A solar panel installation service designs and installs solar energy systems for homes and buildings. For solar panel installers in Tashkent, FRONTIX implements CRM automation that manages every enquiry and project.",
    bridge: "Instead of enquiries arriving from different sources, not collected in one place, with some going unanswered, the CRM gathers every enquiry (calls, website, social media) into one list, assigns each a responsible manager and tracks the project stage (survey, quote, installation).",
    faq: [
      { question: "Can the CRM track warranties on installed systems?", answer: "Yes, each customer's card stores the installation date and warranty period, and the system sends an automatic reminder as it approaches." },
      { question: "Does the CRM help prepare regular savings reports for customers?", answer: "Yes, if panel generation data is entered, the system produces a monthly savings report for the customer automatically, increasing the chance of referrals." },
    ],
  },
};
