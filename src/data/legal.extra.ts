// Working drafts: have counsel review before publishing.
import type { LegalDoc } from './legal'

const UPDATED = '15 October 2026'
const EMAIL = 'odylytics@gmail.com'

export const ACCEPTABLE_USE: LegalDoc = {
  title: 'Acceptable Use Policy',
  updated: UPDATED,
  intro: `This policy sets out what you may and may not do when you use the Odylytics website, the member dashboard and any demo, prototype or pilot we give you access to (together, “our Services”). It applies to everyone who uses our Services, including visitors, members, partners and pilot participants. It sits alongside our Terms of Use and, for pilots, any written agreement we have signed with you.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'Use our Services lawfully, honestly and with respect for other people.',
        'Do not try to break, overload or get around the security of our Services, and do not access data that is not yours.',
        'Do not use our Services, or anything they produce, to harm, deceive, harass or discriminate against people.',
        'Our safety-related and AI tools support human decisions. Do not use them as your only source of information in an emergency, or for decisions about people that the law reserves for humans.',
        `If you see misuse or a security problem, tell us at ${EMAIL}.`,
      ],
      after: ['The sections below give the detail.'],
    },
    {
      heading: 'Who this policy applies to',
      body: [
        'This policy applies to anyone who accesses our Services, whether on their own behalf or for an organisation. If you use our Services for an organisation, you are responsible for making sure the people you give access to follow this policy.',
        'Pilots, demos and partner projects may have extra rules in a written agreement. Where the two differ, the written agreement applies to that pilot or project.',
      ],
    },
    {
      heading: 'Lawful and honest use',
      items: [
        'Follow the laws that apply to you and to us, including laws on privacy, intellectual property, consumer protection, export controls and online content.',
        'Do not use our Services to commit or help commit fraud, theft, extortion, stalking or any other offence.',
        'Do not impersonate any person or organisation, and do not misrepresent your link to Odylytics, our team, our partners or our prize organisers.',
        'Provide accurate information when you contact us or ask for access.',
      ],
    },
    {
      heading: 'Security and system integrity',
      body: ['You must not:'],
      items: [
        'attempt to gain unauthorised access to our Services, servers, member accounts, databases or data;',
        'probe, scan or test the vulnerability of our Services except as allowed by our Responsible Disclosure Policy;',
        'introduce malware or anything else intended to damage, disable or interfere with our Services;',
        'overload our Services, or send requests at a rate or in a pattern that harms their availability;',
        'bypass or disable access controls, rate limits or any other protective measure;',
        'share your member credentials, or use credentials that belong to someone else.',
      ],
    },
    {
      heading: 'Automated access and scraping',
      body: [
        'Ordinary search-engine indexing that respects our instructions is welcome. Other bots, scrapers and crawlers may not copy the Services or collect data from them at a volume that affects performance. If you need structured access to public information on the Site, ask us first.',
        'You may not use our Services, their content or their outputs to build or train a competing product or any machine-learning model without our written permission.',
      ],
    },
    {
      heading: 'Content you send or publish',
      body: ['This applies to anything you send us or, as a member, publish through the dashboard. You must not submit content that:'],
      items: [
        'infringes someone’s copyright, trademark, privacy or other rights;',
        'is unlawful, defamatory, threatening, hateful, obscene or deliberately deceptive;',
        'names, shows or quotes a person without their permission;',
        'contains personal data that you have no right to share, or sensitive data such as health, biometric or identity-document data that we have not asked for;',
        'is spam, a phishing attempt, or an unsolicited commercial message.',
      ],
      after: ['We may remove or unpublish content and close accounts that break these rules, without notice.'],
    },
    {
      heading: 'Harassment, discrimination and harm',
      body: [
        'Do not use our Services to harass, threaten, demean or discriminate against any person or group, including because of disability, neurodivergence, age, gender, ethnicity, nationality, religion or sexual orientation.',
        'Do not use outputs from our tools to target, profile, surveil or exclude people. For example, outputs from an interview practice tool must not be used to screen, rank or reject real candidates, and outputs from a head-tracking tool must not be used to monitor people without their knowledge.',
      ],
    },
    {
      heading: 'Safety-related and AI tools',
      items: [
        'Do not rely on any of our tools, prototypes or pilots as your only source of information in an emergency. Contact local emergency services and follow instructions from public authorities.',
        'Do not present AI outputs as human work, official warnings, professional advice or guarantees of a result when they are not.',
        'Do not use our tools for decisions that have legal or similarly significant effects on a person, such as hiring, firing, medical treatment, benefits, credit or law enforcement, without meaningful review by a qualified person.',
        'Do not deliberately feed our tools misleading inputs in order to cause unsafe outputs or to test them outside an agreed pilot.',
      ],
    },
    {
      heading: 'Pilots and prototypes',
      body: [
        'Pilots and prototypes are early-stage. Use them only for the purpose, in the place and with the people covered by the pilot agreement. Do not share access with anyone outside that agreement, and do not use real personal data of third parties in a pilot unless the agreement allows it and you have the right to do so.',
      ],
    },
    {
      heading: 'Reporting misuse',
      body: [
        `If you see content or behaviour that breaks this policy, email ${EMAIL} with the subject “Misuse report”. Tell us what you saw, where and when, and include a link or screenshot if you can. For security vulnerabilities, follow the Responsible Disclosure Policy instead.`,
        'We review reports as quickly as a small student team can. We do not promise a fixed response time for misuse reports, but we aim to reply within 14 days.',
      ],
    },
    {
      heading: 'What we may do if the policy is broken',
      items: [
        'Ask you to stop or to correct the problem.',
        'Remove or unpublish content.',
        'Suspend or close a member account, or end access to a demo or pilot.',
        'Report the matter to the relevant authorities where the law requires or where someone may be at risk.',
        'Take other steps the Terms of Use or a signed agreement allow.',
      ],
      after: ['We try to act in proportion to the problem, but we may act immediately where there is a risk to people or to the Services.'],
    },
    {
      heading: 'Changes to this policy',
      body: ['We may update this policy when our Services or the law change. The date at the top shows the latest revision.'],
    },
    {
      heading: 'Contact',
      body: [`Questions about this policy: ${EMAIL}. See also our Terms of Use and Responsible Disclosure Policy.`],
    },
  ],
}

export const RESPONSIBLE_AI: LegalDoc = {
  title: 'Responsible AI Principles',
  updated: UPDATED,
  intro: `These principles describe how Odylytics approaches artificial intelligence in its solutions. We are a team of student founders, not a large laboratory, and we write them as commitments we intend to keep and as honest statements of what is not yet in place. They are not a certification, and they do not replace the laws that apply to us or the terms of any agreement we sign.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'Our AI tools support people. They do not replace emergency services, public authorities, clinicians, employers or the people who use them.',
        'We collect as little data as a product needs, and we say what it does with it.',
        'We design for accessibility and fairness from the start, and we involve the people a product is meant to serve.',
        'We test our tools, we know they make mistakes, and we state their limits openly.',
        `If something goes wrong, tell us at ${EMAIL}. We investigate, fix what we can and say what happened.`,
      ],
      after: ['We do not currently hold any external AI certification or have an independent AI audit. We say so here so that nobody assumes otherwise.'],
    },
    {
      heading: 'Scope',
      body: [
        'These principles apply to the solutions we build and pilot, in particular AquaGuard, EnableCode and Includio, and to any AI feature we add to our website. Our upcoming solutions (AirGuard, RooMie and HearWork) will be held to the same principles before they are released.',
        'Each product has an AI Transparency page that explains what it does in more detail.',
      ],
    },
    {
      heading: 'Human oversight',
      items: [
        'Every solution is designed so that a person can review, correct or ignore its output.',
        'We do not build tools that take legally or similarly significant decisions about people without a human decision-maker.',
        'Where a tool shows a suggestion or a score, we aim to show it as a suggestion, with enough context for a person to judge it.',
        'Users and pilot partners remain responsible for how they use outputs in their own setting.',
      ],
    },
    {
      heading: 'Safety-critical support, not replacement of authorities',
      body: [
        'AquaGuard supports the coordination of flood rescue. It is not an official warning system and does not replace emergency services, civil-protection bodies or public-authority instructions. Information it shows may be incomplete, late or wrong.',
        'We will not describe any of our tools as a substitute for official warnings or professional judgement. We ask pilot partners to keep their usual procedures in place alongside our tools, and to treat our tools as an additional input only.',
      ],
    },
    {
      heading: 'Fairness and accessibility',
      items: [
        'EnableCode and Includio are built for people who are often underserved by standard tools: people with upper-limb disabilities and autistic candidates. We aim to involve people from those groups in testing and feedback.',
        'We do not use our tools to rank, screen or exclude people. Includio is a practice tool for candidates and is not designed for employers to evaluate applicants.',
        'We know that camera-based and language-based systems can perform unevenly across different faces, lighting, accents, writing styles and communication styles. We aim to test with varied users and to report known gaps.',
        'We aim for our own interfaces to meet WCAG 2.2 AA. See our Accessibility Statement for where we are today.',
      ],
      after: ['We have not yet carried out a formal fairness audit of any product. We do not claim that our tools are free of bias.'],
    },
    {
      heading: 'Data minimisation and privacy',
      items: [
        'We collect only the data a feature needs and we ask for it only when it is needed.',
        'We do not sell personal data, and we do not use data collected through our website to train machine-learning models.',
        'Each pilot has, or will have, its own privacy notice that says what is collected, why, where it is processed and how long it is kept.',
        'We do not ask for sensitive data that a feature does not need.',
      ],
      after: ['See our Privacy Policy, Data Retention Schedule and Subprocessors page for the details that apply to the website.'],
    },
    {
      heading: 'Evaluation and testing',
      body: [
        'We test our tools with team members and, in pilots, with partners before wider use, and we change them in response to what we find. Testing is limited by the size and resources of a student team.',
        'We do not currently publish formal accuracy figures, independent evaluation reports or benchmark results for our products. If we publish a metric in future, we will say how it was measured, on what data and in what conditions.',
      ],
    },
    {
      heading: 'Known limits',
      items: [
        'AI outputs can be wrong, incomplete, out of date or inappropriate, and can sound more confident than they should.',
        'Our products are prototypes or in pilot stage. They may change, break or be withdrawn.',
        'Results depend on conditions such as connectivity, camera quality, lighting, the language used and the quality of input data.',
        'Descriptions of how a product helps a group of people describe our design goals. They are not medical, therapeutic or clinical claims.',
      ],
    },
    {
      heading: 'Transparency',
      body: [
        'We tell people when they are using an AI-based feature, what it is for, what goes in and what comes out. Our AI Transparency page does this for each product.',
        'We try not to overstate our work. Where information is not disclosed or not yet known, we say so rather than fill the gap.',
      ],
    },
    {
      heading: 'Incident handling and reporting problems',
      items: [
        `Anyone can report an AI-related error, unsafe output, bias concern or privacy concern to ${EMAIL} with the subject “AI report”.`,
        'We acknowledge reports within 5 business days where we can and look into them as a priority when there is a risk to safety or to a person’s rights.',
        'Where needed, we pause or limit a feature, fix it, tell affected pilot partners and record what we learned.',
        'If personal data is involved, we follow the steps in our Security Overview and the law.',
      ],
      after: ['We do not currently run a 24-hour incident service. Pilot partners should not depend on us for out-of-hours response unless a written agreement says otherwise.'],
    },
    {
      heading: 'Governance and review',
      body: [
        'Responsibility for these principles sits with the founding team. We review them when we launch a new product, change how an existing one works, or after a significant incident. We do not currently have an independent ethics board.',
        'We welcome feedback from users, partners, researchers and people with lived experience of the groups our products serve.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions or concerns about our use of AI: ${EMAIL}. See also our AI Transparency page, Privacy Policy and Security Overview.`],
    },
  ],
}

export const AI_TRANSPARENCY: LegalDoc = {
  title: 'AI Transparency',
  updated: UPDATED,
  intro: `This page explains which Odylytics products use artificial intelligence, what they use it for, what goes in and comes out, what we know about their limits and how to report an error. It is written for users, pilot partners and anyone who wants to understand our tools. It is deliberately specific about what we do not disclose, because we would rather say so than imply something we cannot support.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'AquaGuard, EnableCode and Includio use AI or machine-learning techniques. This website does not make decisions about you by automated means.',
        'A person is expected to review the output of each product before it is acted on.',
        'AI outputs can be wrong. None of our products is an official warning system, a medical device or a hiring decision tool.',
        'We do not currently publish a list of the models, model providers or training datasets behind each product. The section “What we disclose and what we do not” explains where the line is.',
        `To report an error or concern, email ${EMAIL} with the subject “AI report”.`,
      ],
    },
    {
      heading: 'What this page covers',
      body: [
        'This page covers our current products: AquaGuard, EnableCode and Includio. AirGuard, RooMie and HearWork are upcoming and are not available. We will add them here before release if they use AI.',
        'The products are prototypes or in pilot stage, so details change. The date at the top shows when this page was last revised. A pilot may have its own notice that adds to this one.',
      ],
    },
    {
      heading: 'AquaGuard',
      items: [
        'Purpose. Flood rescue coordination: helping responders and coordinators organise requests for help and resources during floods.',
        'How AI is used. The product is designed to help sort and organise information so that people can decide faster. The specific techniques used may vary by version and are not described in detail here.',
        'Inputs. Information about locations, needs and resources supplied by users, partners or public sources, depending on the pilot. The data actually used in a pilot is set out in that pilot’s privacy notice.',
        'Outputs. Suggestions, groupings or priorities shown to a human coordinator.',
        'Human review. Coordinators decide what to do. The product does not dispatch rescuers or trigger warnings on its own.',
        'Limits. It is not an official warning system. Information may be late, incomplete or wrong, and it depends on the quality and coverage of input data and on connectivity, which may fail in a flood. It does not replace emergency services or public-authority instructions.',
      ],
    },
    {
      heading: 'EnableCode',
      items: [
        'Purpose. Hands-free coding for people with upper-limb disabilities, using webcam head tracking to control the editing environment.',
        'How AI is used. Computer-vision techniques follow head position and movement from the camera image and translate them into input actions.',
        'Inputs. Video frames from the user’s webcam. Where those frames are processed and whether any are stored depends on the version in use, and is stated in the privacy notice for that version. This page does not make a claim about it.',
        'Outputs. Cursor movements, selections and other input actions.',
        'Human review. The user sees and controls the result at all times and can stop or switch to another input method.',
        'Limits. Accuracy depends on camera quality, lighting, posture, background, glasses or head coverings and the user’s range of movement. It may mis-track, lag or need calibration. We have not published formal accuracy figures. It is not a medical device or an assistive-technology certification.',
      ],
    },
    {
      heading: 'Includio',
      items: [
        'Purpose. Interview practice for autistic candidates: letting a person rehearse interview situations and receive feedback in a low-pressure setting.',
        'How AI is used. Language-based AI generates interview questions, simulates parts of a conversation and gives feedback on responses.',
        'Inputs. Text or speech that the candidate provides during practice, and any set-up choices they make. Whether recordings or transcripts are kept is stated in the privacy notice for the version in use.',
        'Outputs. Questions, simulated replies and feedback.',
        'Human review. The candidate decides what to do with the feedback. It is practice material, not an assessment.',
        'Limits. AI feedback can be inaccurate, generic or biased, and it can misread tone, accent, pacing or communication style. It does not predict whether someone will get a job. It is not therapy, diagnosis or clinical advice, and it must not be used by employers to screen or rank real candidates.',
      ],
    },
    {
      heading: 'What we disclose and what we do not',
      body: ['We want to be clear about the limits of what we say here.'],
      items: [
        'We disclose what each product is for, what kind of data goes in, what comes out, and where a human is expected to review it.',
        'We do not currently publish the names of the models or model providers used, the architecture, the training data or the evaluation datasets for each product. Details of any third-party AI service used in a pilot are given in that pilot’s documentation or on request to pilot partners. Updating soon.',
        'We make no statement on this page about the data on which any third-party model was trained, because we do not control that data and cannot verify it.',
        'We do not use personal data collected through this website to train or fine-tune models. We do not make claims here about pilot data beyond what each pilot’s privacy notice or agreement says.',
      ],
    },
    {
      heading: 'Human review and your choices',
      items: [
        'Treat every AI output as a suggestion. Check it before acting on it, especially if it affects safety, money, health or another person.',
        'You can stop using an AI feature at any time. Where a product has a non-AI way to do the same thing, you can use that instead.',
        'If you are a pilot partner, keep your existing processes in place alongside the product.',
        'We do not take decisions with legal or similarly significant effects about people through automated means.',
      ],
    },
    {
      heading: 'Known limitations across products',
      items: [
        'Errors, omissions and made-up or misleading content can occur.',
        'Performance can vary with language, accent, lighting, camera, connectivity and the person using the product.',
        'Outputs may reflect biases present in the data or models behind them.',
        'Products are in development and may change without notice.',
      ],
      after: ['See our Responsible AI Principles for how we aim to manage these limits.'],
    },
    {
      heading: 'How to report an error or concern',
      body: [
        `Email ${EMAIL} with the subject “AI report”. Tell us which product and version you used, what you did, what the product did and what you expected. Please do not include sensitive personal data; if it is needed we will ask you how to share it safely.`,
        'We acknowledge reports within 5 business days where we can, look into them, and tell you what we found and what we will change. Where a report points to a risk to safety or to a person’s rights, we treat it as a priority.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about how our products use AI: ${EMAIL}. See also our Responsible AI Principles, Privacy Policy and Data Retention Schedule.`],
    },
  ],
}

export const SECURITY: LegalDoc = {
  title: 'Security Overview',
  updated: UPDATED,
  intro: `This page describes how Odylytics approaches the security of its website and member dashboard, what we rely on third parties for, how we handle incidents and where our limits are. We are an early-stage student team. We describe what we do, not what a large company with a dedicated security department might do, and we do not claim certifications or audits we do not have.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'We use encrypted connections, hashed passwords, access rules on our database and need-to-know access for our team.',
        'We rely on third-party providers for hosting, sign-in and analytics. They are listed on our Subprocessors page.',
        'We have no security certification (for example SOC 2 or ISO 27001), no independent penetration test and no round-the-clock security monitoring.',
        'If personal data is affected by a breach, we investigate, contain it and notify the people and authorities the law requires.',
        `Report vulnerabilities privately to ${EMAIL}. See our Responsible Disclosure Policy.`,
      ],
    },
    {
      heading: 'Scope',
      body: [
        'This overview covers the public website and the member dashboard. Pilot deployments of our solutions may have their own security arrangements, described in the relevant pilot agreement or notice.',
        'The website is a static site. It has no server-side application of our own. The contact form opens your own email app and does not send data to our servers.',
      ],
    },
    {
      heading: 'Our practices',
      items: [
        'Encryption in transit. The whole Site is served over HTTPS.',
        'Passwords. Member passwords are stored only in hashed form by our sign-in provider. We cannot read them.',
        'Database access rules. The member database is set up so that only signed-in members can change content. Public visitors can read only content that is published.',
        'Minimal data. The Site collects little personal data, which reduces what could be exposed.',
        'Dependencies. We keep software dependencies reasonably up to date and review them when we make changes.',
        'Secrets. Keys that must stay private are kept out of the public source code and the built Site. The public database key used by the Site is designed to be public and relies on the database access rules for protection.',
      ],
      after: ['These are practices of a small team. We do not claim they are complete or that they would withstand a determined attacker.'],
    },
    {
      heading: 'Access control',
      items: [
        'Member accounts are issued by invitation only.',
        'Team access to enquiry emails and member data is limited to those who need it.',
        'We review access and close accounts when a person leaves the team or stops collaborating with us.',
        'We ask members to use a strong, unique password and not to share their account.',
      ],
      after: ['We do not currently enforce multi-factor authentication for every account. Updating soon.'],
    },
    {
      heading: 'Third-party services',
      body: [
        'We use outside providers to host and deliver the Site, to run member sign-in and the content database, and to count visits. Their security depends in part on their own practices and certifications, which are theirs and not ours. We choose providers that describe their own security measures, but we cannot guarantee them.',
        'The current list of provider categories is on our Subprocessors page.',
      ],
    },
    {
      heading: 'What we do not currently have',
      items: [
        'No formal security certification or attestation, such as SOC 2 or ISO 27001.',
        'No independent penetration test or external security audit.',
        'No bug bounty programme.',
        'No dedicated security staff or 24-hour monitoring.',
        'No formal disaster-recovery testing beyond the backup and recovery features of our providers.',
      ],
      after: ['We may add some of these as the project grows. If we do, we will say so here.'],
    },
    {
      heading: 'Incident response',
      body: ['When we learn of a possible security incident, we:'],
      items: [
        'investigate to understand what happened and what data is involved;',
        'contain it, for example by revoking access, rotating credentials or taking a feature offline;',
        'fix the cause where we can;',
        'record what happened and what we changed;',
        'notify affected people, pilot partners and authorities as set out below.',
      ],
    },
    {
      heading: 'Breach notification',
      body: [
        'If a personal data breach is likely to put people’s rights at risk, we will notify the competent authority within the time the law sets, which is commonly 72 hours after we become aware of it, for example under Vietnamese data protection rules and the EU and UK GDPR.',
        'If a breach is likely to result in a high risk to you, we will tell you without undue delay, saying what happened, what data is involved, what we are doing and what you can do. For pilot partners, the notification terms in the signed agreement apply, and we will tell them without undue delay.',
      ],
    },
    {
      heading: 'What you can do',
      items: [
        'Use a strong, unique password and keep it confidential.',
        'Sign out on shared devices.',
        'Be cautious of messages that claim to be from us and ask for passwords or payment. We will never ask for your password by email.',
        'Tell us at once if you think your account has been compromised.',
      ],
    },
    {
      heading: 'Limits',
      body: [
        'No system is completely secure. We cannot guarantee that the Site will never be interrupted, accessed without permission or affected by a vulnerability. Using the Site is subject to the disclaimers and limitations in our Terms of Use.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Security questions: ${EMAIL} with the subject “Security”. To report a vulnerability, see our Responsible Disclosure Policy.`],
    },
  ],
}

export const DISCLOSURE: LegalDoc = {
  title: 'Responsible Disclosure Policy',
  updated: UPDATED,
  intro: `We want to hear about security weaknesses in our website and member dashboard so that we can fix them. This policy explains what you may test, how to report what you find, what you can expect from us, and the limits of what we can offer. It is written for good-faith security researchers and for anyone who comes across a problem by chance.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        `Report privately to ${EMAIL} with the subject “Security report”.`,
        'Test only what is in scope, avoid harming people or data, and stop once you have shown the problem exists.',
        'If you follow this policy in good faith, we will not take legal action against you for your research.',
        'We do not pay bounties. We will thank you, and credit you publicly if you want.',
        'Give us a reasonable time to fix the issue before you tell anyone else.',
      ],
    },
    {
      heading: 'Scope',
      body: ['In scope:'],
      items: [
        'the Odylytics public website and its subpages;',
        'the member login and dashboard;',
        'the way the Site is configured to use our member database, such as access rules that let someone read or change data they should not.',
      ],
      after: [
        'Out of scope: systems run by other organisations, including our hosting, database, analytics and email providers (please report those to the provider directly, and tell us if it affects us); partner and pilot systems unless we have agreed in writing that they are in scope; and any system or data that does not belong to us.',
      ],
    },
    {
      heading: 'Rules',
      body: ['When testing, you must:'],
      items: [
        'avoid accessing, changing, copying or deleting data that is not yours, and use only your own accounts or accounts we have given you for testing;',
        'stop and tell us as soon as you find you can reach another person’s data, and do not keep or share what you saw;',
        'not degrade the Site for others, which includes denial-of-service attacks and automated scans that generate heavy traffic;',
        'not use social engineering, phishing or physical attacks against our team, members, partners or providers;',
        'not send spam or malware, and not leave persistent backdoors;',
        'keep the details private until we have had a reasonable time to respond, as set out below.',
      ],
    },
    {
      heading: 'Reports we cannot act on',
      body: ['These are generally not treated as vulnerabilities on their own:'],
      items: [
        'missing security headers or settings with no demonstrated impact;',
        'reports from automated tools with no explanation of real impact;',
        'issues that need an already-compromised device or browser;',
        'volumetric denial-of-service claims;',
        'the presence of public information that is meant to be public, such as the database key used by the Site, unless you show that our access rules fail to protect data;',
        'spelling errors, broken links and similar non-security bugs (we still welcome them by email).',
      ],
    },
    {
      heading: 'How to report',
      body: [
        `Email ${EMAIL} with the subject “Security report”. Include: a description of the issue; the page, address or feature affected; steps to reproduce it; what you were able to do and what impact you believe it has; any proof of concept, kept to the minimum needed; and how you would like to be contacted and credited, if at all.`,
        'We do not currently publish a PGP key or run a separate reporting portal. Please do not include passwords, personal data of other people or other sensitive material in the email. If the report needs that, say so and we will agree a safer way to share it.',
      ],
    },
    {
      heading: 'What you can expect from us',
      items: [
        'We will acknowledge your report within 5 business days.',
        'We will look into it and tell you whether we agree it is a vulnerability, normally within 30 days.',
        'We will work to fix confirmed issues. We cannot promise a fixed time, since we are a small student team, but we will keep you informed.',
        'We will tell you when it is fixed and, if you wish, credit you by name or handle when we describe the fix.',
        'We will treat your report as confidential and will not share your identity with third parties without your agreement, unless the law requires it.',
      ],
    },
    {
      heading: 'Coordinated disclosure',
      body: [
        'Please give us a reasonable time to fix an issue before you make it public or share it with others. We ask for 90 days from your report. If we need more time, we will explain why. If we have not responded at all, you may disclose after that period. If the issue puts people’s data at immediate risk, tell us so that we can act quickly.',
      ],
    },
    {
      heading: 'Safe harbour',
      body: [
        'If you make a good-faith effort to follow this policy, we will consider your research to be authorised, we will not start or support legal action against you for it, and we will say so to anyone who asks us. This does not give you permission to break the law, to breach the rules above, or to act against systems that are not ours. We cannot speak for third parties or authorities, and we cannot promise they will take the same view.',
      ],
    },
    {
      heading: 'What we do not offer',
      items: [
        'No bug bounty or other payment.',
        'No guarantee of a fix by a given date.',
        'No legal advice, and no protection from claims that third parties or authorities might bring.',
      ],
      after: ['We may offer a thank-you, a reference or a credit on this page.'],
    },
    {
      heading: 'Contact',
      body: [`Security reports and questions about this policy: ${EMAIL}. See also our Security Overview and Terms of Use.`],
    },
  ],
}

export const DATA_REQUESTS: LegalDoc = {
  title: 'Data Subject Requests',
  updated: UPDATED,
  intro: `This page explains how you can ask Odylytics to see, correct, delete, restrict or move the personal data we hold about you, or to stop using it. It sets out how to submit a request, how we confirm who you are, how fast we reply and what rules apply in particular regions. It supplements the rights described in our Privacy Policy.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        `Email ${EMAIL} with the subject “Data request” and tell us what you want.`,
        'We may ask you to confirm your identity so that we do not give your data to someone else.',
        'We aim to reply within 30 days, or sooner where the law sets a shorter time.',
        'There is normally no fee.',
        'If you are not satisfied, you can complain to us and to your local data protection authority.',
      ],
    },
    {
      heading: 'What you can ask for',
      body: ['Depending on where you live and the law that applies, you can ask us to:'],
      items: [
        'confirm whether we process personal data about you and give you a copy;',
        'correct data that is wrong or incomplete;',
        'delete your data;',
        'restrict how we use your data, or object to a particular use;',
        'withdraw a consent you gave us;',
        'give you your data in a structured, commonly used format, or send it to another organisation where possible;',
        'explain, and have a person review, any decision made about you by automated means (we do not currently take such decisions through this Site);',
        'stop any sale or sharing of your data for advertising (we do not sell or share personal data for advertising).',
      ],
    },
    {
      heading: 'How to submit a request',
      body: [
        `Email ${EMAIL} with the subject “Data request”. Please include: your name and the email address or account you used with us; the right you want to use; a description of the data or period concerned; the country or state where you live; and, if someone else is sending the request for you, proof that you authorised them.`,
        'There is no required form. We do not currently run a request portal. If you are a member, you can also ask us to correct or delete information you can see in the dashboard.',
      ],
    },
    {
      heading: 'Confirming your identity',
      items: [
        'We may ask you to reply from the email address we hold, or to answer a question only you would know.',
        'We do not ask for copies of identity documents unless we cannot verify you in any other way, and we then ask only for what is needed and delete the copy once checked.',
        'Where someone acts for you, we may ask for written authorisation.',
        'If we cannot verify who you are, we may decline the request and will explain why.',
      ],
    },
    {
      heading: 'Our response',
      items: [
        'We acknowledge your request within 5 business days where we can.',
        'We aim to give a full reply within 30 days of receiving it and of confirming your identity.',
        'If a request is complex or we have many requests, the law may let us extend the time. We will tell you before the first period ends and give the reason.',
        'We provide data electronically, usually by email or secure link.',
        'We do not charge a fee unless a request is clearly unfounded or excessive and the law lets us charge a reasonable fee or refuse.',
      ],
    },
    {
      heading: 'When we may limit or refuse a request',
      body: ['We may refuse or limit a request where the law allows, for example when:'],
      items: [
        'it would reveal personal data about another person;',
        'we have to keep the data by law, or need it to establish, exercise or defend legal claims;',
        'the request is clearly unfounded, repeated or excessive;',
        'we cannot verify your identity;',
        'we do not hold data about you.',
      ],
      after: ['We will tell you what we did and why. Some data is kept in encrypted backups for a limited time after deletion, as explained in our Data Retention Schedule.'],
    },
    {
      heading: 'Vietnam',
      body: [
        'Where Vietnamese law applies, including the Law on Personal Data Protection and Decree 13/2023/ND-CP (as amended, replaced or supplemented), you have the rights those laws give data subjects, including to be informed, to consent or refuse, to access, to withdraw consent, to delete, to restrict processing, to object, to request data, and to complain or seek remedies.',
        'Some Vietnamese rules set shorter deadlines than 30 days for certain requests. We will meet the deadline that applies to your request. You may also complain to the competent authority for personal data protection in Vietnam.',
      ],
    },
    {
      heading: 'European Economic Area and United Kingdom',
      body: [
        'If the EU or UK GDPR applies, you have the rights of access, rectification, erasure, restriction, portability and objection, the right to withdraw consent, and the right not to be subject to solely automated decisions with significant effects.',
        'We reply within one month, which can be extended by up to two further months for complex requests, and we will tell you if so. You can complain to your national supervisory authority, for example the data protection authority in your EU country or the Information Commissioner’s Office in the United Kingdom.',
      ],
    },
    {
      heading: 'Canada and Québec',
      body: [
        'If Canadian privacy law applies, you can ask for access to and correction of your personal information, and withdraw consent subject to legal and contractual limits. We reply within 30 days, which the law may let us extend.',
        'If Québec law applies, you may also have rights such as data portability, and to be told about automated decisions. You can complain to the Office of the Privacy Commissioner of Canada or, for Québec, to the Commission d’accès à l’information.',
      ],
    },
    {
      heading: 'California',
      body: [
        'If you are a California resident, you can ask us to tell you what personal information we collect, use, disclose and share, to give you a copy of it, to correct it, and to delete it. You can also opt out of the sale or sharing of personal information. We do not sell or share personal information for cross-context behavioural advertising, and we do not use or disclose sensitive personal information for purposes that would give you a right to limit it.',
        'We will not treat you worse for using these rights. You can use an authorised agent, and we may ask for proof of their authority. We confirm receipt within 10 business days and aim to reply within 45 days, which the law lets us extend once.',
      ],
    },
    {
      heading: 'Australia',
      body: [
        'If Australian privacy law applies to us or to your request, you can ask for access to and correction of your personal information. We handle requests from Australia in the same way, whether or not the Privacy Act applies to us as a small organisation, and we aim to reply within 30 days. You can complain to us and, if you are not satisfied, to the Office of the Australian Information Commissioner.',
      ],
    },
    {
      heading: 'Appeals and complaints',
      body: [
        `If we refuse your request or you are unhappy with our reply, email ${EMAIL} with the subject “Data request appeal”. Say what you disagree with. A different member of the team will review the decision where possible and reply within 30 days.`,
        'You can also complain to the data protection authority where you live or work, or where you think a breach took place. We would appreciate the chance to put things right first, but you do not have to contact us before going to an authority.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Data requests and questions: ${EMAIL}. See also our Privacy Policy, Data Retention Schedule and Subprocessors page.`],
    },
  ],
}

export const RETENTION: LegalDoc = {
  title: 'Data Retention Schedule',
  updated: UPDATED,
  intro: `This schedule shows what kinds of personal data Odylytics holds in connection with its website and member dashboard, why we hold each kind, and how long we keep it. It expands on the retention section of our Privacy Policy. Periods are maximums or targets for a small team, and may be shorter in practice.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'We keep personal data only as long as we need it for the purpose we collected it for, and then delete or anonymise it.',
        'Enquiry emails are normally kept up to 24 months after the last message.',
        'Member accounts are deleted or anonymised within 90 days of closing.',
        'Hosting request logs are kept for a short period, typically no more than 30 days.',
        `You can ask us to delete data sooner: ${EMAIL}.`,
      ],
    },
    {
      heading: 'How to read this schedule',
      body: [
        'Each entry gives the type of data, the purpose it serves and how long we keep it. We reset the clock only when a continuing relationship, contract, dispute or legal duty gives us a reason to keep data longer.',
        'Where a provider holds the data on our behalf, the period shown is the period we aim for, and the provider’s own settings or terms also apply.',
      ],
    },
    {
      heading: 'Website and enquiries',
      items: [
        'Enquiry emails and attachments. Purpose: reading and answering partnership, pilot, press, recruitment and general messages. Retention: up to 24 months after the last message, or longer for a continuing partnership, contract or legal reason.',
        'Contact details from events and partners. Purpose: following up the conversation in which you gave them to us. Retention: up to 24 months after the last contact.',
        'Records of data requests and complaints. Purpose: showing that we dealt with them and handling later disputes. Retention: up to 3 years after the request is closed.',
        'Records of content notices, misuse reports and security reports. Purpose: handling the report and keeping a record of the outcome. Retention: up to 3 years after closure, or longer if a claim is pending.',
      ],
    },
    {
      heading: 'Member accounts and content',
      items: [
        'Member email address, hashed password and sign-in sessions. Purpose: running the account and signing in. Retention: while the account is active; deleted or anonymised within 90 days after the account is closed. Sessions expire or end at sign-out.',
        'Content created by a member (news posts, testimonials, photos, links, names and quotes). Purpose: running the public Site. Retention: while published and the account is active. Personal data is deleted or anonymised within 90 days after closure, except published content, which we may keep with the author’s name removed on request.',
        'Edit history and audit records, where kept. Purpose: security and correcting mistakes. Retention: up to 12 months.',
      ],
    },
    {
      heading: 'Technical and usage data',
      items: [
        'Hosting request logs (IP address, browser, pages requested, timestamps). Purpose: delivering the Site, security and fault-finding. Retention: held by our hosting provider, typically no more than 30 days, unless needed for an incident.',
        'Anonymous usage data from Vercel Web Analytics (page, referrer, approximate country or region, browser, operating system, device type). Purpose: understanding how the Site is used. Retention: aggregate form, for as long as it remains useful for trends. It does not directly identify you.',
        'Theme and language preferences in your browser. Purpose: remembering your choices. Retention: on your device until you clear them. We do not receive them.',
      ],
    },
    {
      heading: 'Pilots and partner projects',
      body: [
        'Personal data processed in a pilot or partner project is covered by the notice and agreement for that pilot, not by this schedule. As a default for pilot data we delete or return it within 30 days after the pilot ends or the partner asks, unless a longer period is agreed in writing or the law requires us to keep it. Updating soon: retention periods for each product.',
      ],
    },
    {
      heading: 'Backups',
      body: [
        'Deleted data may remain in encrypted backups kept by our providers for a limited time until they are overwritten in the normal cycle. We do not restore deleted personal data from a backup unless it is necessary to recover from an incident, and if we do, we delete again what should not be there.',
      ],
    },
    {
      heading: 'Legal holds and exceptions',
      items: [
        'We keep data longer when needed to comply with a legal duty, to respond to a court order or an authority, or to establish, exercise or defend a legal claim.',
        'We keep data longer if a data request, complaint or dispute is open.',
        'We may keep anonymised or aggregate data that cannot identify you with no time limit.',
      ],
    },
    {
      heading: 'How we delete data',
      body: [
        'When a retention period ends we delete the data, or remove the information that identifies you. We review what we hold on a regular basis; as a small team, this is done manually and not on an automatic schedule, so deletion may occur some weeks after a period ends. We do not currently have automated deletion for enquiry emails.',
      ],
    },
    {
      heading: 'Changes to this schedule',
      body: ['We may change periods as our systems, providers and the law change. The date at the top shows the latest revision. We will not apply a longer period to data already collected unless the law lets us or you agree.'],
    },
    {
      heading: 'Contact',
      body: [`Questions about retention, or to ask for earlier deletion: ${EMAIL}. See also our Privacy Policy and Data Subject Requests page.`],
    },
  ],
}

export const SUBPROCESSORS: LegalDoc = {
  title: 'Subprocessors',
  updated: UPDATED,
  intro: `Odylytics uses a small number of outside service providers to run its website and member dashboard. This page lists them by category, says what each is used for and what personal data it may handle, and explains how we tell you about changes. Where we have not yet confirmed a provider’s name or details, we say so. This page covers the website and member dashboard. Pilot deployments are covered by the documents for each pilot.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'We use a hosting and delivery provider, Supabase for member accounts and content, Vercel Web Analytics for anonymous visit counts, and email services.',
        'We do not use advertising networks, data brokers or social media widgets on the Site.',
        'Some provider names and details are marked “updating soon” until we have confirmed them.',
        'We update this page when a provider is added or replaced and tell pilot partners ahead of time where we can.',
        `Questions: ${EMAIL}.`,
      ],
    },
    {
      heading: 'What “subprocessor” means here',
      body: [
        'A subprocessor is an outside company that processes personal data for us to help us provide the Site. We act as the controller of the personal data described in our Privacy Policy, and these providers act under our instructions or their own terms. The list below is of providers that may handle personal data of visitors or members.',
      ],
    },
    {
      heading: 'Current providers',
      items: [
        'Static hosting and content delivery. Provider: name updating soon. Purpose: serving the Site’s pages and files and recording standard request logs. Data: IP address, browser and device type, pages requested, timestamps. Location: updating soon.',
        'Supabase. Purpose: member sign-in and the database for member-managed content such as news posts and testimonials. Data: member email address, hashed password, session data, content members create. Used only when a member signs in or the Site loads member-managed content. Location: updating soon.',
        'Vercel Inc. (Vercel Web Analytics). Purpose: anonymous measurement of page visits. Data: page address, referrer, approximate country or region, browser, operating system and device type. It is designed to work without cookies. Location: United States and other regions where Vercel operates.',
        'Email. The contact form does not send data to a server; it opens your own email app, so your email provider carries the message you write. Our enquiry mailbox is a Gmail address, so the message is stored with Google as our mailbox provider. Data: the content of your message and your email address.',
      ],
      after: ['Typefaces are hosted on our own servers, so no font provider receives your data.'],
    },
    {
      heading: 'Not subprocessors',
      items: [
        'Websites you choose to open from links on the Site, such as news publishers, partners and LinkedIn. They are independent organisations with their own policies.',
        'Professional advisers, such as lawyers and accountants, who receive data only where needed and under duties of confidentiality.',
        'Public authorities, where the law requires us to disclose data.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'Our providers operate in several countries, so personal data may be processed outside Vietnam and outside your own country, including in the United States and the European Union. We rely on the safeguards described in our Privacy Policy and the DPA summary for partners. You can ask us for the details of the safeguards used for a specific provider.',
      ],
    },
    {
      heading: 'How we choose and manage providers',
      items: [
        'We choose providers that publish their security and privacy terms.',
        'We use the settings available to us to limit the data they receive.',
        'We review the list when we change how the Site works.',
        'We do not allow providers to use your data through us for their own advertising.',
      ],
      after: ['We do not currently carry out on-site audits of providers. We rely on their published terms and documentation.'],
    },
    {
      heading: 'Changes to this list',
      body: [
        'When we add or replace a provider that handles personal data, we will update this page and its date before or when the change takes effect. For pilot partners with a signed data processing addendum, we aim to give notice by email at least 30 days before a new subprocessor starts handling pilot personal data, so that you have time to object. If you object on reasonable data protection grounds, we will work with you to find a solution, and if we cannot, you may end the affected part of the pilot.',
        `To be told by email when this list changes, write to ${EMAIL} with the subject “Subprocessor updates”.`,
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about our providers: ${EMAIL}. See also our Privacy Policy, Cookie Policy and DPA summary.`],
    },
  ],
}

export const ACCESSIBILITY: LegalDoc = {
  title: 'Accessibility Statement',
  updated: UPDATED,
  intro: `Odylytics builds tools for people who are often underserved by standard technology, so we want our own website to be usable by as many people as possible. This statement explains the standard we aim for, what we have done, what we know does not work well yet and how to tell us about a barrier. We have not had the Site formally audited and do not claim conformance.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2 at level AA.',
        'We have not yet carried out a full independent audit, so we make no claim of conformance.',
        'There are known limitations, listed below.',
        `If you meet a barrier, email ${EMAIL}. We reply within 5 business days.`,
      ],
    },
    {
      heading: 'Our target',
      body: [
        'The target for the public website is WCAG 2.2 level AA. This is a goal and not a statement of current status. The member dashboard and the legal pages are held to the same goal.',
      ],
    },
    {
      heading: 'What we have done',
      items: [
        'Structure. We use semantic page structure, headings and landmarks so assistive technology can navigate the pages.',
        'Keyboard. Navigation, menus, dialogs and carousels are designed to be usable by keyboard. Dialogs use the browser’s native dialog element and return focus when they close.',
        'Motion. We respect the “reduce motion” setting in your device. When it is on, the animated hero background, logo loops, rotating words and smooth scrolling are turned off.',
        'Themes. You can choose a light or dark theme from the navigation bar.',
        'Language. The Site is available in English and Vietnamese, and the page language is set for assistive technology.',
        'Text and layout. Text can be resized and the layout adjusts to phone, tablet and desktop widths.',
        'Decorative content. Purely decorative images and animated clones of logos are hidden from assistive technology.',
      ],
    },
    {
      heading: 'Known limitations',
      items: [
        'The animated hero background (a three-dimensional road scene) is decorative and needs a modern browser with WebGL. It is replaced by a simpler background when WebGL is unavailable. It does not carry information, but it may be distracting if motion is not reduced.',
        'Smooth scrolling is applied on the page. It is turned off under the reduce-motion setting, but some users may find it unfamiliar.',
        'The scrolling logo rows and the testimonial carousel move or scroll horizontally. They pause on hover and are static under the reduce-motion setting, but they do not yet have a visible pause control for every user.',
        'Colour contrast has been considered in the design, but we have not tested every colour combination in both themes and in the background transition between them. Some text may fall short of AA contrast.',
        'The legal pages and member pages are in English only.',
        'Some images may lack complete text alternatives, particularly photographs and partner logos supplied by third parties.',
        'Content on external sites we link to, such as news articles, is outside our control.',
        'We have not tested the Site with the full range of screen readers, browsers and assistive technologies.',
      ],
      after: ['We are working through these limitations, but we cannot promise a date for each.'],
    },
    {
      heading: 'How we check',
      body: [
        'We check pages as we build them, including by keyboard and with automated tools, and we review reports from users. We do not currently have a formal testing programme or a named accessibility specialist. We plan to commission an independent assessment when resources allow. Updating soon.',
      ],
    },
    {
      heading: 'Alternative ways to get information',
      body: [
        `If you cannot use part of the Site, email ${EMAIL} and tell us what you need. We will try to give you the information in another form, for example as plain text in an email, or answer your question directly.`,
      ],
    },
    {
      heading: 'Feedback and response time',
      body: [
        `Tell us about any barrier at ${EMAIL} with the subject “Accessibility”. Please include the page address, what you were trying to do, what happened, and the browser, device and assistive technology you use if you are willing to share.`,
        'We acknowledge feedback within 5 business days and aim to tell you what we will do within 30 days. We will say if a fix is not possible and offer an alternative where we can.',
      ],
    },
    {
      heading: 'Complaints',
      body: [
        'If you are not satisfied with our reply, you can write to us again and a different member of the team will review it. You may also contact the authority or organisation responsible for accessibility or disability rights in your country.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Accessibility feedback: ${EMAIL}. See also our Responsible AI Principles for how we approach accessibility in our products.`],
    },
  ],
}

export const LEGAL_NOTICE: LegalDoc = {
  title: 'Legal Notice',
  updated: UPDATED,
  intro: `This notice identifies who operates the Odylytics website, how to contact us and which rules apply to the content. Some details of the legal entity are not yet available and are marked “updating soon”.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'Odylytics is a team of student founders based in Ho Chi Minh City, Vietnam.',
        `The best way to reach us is ${EMAIL}.`,
        'Registered entity name, registration number and postal address: updating soon.',
        'Vietnamese law applies, and courts in Ho Chi Minh City are the competent courts, as set out in the Terms of Use.',
      ],
    },
    {
      heading: 'Operator',
      items: [
        'Name: Odylytics.',
        'Legal form and registered entity name: updating soon.',
        'Registration number and registering authority: updating soon.',
        'Tax identification number: updating soon.',
        'Registered address: updating soon. Our team is based in Ho Chi Minh City, Vietnam.',
        'Legal representative: updating soon.',
      ],
      after: ['We will fill in these details as soon as they are confirmed.'],
    },
    {
      heading: 'Contact',
      items: [
        `Email: ${EMAIL}.`,
        'Postal address: updating soon.',
        'Telephone: updating soon. For fastest handling, please use email.',
      ],
      after: ['Messages sent by email are treated as received on the next business day in Ho Chi Minh City, as set out in the Terms of Use.'],
    },
    {
      heading: 'Responsibility for content',
      body: [
        'We take care to keep the content of the Site accurate and up to date, but it is provided for general information and may contain mistakes or be out of date. Statements about our products describe their intended behaviour, and some products are prototypes or in pilot stage. Nothing on the Site is an offer, a contract or professional advice.',
        'Content published by members through the dashboard is the responsibility of the member who published it, and we may remove it.',
        `If you find content that is wrong or that infringes your rights, tell us at ${EMAIL} with the subject “Content notice”. See the Terms of Use for how we handle notices.`,
      ],
    },
    {
      heading: 'Links to other sites',
      body: [
        'The Site links to websites run by other organisations, including news publishers, partners, competition organisers and social networks. We have no control over their content and are not responsible for it. We checked the links when we added them, but we cannot check them continuously. If you find a link that leads to unlawful content, tell us and we will review it.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The design, text, graphics, software, layout, the Odylytics name and logo, and the names and logos of our solutions belong to Odylytics, its team or its licensors, and are protected by intellectual property laws. Names, logos and marks of partners, universities, organisers and publishers belong to their owners and appear only to identify them.',
        'Open-source software used to build the Site remains under its own licences. The Terms of Use set out what use of our material is permitted. Any other use needs our written permission.',
      ],
    },
    {
      heading: 'Personal data and cookies',
      body: ['How we handle personal data and browser storage is explained in our Privacy Policy and Cookie Policy.'],
    },
    {
      heading: 'Applicable law and jurisdiction',
      body: [
        'The Site and everything connected with it is governed by the laws of the Socialist Republic of Vietnam. Disputes are handled as set out in our Terms of Use, including a first step of discussion and, if that fails, the competent courts of Ho Chi Minh City, Vietnam, without affecting any mandatory consumer rights you have where you live.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about this notice: ${EMAIL}.`],
    },
  ],
}

export const DPA: LegalDoc = {
  title: 'Data Processing Addendum Summary',
  updated: UPDATED,
  intro: `This page summarises the data protection terms that Odylytics offers to partners who take part in a pilot of one of its solutions and who share personal data with us for that purpose. It is a plain-language summary, not the agreement itself. A signed data processing addendum is provided on request for pilots. If this summary and the signed addendum differ, the signed addendum applies. It does not apply to the personal data of visitors to our website, which is covered by our Privacy Policy.`,
  sections: [
    {
      heading: 'The short version',
      items: [
        'For pilot data, the partner decides why and how the data is used (controller) and Odylytics processes it on the partner’s instructions (processor).',
        'We use the data only for the pilot, keep it confidential, protect it with the measures described in our Security Overview and delete or return it at the end.',
        'We list our subprocessors, tell you before changing them and flow down equivalent obligations.',
        'We help you answer data subject requests and tell you without undue delay about any breach.',
        `A signed DPA is available on request for pilots: ${EMAIL}.`,
      ],
    },
    {
      heading: 'Roles of the parties',
      body: [
        'In a pilot, the partner is normally the controller of personal data that the partner or its users put into the solution, and Odylytics is the processor. Each pilot agreement states the roles. Where Odylytics decides for its own purposes why and how data is used, for example website data, it acts as a controller and the Privacy Policy applies.',
        'Where either party is a joint controller or both are independent controllers for part of the data, the agreement says so.',
      ],
    },
    {
      heading: 'Subject matter, duration and types of data',
      body: [
        'The agreement describes, for each pilot, the purpose and duration of the processing, the categories of people whose data is processed (for example the partner’s staff, volunteers or participants) and the types of personal data. We ask partners not to put in data that the pilot does not need, in particular sensitive data. Updating soon: standard descriptions for each product.',
      ],
    },
    {
      heading: 'Processing on documented instructions',
      items: [
        'We process personal data only on the partner’s documented instructions, which include the pilot agreement and the partner’s settings in the solution.',
        'We do not use pilot data for our own purposes, do not sell it and do not use it to train models unless the partner agrees in writing.',
        'We tell the partner if we think an instruction breaks the law.',
        'If the law requires us to process data in another way, we tell the partner first unless the law prevents us.',
      ],
    },
    {
      heading: 'Confidentiality',
      body: [
        'We limit access to pilot data to team members and advisers who need it for the pilot and who are bound by a duty of confidentiality. This duty continues after the pilot ends.',
      ],
    },
    {
      heading: 'Security measures',
      body: [
        'We apply the security practices described in our Security Overview, appropriate to the nature of the pilot data, and any additional measures stated in the agreement. We do not hold certifications such as SOC 2 or ISO 27001. If a pilot needs stronger measures, we will discuss with the partner what is feasible for a student team before the pilot starts.',
      ],
    },
    {
      heading: 'Subprocessors',
      items: [
        'The partner gives a general authorisation for the subprocessors listed on our Subprocessors page and in the agreement.',
        'We aim to tell the partner by email at least 30 days before adding or replacing a subprocessor that handles pilot data.',
        'The partner can object on reasonable data protection grounds. We then work with the partner to find a solution, and if we cannot, the partner may end the affected part of the pilot.',
        'We bind subprocessors to data protection terms that are materially no less protective than the agreement, and remain responsible to the partner for their performance as the law requires.',
      ],
    },
    {
      heading: 'Assistance to the partner',
      items: [
        'Data subject requests. If someone asks us directly about pilot data, we pass the request to the partner without answering it ourselves, unless told otherwise. We help the partner respond within the time the law sets.',
        'Impact assessments and consultations. We provide reasonable information to support the partner’s data protection impact assessments.',
        'Security and breaches. We tell the partner without undue delay, and aim to do so within 72 hours, after becoming aware of a personal data breach affecting pilot data, and give the information we have to help the partner meet its own notification duties.',
      ],
    },
    {
      heading: 'Deletion and return',
      body: [
        'When the pilot ends, or earlier on request, we delete or return pilot personal data, at the partner’s choice, normally within 30 days, and delete existing copies unless the law requires us to keep them. Data in encrypted backups is deleted when the backups are overwritten in the normal cycle. On request we confirm deletion in writing.',
      ],
    },
    {
      heading: 'Audits and information',
      body: [
        'We make available the information needed to show that we meet our obligations, for example by answering a reasonable security and privacy questionnaire. If that is not enough, the partner may carry out an audit on reasonable written notice, during business hours, no more than once a year unless there has been a breach, subject to confidentiality and without disrupting our work, at the partner’s cost. We do not have third-party audit reports to share.',
      ],
    },
    {
      heading: 'International transfers',
      body: [
        'Where pilot data is transferred outside Vietnam, the European Economic Area or the United Kingdom, we put in place the safeguards the law requires, for example standard contractual clauses, and complete any assessments or filings needed. The agreement states which transfer mechanism applies. We will tell the partner where pilot data will be processed. Updating soon.',
      ],
    },
    {
      heading: 'Liability and governing law',
      body: [
        'Liability under the addendum is governed by the liability terms of the pilot agreement. This summary does not create or change any liability. The law that governs the addendum is the one stated in the pilot agreement and, unless it says otherwise, the laws of Vietnam.',
      ],
    },
    {
      heading: 'Contact',
      body: [`To request a signed DPA or ask about these terms: ${EMAIL} with the subject “DPA request”. See also our Security Overview, Subprocessors page and Data Retention Schedule.`],
    },
  ],
}

export const EXTRA_LEGAL: Record<string, LegalDoc> = {
  'acceptable-use': ACCEPTABLE_USE,
  'responsible-ai': RESPONSIBLE_AI,
  'ai-transparency': AI_TRANSPARENCY,
  security: SECURITY,
  disclosure: DISCLOSURE,
  'data-requests': DATA_REQUESTS,
  retention: RETENTION,
  subprocessors: SUBPROCESSORS,
  accessibility: ACCESSIBILITY,
  notice: LEGAL_NOTICE,
  dpa: DPA,
}
