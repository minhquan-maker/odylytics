export type LegalSection = { heading: string; body?: string[]; items?: string[]; after?: string[] }
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] }

const UPDATED = '14 October 2026'
const EMAIL = 'odylytics@gmail.com'

// TODO(content): have these documents reviewed by a qualified lawyer before relying on them.
// Before shipping, also add the registered legal entity name, registration number and postal address,
// and confirm every operational promise below can really be kept: retention periods, the 30-day reply
// window for data requests, the commitment not to train models on site data, and the 14-day notice
// handling for content complaints.

export const PRIVACY: LegalDoc = {
  title: 'Privacy Policy',
  updated: UPDATED,
  intro: `This policy explains, in plain language, what personal data Odylytics (“Odylytics”, “we”, “us”, “our”) collects when you use this website and the member dashboard (together, “the Site”), why we collect it, what we do with it, who we share it with, how long we keep it, how we protect it and the rights you have. We keep data collection to the minimum needed to run the Site and to reply to you, and we never sell personal data.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'We collect very little: what you choose to email us, member account details if you are an invited member, basic technical and anonymous usage data, and two display preferences saved on your own device.',
        'We do not sell your personal data, we do not run advertising, and we do not build advertising profiles.',
        'We do not use data collected through this Site to make decisions about you by automated means, and we do not use it to train machine-learning models.',
        'A few trusted service providers help us host the Site and run member sign-in. They are listed below.',
        `You can ask us at any time to see, correct, delete or move your data: ${EMAIL}.`,
      ],
      after: ['The sections below give the full detail. If anything is unclear, ask us and we will explain.'],
    },
    {
      heading: 'Who we are and what this policy covers',
      body: [
        'Odylytics is a team of student founders in Ho Chi Minh City, Vietnam, that builds and ships digital solutions and works with universities, public bodies and companies. For the personal data described in this policy we act as the “controller” (the party that decides why and how the data is used).',
        'This policy covers the public website, the contact form and the member dashboard. It does not cover our solutions (for example AquaGuard, EnableCode, AirGuard, Includio, RooMie and HearWork) or any pilot, demo or partner project. Each of those has, or will have, its own privacy notice that explains how it handles data, and that notice applies to the solution in addition to this one.',
        `You can reach us about anything in this policy at ${EMAIL}.`,
      ],
    },
    {
      heading: 'Key terms',
      items: [
        '“Personal data” means any information that identifies you or can reasonably be used to identify you, alone or combined with other information.',
        '“Processing” means anything we do with personal data: collecting, storing, using, sharing, deleting and so on.',
        '“Service provider” means a company that processes personal data on our behalf and under our instructions to help us run the Site.',
        '“Member” means a person who has been invited to hold an account on the member dashboard.',
      ],
    },
    {
      heading: 'The data we collect',
      body: ['We collect data in the following ways.'],
      items: [
        'Data you send us. The contact form does not send anything to a server. When you press send, your own email app opens with a message addressed to us, and we receive only what you decide to send: usually your name, email address, organisation and message, plus anything you add or attach. If you email us directly, the same applies.',
        'Member account data. If you are an invited member, we process your email address, a securely hashed password (we cannot read your password), your sign-in sessions and the content you create or edit in the dashboard, such as news posts, testimonials, photos, links and the names or quotes they contain.',
        'Technical data collected automatically. Our hosting provider records standard request information such as IP address, browser and device type, operating system, language, the pages requested, the referring page and timestamps. We use it to deliver the Site, keep it secure and diagnose faults.',
        'Anonymous usage data. We use Vercel Web Analytics to understand which pages are visited and from which countries, browsers and devices. It records the page address, the referring page, the approximate country or region, the browser, operating system and device type, and counts unique visitors with a short-lived value derived from technical data that cannot be turned back into your identity. It does not use cookies and we do not use it to follow you across other websites.',
        'Preferences stored on your device. We save your chosen theme (light or dark) and language in your browser. They stay on your device and are not sent to us.',
        'Information from you at events or through partners. If we meet you at an event, competition or through a partner organisation and you give us your contact details, we use them only to follow up on that conversation.',
      ],
      after: [
        'We do not ask for payment details, government identification numbers, health data, biometric data, precise location or other sensitive categories of data through this Site, and we ask that you do not send them to us. If you send sensitive data by mistake, tell us and we will delete it.',
        'Providing data is voluntary. If you do not want to provide it, you can still read the whole public Site; we simply will not be able to reply to you or open a member account.',
      ],
    },
    {
      heading: 'Why we use your data and our legal bases',
      body: ['We use personal data only for specific purposes and only where we have a legal basis for doing so.'],
      items: [
        'To read and reply to partnership, pilot, press, recruitment and general enquiries. Basis: your consent when you contact us, and our legitimate interest in running and growing the organisation.',
        'To create and run member accounts, authenticate members and let them manage Site content. Basis: performance of our arrangement with the member and our legitimate interest in keeping the Site accurate and secure.',
        'To host and deliver the Site, keep it secure, detect and prevent abuse, and find and fix errors. Basis: our legitimate interest in a safe, working website.',
        'To measure how the Site is used in aggregate and improve its content and speed. Basis: our legitimate interest in understanding and improving the Site, balanced against your interests; the analytics we use is designed to be privacy-preserving.',
        'To remember your theme and language. Basis: it is a setting you choose and is stored only on your device.',
        'To keep records, enforce our terms, establish or defend legal claims and meet legal obligations that apply to us. Basis: legal obligation and our legitimate interest in protecting our rights.',
      ],
      after: [
        'We do not use personal data collected through the Site for advertising, we do not build advertising profiles, and we do not sell, rent or trade personal data.',
        'If we want to use your data for a new purpose that is not compatible with the ones above, we will tell you first and, where the law requires, ask for your consent.',
      ],
    },
    {
      heading: 'Automated decisions and artificial intelligence',
      body: [
        'We build AI-based solutions, but this Site does not make decisions about you through automated processing that has legal or similarly significant effects. We do not use enquiry emails, member data or analytics collected through this Site to train, fine-tune or evaluate machine-learning models.',
        'If we ever introduce an AI-assisted feature on the Site that processes personal data, we will describe it here before it goes live and give you the choices the law requires.',
      ],
    },
    {
      heading: 'Cookies, local storage and analytics',
      body: [
        'The Site does not use advertising or tracking cookies. It stores a small number of settings in your browser’s local storage and, for members, a sign-in session. Our analytics tool is designed not to use cookies.',
        'Exactly what is stored, why, for how long and how to control it is set out in our Cookie Policy, which forms part of this policy.',
      ],
    },
    {
      heading: 'Who we share data with',
      body: ['We share personal data only where needed and only with the following categories of recipients:'],
      items: [
        'Vercel Inc., which hosts and delivers the Site, keeps request logs and provides Vercel Web Analytics.',
        'Supabase, which provides member sign-in and stores member-managed content in a database.',
        'Your own email provider and ours, which carry the messages you send us.',
        'Professional advisers such as lawyers, accountants and insurers, under duties of confidentiality.',
        'Public authorities, courts and law-enforcement bodies where we are legally required to disclose data or need to do so to protect our rights, our members, our users or the public.',
        'A successor organisation, if Odylytics or the project is reorganised, merged, transferred or wound up, in which case the same protections in this policy will continue to apply to your data or you will be told of any change.',
        'Anyone else you ask us to share your data with, or where you have given your consent.',
      ],
      after: [
        'Service providers act on our instructions or under their own privacy terms, and we do not allow them to use your data for their own marketing through us. We do not share personal data with data brokers.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'Our providers operate data centres and support teams in several countries, so your data may be processed outside Vietnam and outside your own country, including in the United States and the European Union.',
        'Where we transfer personal data internationally we rely on the safeguards the law requires, such as contractual protections between us and the provider, the provider’s own transfer mechanisms, and, where Vietnamese law requires, the assessments and filings needed for transfers of personal data outside Vietnam. You can ask us for details of the safeguards we use.',
      ],
    },
    {
      heading: 'How long we keep data',
      items: [
        'Enquiry emails: kept for as long as needed to answer you and keep a record of the conversation, normally up to 24 months after the last message, unless a longer period is needed for a continuing partnership, a contract or a legal reason.',
        'Member accounts and member-created content: kept while the account is active. When an account is closed we delete or anonymise its personal data within 90 days, except content already published as part of the public Site, which we may keep with your name removed on request, and records we must keep by law.',
        'Hosting request logs: kept by our hosting provider for a short period, typically no more than 30 days, unless needed to investigate abuse or a security incident.',
        'Analytics data: kept in aggregate form for as long as it remains useful for understanding trends, and contains no information that identifies you directly.',
        'Browser preferences: remain on your device until you clear them.',
        'Backups: deleted data may remain in encrypted backups for a limited time until they are overwritten in the normal cycle.',
      ],
      after: ['When we no longer need personal data we delete it or irreversibly anonymise it.'],
    },
    {
      heading: 'How we protect data',
      body: [
        'We take reasonable technical and organisational steps to protect personal data against loss, misuse and unauthorised access, alteration or disclosure.',
      ],
      items: [
        'Encrypted connections (HTTPS) on the whole Site.',
        'Passwords stored only in hashed form by our sign-in provider.',
        'Database access rules that allow only authenticated members to change content.',
        'Limiting which team members can read enquiry emails and member data, on a need-to-know basis.',
        'Keeping software dependencies up to date and reviewing access when team members change.',
      ],
      after: [
        'No system is completely secure and we cannot guarantee absolute security. If a personal data breach occurs that is likely to harm you, we will investigate promptly, take steps to contain it and notify you and the competent authorities as the law requires. You help protect your data by using a strong, unique password and keeping it confidential.',
      ],
    },
    {
      heading: 'Your rights',
      body: ['Depending on where you live and the law that applies, you can ask us to:'],
      items: [
        'confirm whether we hold personal data about you and give you a copy, with information about how we use it;',
        'correct data that is inaccurate or incomplete;',
        'delete your data, or restrict or object to how we use it;',
        'stop using your data where we rely on legitimate interest, and withdraw consent you gave us at any time, without affecting what we did before you withdrew it;',
        'provide the data you gave us in a structured, commonly used format and, where possible, send it to another organisation;',
        'not be subject to a decision based solely on automated processing that significantly affects you;',
        'lodge a complaint with the data protection authority in your country.',
      ],
      after: [
        `To use any of these rights email ${EMAIL} and tell us what you want. We may need to confirm your identity first, and we aim to reply within 30 days (or sooner where the law sets a shorter time). We do not charge a fee unless a request is clearly unfounded or excessive, in which case the law may allow us to charge a reasonable fee or refuse.`,
        'Where Vietnamese law applies, including the Law on Personal Data Protection and Decree 13/2023/ND-CP on personal data protection (as amended, replaced or supplemented), you also have the rights those laws give data subjects, including the right to be informed, to consent or refuse, to access, to withdraw consent, to delete, to restrict processing, to object, to request data and to complain, and we will respond within the time those laws set.',
        'If you are in the European Economic Area or the United Kingdom, you can complain to your local supervisory authority. We would appreciate the chance to resolve your concern first.',
        'We may refuse or limit a request where the law allows, for example where it would reveal another person’s data, where we must keep the data by law, or where we need it to establish or defend legal claims. We will explain our reasons.',
      ],
    },
    {
      heading: 'Consent and withdrawing it',
      body: [
        'Where we rely on your consent, you give it by a clear action, such as sending us an email or accepting a prompt. You can withdraw consent at any time by emailing us or, for browser settings, by clearing them. Withdrawing consent does not make earlier processing unlawful.',
      ],
    },
    {
      heading: 'Member content, testimonials and public information',
      body: [
        'Content that members publish on the Site, such as news posts, testimonials, photos and team information, is public. Anything you publish or allow us to publish there can be seen, copied and shared by anyone, and search engines may index it.',
        'We publish a person’s name, photograph or quotation only with their permission. If you appear on the Site and want your information corrected or removed, email us and we will act on it promptly.',
      ],
    },
    {
      heading: 'Children',
      body: [
        'This Site is aimed at partners, institutions, students and the general public. It is not directed at children under 16, and we do not knowingly collect their personal data. If you believe a child has sent us personal data, contact us and we will delete it. Where a parent or guardian’s consent is required by law, we will not process the data without it.',
      ],
    },
    {
      heading: 'Links to other sites',
      body: [
        'The Site links to news articles, partner websites, competition organisers and social profiles such as LinkedIn. Those sites are run by other organisations with their own privacy practices. This policy does not cover them, and we are not responsible for how they handle your data. Please read their policies before you share information with them.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy when our practices, our providers or the law change. The date at the top shows when it was last revised. If a change is significant we will highlight it on the Site before it takes effect, and where the law requires your consent to a change we will ask for it.',
      ],
    },
    {
      heading: 'Contact and complaints',
      body: [
        `Questions, requests or complaints about privacy: ${EMAIL}. Please put “Privacy” in the subject line and tell us which country you are in so we can apply the right rules.`,
        'We will acknowledge your message, look into it and tell you what we found and what we will do. If you are not satisfied, you can contact the data protection authority that applies to you.',
      ],
    },
  ],
}

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  updated: UPDATED,
  intro: `These terms govern your access to and use of the Odylytics website and member dashboard (together, “the Site”). They are a legal agreement between you and Odylytics (“Odylytics”, “we”, “us”, “our”). By using the Site you confirm that you have read, understood and agree to them, together with our Privacy Policy and Cookie Policy. If you do not agree, please do not use the Site.`,
  sections: [
    {
      heading: 'Agreement and acceptance',
      body: [
        'You accept these terms by browsing the Site, by sending us a message through it, by creating or using a member account, or by using any part of it in any other way. If you use the Site on behalf of an organisation, you confirm that you are authorised to bind that organisation, and “you” then includes the organisation.',
        'These terms apply to the Site only. Our solutions, pilots, demos and partner projects may be offered under separate agreements, which apply to those offerings in addition to these terms.',
      ],
    },
    {
      heading: 'About the Site and who we are',
      body: [
        'Odylytics is a team of student founders in Ho Chi Minh City, Vietnam. The Site presents Odylytics, our digital solutions, our team, our partners, our prizes, our impact figures and our news.',
        `Contact: ${EMAIL}.`,
      ],
    },
    {
      heading: 'Information only; no offer or advice',
      body: [
        'The Site is provided for general information. Nothing on it is a binding offer, a contract, a guarantee that a product or service is available in your location, or legal, financial, medical, safety, engineering or other professional advice. You should not rely on it as a substitute for advice from a qualified professional.',
        'A partnership, pilot, purchase or any other relationship with Odylytics exists only when both sides have agreed it in a signed written agreement.',
      ],
    },
    {
      heading: 'Eligibility',
      items: [
        'You must be able to form a binding agreement under the law that applies to you to use any part of the Site that involves an account or a commitment.',
        'If you are under 18 or the age of majority where you live, you may browse the Site, but you may not hold a member account or send us legally significant communications without the consent of a parent or guardian.',
        'You may not use the Site if you have been barred from doing so by law or by us.',
      ],
    },
    {
      heading: 'Your responsibilities',
      items: [
        'Provide accurate, current and complete information when you contact us.',
        'Use the Site only in line with these terms and with the law that applies to you.',
        'Keep your own device, software and connection secure. You are responsible for your internet costs and for any harm caused by your own equipment.',
        'Tell us promptly if you notice a security problem, inaccurate content or any misuse of the Site.',
      ],
    },
    {
      heading: 'Acceptable use',
      body: ['You agree not to:'],
      items: [
        'break the law or infringe anyone’s rights, including intellectual property, privacy and publicity rights, while using the Site;',
        'attempt to gain unauthorised access to the Site, its servers, member accounts, databases or data, or probe, scan or test their vulnerability except as allowed in the next section;',
        'introduce malware or anything harmful, or overload, disrupt or interfere with how the Site works;',
        'use bots, scrapers, crawlers or other automated means to copy the Site, collect data from it or send requests at a rate that harms its performance, except for ordinary search-engine indexing that respects our instructions;',
        'send spam, unsolicited commercial messages, phishing or misleading messages through or about the Site;',
        'harass, threaten, defame or discriminate against others, or post unlawful, hateful, obscene or deceptive content;',
        'impersonate any person or organisation or misrepresent your affiliation with Odylytics, our team, our partners or our prize organisers;',
        'use the Site or its content to build or train a competing product or any machine-learning model without our written permission;',
        'copy, modify, distribute, frame, mirror, sell, sublicense, decompile or reverse engineer any part of the Site, except where the law gives you that right despite this restriction;',
        'remove or alter any copyright, trademark or attribution notice;',
        'help or encourage anyone else to do any of these things.',
      ],
    },
    {
      heading: 'Responsible security reporting',
      body: [
        `If you find a security vulnerability, please report it privately to ${EMAIL} before telling anyone else, and give us a reasonable time to fix it. If you act in good faith, avoid accessing or changing other people’s data, avoid disrupting the Site and stop once you have shown the problem exists, we will not take legal action against you for that research. This section does not permit any activity that is unlawful or that breaches the acceptable-use rules in other ways.`,
      ],
    },
    {
      heading: 'Member accounts',
      body: ['Accounts are issued by invitation to members of the Odylytics team and approved collaborators.'],
      items: [
        'Keep your password confidential, use a strong and unique one, and tell us immediately if you suspect it has been compromised. You are responsible for all activity under your account.',
        'Do not share your account or let anyone else use it.',
        'We may refuse, suspend or close an account at any time, including if we believe these terms or the law have been breached, if the account is inactive, or to protect the Site, our team or others.',
        'When a person leaves the team or stops collaborating with us, their account will be closed.',
      ],
    },
    {
      heading: 'Content that members publish',
      items: [
        'Members may create and edit content such as news posts, testimonials, photos and links. You must have the right to publish everything you add, and you must have obtained the consent of anyone you quote or show, including consent to publish their name and image.',
        'Content must be accurate, lawful and not misleading. Testimonials must be real, attributed with permission and must not be altered in a way that changes their meaning. Press and prize claims must be true and credited to the right organisation.',
        'You keep whatever rights you already have in your content. By publishing it on the Site you grant Odylytics a non-exclusive, worldwide, royalty-free, sublicensable licence to host, store, display, reproduce, adapt for formatting and promote it as part of the Site, our social channels and our materials, for as long as it remains on the Site and for a reasonable period afterwards to complete removal from backups and caches.',
        'We may review, edit, unpublish or delete any content at any time, without notice, and we are not obliged to monitor content.',
        'You are responsible for the content you publish and for any claim made about it.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The Site’s design, text, graphics, photographs we took or commissioned, software, layout, the Odylytics name and logo, and the names and logos of our solutions (AquaGuard, EnableCode, AirGuard, Includio, RooMie and HearWork) belong to Odylytics, its team or its licensors and are protected by intellectual property laws in Vietnam and around the world. All rights not expressly granted are reserved.',
        'Names, logos and marks of partners, universities, competition organisers and news publishers belong to their respective owners. They appear on the Site only to identify those organisations and the facts stated, and do not imply any endorsement, sponsorship or partnership beyond what is expressly said.',
        'Open-source software used to build the Site remains under its own licences.',
        'You may view the Site, and share links to it. You may quote short extracts with clear attribution and a link back. Any other use of our materials, including any commercial use of our names, logos, branding or photographs, needs our prior written permission.',
        'Nothing in these terms transfers any ownership of our intellectual property to you.',
      ],
    },
    {
      heading: 'Using our name and brand',
      body: [
        `You may not use the Odylytics name, our logos or the names and logos of our solutions in a way that suggests that we sponsor, endorse or are affiliated with you or your products, or in a domain name, company name, app name or social handle, without our written permission. If you would like to feature us, contact ${EMAIL}.`,
      ],
    },
    {
      heading: 'Feedback and ideas you send us',
      body: [
        'We welcome feedback. If you send us suggestions, ideas, comments or materials (“Feedback”), you agree that we may use them freely, for any purpose, without payment or credit, and that you grant us a perpetual, irrevocable, worldwide, royalty-free licence to do so.',
        'Please do not send us confidential, trade-secret or sensitive information through the Site or by email unless we have first signed a written confidentiality agreement with you. Without one, we treat what you send as non-confidential, although we will handle personal data as set out in the Privacy Policy.',
        'You confirm that your Feedback does not infringe anyone’s rights and that you have the right to send it.',
      ],
    },
    {
      heading: 'Solutions, pilots and prototypes',
      body: [
        'Some of our solutions are prototypes, student projects or in pilot stage. Descriptions, features, metrics, screenshots, photographs and availability on the Site may change or be withdrawn at any time, and statements about what a product does reflect its intended behaviour, not a guarantee of how it performs in every situation, location or condition.',
        'Mention of a solution on the Site does not mean it is available for purchase or use. Access to a pilot or a product is governed by a separate written agreement and, where applicable, the solution’s own terms and privacy notice.',
      ],
    },
    {
      heading: 'Safety-related solutions',
      body: [
        'Some of our solutions, such as flood rescue coordination tools and environmental monitoring tools, are designed to support human decision-making. They do not replace official warnings, emergency services, public-authority instructions or professional judgement, and they may be incomplete, delayed or unavailable.',
        'Never rely on anything on the Site, or on a prototype or pilot, as your only source of information in an emergency. In an emergency, contact your local emergency services immediately.',
      ],
    },
    {
      heading: 'AI-related content and accessibility solutions',
      body: [
        'Some of our solutions use artificial intelligence, for example to generate questions, simulate conversations or follow head movement. AI outputs can be wrong, incomplete or biased. They are practice and support tools, not guarantees of any result such as a job offer, an exam result or a safety outcome, and they are not a substitute for qualified human advice.',
        'Descriptions of how our solutions help particular groups of people, including people with disabilities or autistic candidates, describe our intent and design goals. They are not medical, therapeutic or clinical claims.',
      ],
    },
    {
      heading: 'Prizes, press, partners and impact figures',
      body: [
        'Prizes, rankings, certificates, endorsements and press coverage are reported in good faith and credited to the organisers and publishers. Their descriptions, dates and results are given as we understand them. If you believe something is inaccurate, tell us and we will review it promptly and correct it where needed.',
        'Figures such as people reached, users, organisations endorsing us and similar numbers are internal figures reported by the team, rounded for readability, measured in the way we describe at the time and not independently audited. They relate to the specific project named and may change, be restated or be retired. They are not a promise, forecast or guarantee of future results.',
        'References to universities, competitions, accelerators and companies show that we have worked with, attended or been recognised by them. They do not mean that those organisations approve, guarantee or are responsible for our solutions or this Site.',
      ],
    },
    {
      heading: 'Third-party links, content and services',
      body: [
        'The Site links to third-party websites and relies on third-party services for hosting, analytics and sign-in. We do not control them and are not responsible for their content, accuracy, availability, security or privacy practices. A link is not an endorsement. You use third-party sites and services at your own risk and under their own terms.',
      ],
    },
    {
      heading: 'Privacy and cookies',
      body: ['Our Privacy Policy and Cookie Policy explain how we handle personal data and browser storage. They form part of these terms.'],
    },
    {
      heading: 'Reporting content and takedown requests',
      body: [
        `If you believe content on the Site infringes your rights, is inaccurate or should not be published, email ${EMAIL} with the subject “Content notice” and include: your name and contact details; the exact page and the content concerned; why you believe it should be changed or removed (and, for an intellectual-property claim, proof that you own or are authorised to act for the owner of the right); and a statement that the information you give is accurate.`,
        'We will review the notice promptly, normally within 14 days, and may remove or change the content, ask for more information or tell you why we are not acting. We may keep a record of notices and our responses.',
      ],
    },
    {
      heading: 'Disclaimer of warranties',
      body: [
        'To the fullest extent the law allows, the Site and everything on it is provided “as is” and “as available”, without warranties of any kind, whether express, implied or statutory, including any warranty of accuracy, completeness, reliability, availability, merchantability, fitness for a particular purpose, non-infringement or quiet enjoyment.',
        'We do not warrant that the Site will be uninterrupted, timely, secure or error-free, that defects will be corrected, that it is free of viruses or other harmful components, or that your use of it will meet your needs. Any content you rely on is at your own risk.',
        'Some places do not allow certain disclaimers. In those places these disclaimers apply only as far as the law permits.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the fullest extent the law allows, Odylytics, its founders, team members, advisers, volunteers and licensors are not liable to you for any indirect, incidental, special, consequential, exemplary or punitive loss, or for any loss of profit, revenue, business, opportunity, data or goodwill, arising out of or in connection with the Site or these terms, however caused and on any legal theory, even if we were told it might happen.',
        'To the fullest extent the law allows, our total liability to you for all claims arising out of or relating to the Site or these terms will not exceed the greater of the amount you paid us to use the Site in the 12 months before the claim (which for most visitors is nothing) and one million Vietnamese dong (VND 1,000,000).',
        'Nothing in these terms limits or excludes liability that cannot be limited or excluded by law, including liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any right you have as a consumer under mandatory law.',
      ],
    },
    {
      heading: 'Indemnity',
      body: [
        'To the extent the law allows, you agree to defend, compensate and hold harmless Odylytics, its founders, team members and licensors from any claim, loss, liability, damage and reasonable cost (including reasonable legal fees) arising out of your breach of these terms, your misuse of the Site or your account, or content you publish or send in breach of these terms or someone else’s rights.',
      ],
    },
    {
      heading: 'Suspension and termination',
      body: [
        'We may change, suspend, restrict or discontinue all or part of the Site, or your access to it, at any time and without liability, including if we believe you have breached these terms. You may stop using the Site at any time.',
        'Sections that by their nature should continue after termination will continue, including those on intellectual property, feedback, disclaimers, limitation of liability, indemnity, governing law and disputes.',
      ],
    },
    {
      heading: 'Notices and electronic communications',
      body: [
        `You agree that we may give you notices by posting them on the Site or by email to an address you gave us, and that these count as written notice. You can give us notice by email to ${EMAIL}. A notice by email is treated as received on the next business day in Ho Chi Minh City.`,
      ],
    },
    {
      heading: 'Events beyond our control',
      body: [
        'We are not responsible for any failure or delay caused by something outside our reasonable control, including natural disasters, floods, power or internet failures, failures of hosting or other providers, cyber-attacks, changes in law, government action, epidemics or war.',
      ],
    },
    {
      heading: 'Governing law and disputes',
      body: [
        'These terms, and any dispute or claim connected with them or the Site (including non-contractual disputes), are governed by the laws of the Socialist Republic of Vietnam, without regard to conflict-of-law rules.',
        `If a dispute arises, please first email us at ${EMAIL} with the details. We will try in good faith to resolve it by discussion within 30 days of your notice. If that fails, either side may bring the dispute to the competent courts of Ho Chi Minh City, Vietnam, which will have jurisdiction, without affecting any mandatory consumer rights you have in the place where you live.`,
        'To the extent the law allows, any claim you bring must be brought within one year after the cause of action arose, otherwise it is permanently barred.',
      ],
    },
    {
      heading: 'General',
      items: [
        'Entire agreement. These terms, with the Privacy Policy and the Cookie Policy, are the whole agreement between you and Odylytics about the Site and replace any earlier understanding about it.',
        'Severability. If any part of these terms is found unenforceable, the rest stays in effect and the unenforceable part will be replaced by an enforceable one that comes closest to its intent.',
        'No waiver. Our failure or delay to enforce a term is not a waiver of it or of any other term.',
        'Assignment. You may not transfer your rights or obligations under these terms without our written consent. We may transfer ours to a successor of the project or to any person who takes over our business or assets.',
        'No third-party rights. Only you and Odylytics (and the persons we expressly protect in the limitation of liability and indemnity sections) can enforce these terms.',
        'Relationship. Nothing in these terms makes you our partner, agent, employee or representative.',
        'Language. We may provide a Vietnamese translation of parts of the Site for convenience. If the translation and the English text differ, the English text prevails, except where the law requires otherwise.',
        'Headings. Headings are for convenience only and do not affect interpretation.',
      ],
    },
    {
      heading: 'Changes to these terms',
      body: [
        'We may update these terms from time to time, for example when the Site, our practices or the law change. The date at the top shows the latest revision. If a change is significant we will highlight it on the Site before it takes effect. Using the Site after a change means you accept the updated terms; if you do not accept them, you must stop using the Site.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about these terms: ${EMAIL}.`],
    },
  ],
}

export const COOKIES: LegalDoc = {
  title: 'Cookie Policy',
  updated: UPDATED,
  intro: 'This policy explains what information the Odylytics website stores in your browser, what we measure about visits, what third-party requests the Site makes, why, and how you can control them. It forms part of our Privacy Policy.',
  sections: [
    {
      heading: 'What are cookies and local storage',
      body: [
        'Cookies are small text files that a website places on your device. Local storage and similar technologies are browser features that let a site save information on your device without sending it with every request. Both can make a site remember your choices or keep you signed in.',
        'In this policy “cookies” includes cookies, local storage, session storage and similar technologies.',
      ],
    },
    {
      heading: 'The short version',
      items: [
        'We do not use advertising, marketing or cross-site tracking cookies.',
        'We store your theme and language on your device, and a sign-in session if you are a member.',
        'We measure visits with Vercel Web Analytics, which is designed to work without cookies and without following you across websites.',
      ],
    },
    {
      heading: 'What this Site stores on your device',
      body: ['The Site stores the following items in your browser:'],
      items: [
        'odylytics-theme (local storage): your chosen light or dark theme. Kept until you clear it. A preference only; it is never sent to us.',
        'odylytics-lang (local storage): your chosen language. Kept until you clear it. A preference only; it is never sent to us.',
        'Member session (local storage): only if you sign in as a member. Our sign-in provider, Supabase, stores a session token so you stay signed in, and it is removed when you sign out or the session expires.',
      ],
      after: [
        'These items only remember choices you make or keep you signed in. They are strictly necessary for features you ask for, so they do not need a consent banner under most laws. You can remove them at any time (see below).',
      ],
    },
    {
      heading: 'How we measure visits',
      body: [
        'We use Vercel Web Analytics to understand, in aggregate, which pages are visited, where visitors come from and which browsers and devices are used, so we can improve the Site. It records the page address, the referring page, the approximate country or region, the browser, the operating system and the device type.',
        'It is designed to count unique visitors without cookies and without storing a persistent identifier on your device or building a profile of you across other websites. We do not use it for advertising and we do not combine it with data that identifies you.',
        'Because it works without cookies or any identifier stored on your device, it does not need a cookie banner under most laws. The legal basis and your rights are explained in the Privacy Policy, including your right to object.',
      ],
    },
    {
      heading: 'Third-party requests the Site makes',
      items: [
        'Fonts: the typefaces (Geist and Geist Mono) are hosted on our own servers, so your browser does not contact a font provider.',
        'Vercel: our hosting provider serves the pages, records standard request logs and provides Web Analytics.',
        'Supabase: contacted only when a member signs in or when the Site loads member-managed content such as news posts and testimonials.',
        'LinkedIn, news websites and partner sites: opened only when you click a link. They are governed by their own cookie and privacy policies, and may set their own cookies once you visit them.',
      ],
      after: ['We do not embed social-media widgets, advertising networks, tag managers or video players that would set tracking cookies from this Site.'],
    },
    {
      heading: 'Our approach to consent',
      body: [
        'Because the Site uses only strictly necessary storage and cookie-free analytics, it does not show a cookie banner. If we ever add any non-essential cookie or tracking technology, we will update this policy first and, where the law requires, ask for your consent before it is used, and make it as easy to refuse as to accept.',
      ],
    },
    {
      heading: 'How to control or remove stored data',
      items: [
        'Clear the Site’s stored data in your browser settings, under site data or cookies and site data. This resets your theme and language and signs you out.',
        'Block or restrict third-party requests and trackers with your browser’s privacy settings or an extension. The Site continues to work.',
        'Use a private or incognito window; most browsers delete stored data when it is closed.',
        'If you are a member, sign out when you use a shared device.',
      ],
      after: ['Controls differ between browsers. Your browser’s help pages explain how to manage storage on your device.'],
    },
    {
      heading: 'Changes to this policy',
      body: ['We may update this policy when the Site, our providers or the law change. The date at the top shows when it was last revised. We will highlight significant changes on the Site.'],
    },
    {
      heading: 'Contact',
      body: [`Questions about this policy: ${EMAIL}. See also our Privacy Policy and Terms of Use.`],
    },
  ],
}
