$(function () {

    // Lets be professional, shall we?
    "use strict";

    // Some variables for later
    var dictionary, set_lang;

    // Object literal behaving as multi-dictionary
    dictionary = {
        "en": {
            "_services": "Services",
            "_trainings": "Trainings",
            "_aboutus": "About Us",
            "_contact": "Contact",
            "_title": "Certified Large-Scale Scrum<br>(LeSS) – CLP® Training",
            "_icon-1": "Pay one & attend<br>a second for free",
            "_icon-2": "100% money<br>back guarante",
            "_icon-3": "Lifetime support over<br>dedicated Slack group",
            "_button": "Book Now",
            "_information": "Information",
            "_tab_1": "Summary",
            "_tab_2": "Content & Agenda",
            "_tab_3": "Certification",
            "_tab_4": "Locations",
            "_tab_1_1": "A comprehensive training on organizational agility",
            "_tab_1_2": "Globally recognized CLP® certificate from the LeSS Company®",
            "_tab_1_3": "Experience true agility during a simulation building a product",
            "_tab_1_4": "Practice new thinking tools that guide you in your transformation",
            "_tab_1_5": "Leave with action plans and resources",
            "_tab_2_1": "Training content",
            "_tab_2_2": "Quickly delivering value and innovating in ever-faster cycle times has become a key differentiator between good and great enterprises. Large product-development organizations are turning to agile principles and large-scale Scrum to sustainably deliver that innovation at a fast pace.",
            "_tab_2_3": "The key questions many large product development organizations face are:",
            "_tab_2_4": "How to apply what works well on a small scale to large scale developments?",
            "_tab_2_5": "What’s the design of an organization that optimizes for learning, agility and customer value?",
            "_tab_2_6": "Can I redesign my organization to create an environment to succeed in the long run?",
            "_tab_2_7": "What is Large-Scale Scrum (LeSS)?",
            "_tab_2_8": "Large-Scale Scrum (LeSS) is to organizations what Scrum is to teams: a simple, powerful, large-scale product development framework designed to evolve into something that fits perfectly within any unique context. LeSS builds on top of Scrum principles such as empiricism, cross-functional, self-managing teams, and provides a framework to apply them at scale. It presents simple structural rules and guidelines on how to adopt Scrum in large product development.",
            "_tab_2_9": "In this 3-day certified LeSS-training you will learn the LeSS rules, the principles, guides and experiments. Key learnings of this course are:",
            "_tab_2_10": "Explain what LeSS is and what LeSS is not",
            "_tab_2_11": "Explain the LeSS roles and their purpose",
            "_tab_2_12": "Explain how LeSS is a Scrum-based approach to scaling",
            "_tab_2_13": "Explain the dynamics of component teams vs. feature teams",
            "_tab_2_14": "Summarize the impact of LeSS on organizational design (structures, policies, etc.)",
            "_tab_2_15": "Understand how your current organizational design influences the agility of your organization",
            "_tab_2_16": "Understand whether and how your organization can benefit from implementing LeSS",
            "_tab_2_17": "Explain how LeSS scales over approx. 8 teams.",
            "_tab_2_18": "Agenda",
            "_tab_2_19": "The following topics will be covered in the Certified LeSS Practitioner course:",
            "_tab_2_20": "Why LeSS?",
            "_tab_2_21": "Scrum, LeSS and LeSS Huge Overview",
            "_tab_2_22": "LeSS rules und principles",
            "_tab_2_23": "Organizing around customer value and feature teams",
            "_tab_2_24": "What is your product?",
            "_tab_2_25": "Definition of Done and its impacts",
            "_tab_2_26": "Product Owner and Product Backlog in LeSS",
            "_tab_2_27": "Role of management",
            "_tab_2_28": "Organizational impacts and typical LeSS organizational structure",
            "_tab_2_29": "LeSS Product Backlog Refinement, Sprint Planning, Review and Retrospective",
            "_tab_2_30": "Consideration on technical practices when scaling",
            "_tab_2_31": "Integration & coordination",
            "_tab_2_32": "Adopting LeSS in your organization",
            "_tab_2_33": "Scrum Master role within LeSS",
            "_tab_3_1": "Target Audience:",
            "_tab_3_2": "Team- and organizational coaches",
            "_tab_3_3": "Agile coaches",
            "_tab_3_4": "Scrum Master",
            "_tab_3_5": "Organizational leaders and senior managers",
            "_tab_3_6": "Product Owner, produkt managers and stakeholders",
            "_tab_3_7": "Software engineers, hands-on technologists, designers",
            "_tab_3_8": "Business consultants",
            "_tab_3_9": "Eveyone who wants to know more about Scrum",
            "_tab_3_10": "",
            "_tab_3_11": "Prerequisites",
            "_tab_3_12": "The only prerequisite to the course is basic Scrum knowledge. That can be picked up by attending a <a href='https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster' target='_blank'>Certified Scrum Master </a>or a <a href='https://www.scrum.org/courses/professional-scrum-master-training' target='_blank'>Professional Scrum Master</a> course, or thoroughly reading Scrum introduction material such as the <a href='https://scrumprimer.org/' target='_blank'>Scrum Primer</a> and practicing Scrum.",
            "_tab_3_13": "Recommended Preparation",
            "_tab_3_14": "Participants should review Scrum introduction material such as the <a href='https://scrumprimer.org/' target='_blank'>Scrum Primer</a>. Another great preparation for this course is the <a href='https://less.works/less/test/scrum.html' target='_blank'>Scrum Test</a> on less.works. <b>It’s strongly encouraged to do this test before attending the course</b>.",
            "_tab_4_1": "Veranstaltungshinweise",
            "_tab_4_2": "Maßnahmen bei Präsenztrainings",
            "_tab_4_3": "Die Gesundheit unserer Teilnehmer und Teilnehmerinnen hat oberste Priorität. Hier sind <strong>Hygienemaßnahmen</strong> natürlich besonders wichtig:",
            "_tab_4_4": "<strong>Große Räume / Abstand:</strong> Unsere Trainings werden in besonders großen Räumen durchgeführt, so dass alle Teilnehmer mit genug Abstand zu einander sitzen konnten, um am eigenen Platz jeweils keine Maske zu benötigen.",
            "_tab_4_5": "<strong>Masken: </strong>Natürlich legen wir weiterhin Wert auf Austausch zwischen den Teilnehmern und interaktive Übungen, dafür brauchen alle Teilnehmer Masken.",
            "_tab_4_6": "<strong>Desinfektion: </strong>In den Trainingsräumen stehen Spender für Desinfektionsmittel jederzeit zur Verfügung.",
            "_tab_4_7": "<strong>Lüften: </strong>Während des Trainings werden die Räume dauerhaft gelüftet. Wenn Sie empfindlich auf Windzug reagieren, können wir das bei der Platzwahl beachten. Wir möchten Sie auch bitten sich passende Kleidung dazu mitzunehmen.",
            "_tab_4_8": "<strong>Essen &amp; Trinken: </strong>Wir bieten jedem Teilnehmer eigene Portionen an. Es gibt keine Buffets.",
            "_tab_4_9": "Wir beobachten die Lage sehr genau. Sollte es notwendig werden ein Training ins Online-Format umzuwandeln, werden sie Sie sofort über darüber informieren. Sie können sich dann kostenfrei entscheiden, ihre Teilnahme auf einen anderen Termin zu verlegen.",
            "_tab_4_10": "Wenn Sie über die notwendige technische Infrastruktur verfügen, können Sie u.U. von einem Online-Training viel mehr profitieren.",
            "_time_1": "Our next trainings",
            "_time_2": "<span class='blue'>Berlin, Germany</span><br>Trainer: Robert Briese",
            "_time_3": "<span class='blue'>Online</span><br> Trainer: Robert Briese",
            "_time_4": "<span class='blue'>Berlin, Germany</span><br> Trainer: Robert Briese",
            "_time_button": "Zur Anmeldung",
            "_price_1": "Prices",
            "_price_2": "3-day Certified LeSS Practitioner (CLP®)",
            "_price_3": "The standard price is 2490,00€ (netto) excl. VAT",
            "_price_4": "The early bird price, 5 weeks before the training is 1990,00€ (netto) excl. VAT",
            "_price_5": "5-day Online LeSS Practitioner (pCLP®)",
            "_price_6": "The standard price is 2200,00€ (netto) excl. VAT",
            "_price_7": "The early bird price, 5 weeks before the training is 1850,00€ (netto) excl. VAT",
            "_feedback_1": "Feedback from participants",
            "_feedback_2": '“Robert used innovative ideas and tools in his online CLP class. He was very friendly and patient with regards to questions and illustrated many aspects with anecdotes from the "real world". He mastered the technology well!”',
            "_feedback_3": "Kai Radtke, Gründer und Gesellschafter von <span>metanoia berlin GbR</span>",
            "_feedback_4": '“I enjoyed the content as well as the presentatio using Miro. The diversity of the group was very interesting which lead to good questions and conversations.  Robert approached the training very much coming from the values side of LeSS (and Scrum).”',
            "_feedback_5": "Nadja Krombach, Sr. Innovation Consultant at <span>zero360 GmbH</span>",
            "_feedback_6": '“Small group, verry efficient, obline, very good tools, every question answered.”',
            "_feedback_7": "Christian Strenge, Startup Coach",
            "_trainer_1": "About the trainer",
            "_trainer_2": "Robert is one of 22 certified LeSS Trainers globally and one of the few with hands-on experience in LeSS and LeSS Huge. As a <b>change agent for 15+ years </b>consulting and coaching, he has worked with over 30 companies, including DAX-listed global brands such as Adidas, BMW, BP, Dr. Oetker, Henkel, Hilti, Hugo Boss, SAP, Volkswagen, and ZF.",
            "_trainer_3": "From 2015 to 2016 he <b>led a LeSS adoption</b> at a <a href='https://less.works/case-studies/sys.html' target='_blank'>Global Player in the Software Industry</a>, scaling development from 3 to 7 teams and coaching the development and the management team on how to lead a scaled agile organization. In 2018 he contributed to significant improvements in product delivery at <b>one of the biggest LeSS Huge adoptions in the world at BMW AG</b>. Working with over 30 teams, including large groups of over 400 employees, he led them to deliver bi-weekly product increments consisting of hardware and software.",
            "_trainer_4": "Read more",
            "_contact_1": "Book Now",
            "_contact_2": "Choosen date",
            "_contact_3": "Please pick out a date!",
            "_contact_4": "Rechnungsempfänger",
            "_contact_5": "Bitte geben Sie die Rechnungsdaten so ein, wie Ihre Buchhaltung diese benötigt.",
            "_contact_6": "Rechnungsempfänger (Firma/Name) *",
            "_contact_7": "Rechnungsempfänger Zusatz",
            "_contact_8": "Telefonnummer",
            "_contact_9": "Straße und Hausnummer *",
            "_contact_10": "USt / VAT ID (wenn nicht in Deutschland)",
            "_contact_11": "Wie sind Sie auf uns aufmerksam geworden?",
            "_contact_12": "Daten der Teilnehmer",
            "_contact_13": "Die folgenden Daten werden nach dem aktiv und vollständig besuchten Training an die LeSS Company zum Zweck der Zertifizierung und Mitgliedschaft weitergegeben.",
            "_contact_14": "Teilnehmer 1: Vor- und Nachname *",
            "_contact_15": "Teilnehmer 1: E-Mail-Adresse *",
            "_contact_16": "ggf. weitere Teilnehmer (ein Name plus E-Mail-Adresse pro Zeile)",
            "_contact_17": "Datenschutzerklärung und Teilnahmebedingungen",
            "_contact_18": "Links zu unserer <a href='legal/'>Datenschutzerklärung und den Teilnahmebedingungen</a>.",
            "_contact_19": "Bestätigung *",
            "_contact_20": "Ich habe die Datenschutzerklärung und die Teilnahmebedingungen gelesen und erkläre mich mit diesen einverstanden.",
            "_contact_21": "Sonstige Bemerkungen (Verpflegungswünsche, Gutscheincodes, etc.)",
            "_contact_22": "Verbindlich Anmelden"
        },
        "de": {
            "_services": "Services",
            "_trainings": "Trainings",
            "_aboutus": "About Us",
            "_contact": "Contact",
            "_title": "Certified Large-Scale Scrum<br>(LeSS) – CLP® Training DE",
            "_icon-1": "Ein Preis - der<br>zweite Kurs Gratis",
            "_icon-2": "100% Geld-zurück<br>Garantie",
            "_icon-3": "Mentor Unterstützung<br>nach dem Kurs",
            "_button": "Jetzt Anmelden",
            "_information": "Information",
            "_tab_1": "Kurzbeschreibung",
            "_tab_2": "Inhalte & Agenda",
            "_tab_3": "Zertifizierung",
            "_tab_4": "Veranstaltungsorte",
            "_tab_1_1": "Das umfassendste Training zu Business Agilität",
            "_tab_1_2": "Weltweit anerkanntes CLP®-Zertifikat der LeSS Company®",
            "_tab_1_3": "Interaktives Training mit Beispielen aus der Praxis",
            "_tab_1_4": "Vertiefung von Prinzipien zum Erreichen von Business Agilität",
            "_tab_1_5": "Konkrete Hilfestellung zum Starten",
            "_tab_2_1": "Trainingsinhalte",
            "_tab_2_2": "Die schnelle Bereitstellung von Kundenwert und Innovationen in immer schnelleren Zykluszeiten ist zum Hauptunterscheidungs- merkmal zwischen den regulären und den sehr erfolgreichen Unternehmen geworden. Organisationen wenden sich nun den agilen Prinzipien und dem Large-Scale Scrum um diese Innovationen nachhaltig mit hoher Geschwindigkeit zu liefern.",
            "_tab_2_3": "Dies stellt große Produktentwicklungsorganisation vor wichtigen Fragen:",
            "_tab_2_4": "Wie praktiziert man das, was in Start-Ups sehr gut funktioniert in große Organisationen?",
            "_tab_2_5": "Wie sieht die Organisationsstruktur einer agilen Organisation aus?",
            "_tab_2_6": "Wie kann ich meine Organisation anpassen um langfristig erfolgreich zu sein?",
            "_tab_2_7": "Was ist Large-Scale Scrum (LeSS)?",
            "_tab_2_8": "Large-Scale Scrum (LeSS) ist für Unternehmen das, was Scrum für Teams ist: ein einfaches, leistungsstarkes, Produktentwicklungs-Rahmenwerk für viele Teams, das sich weiterentwickeln lässt, so dass es perfekt in jeden einzigartigen Kontext passt. LeSS baut auf den Scrum-Prinzipien wie Empirie und funktionsübergreifende selbstverwaltende Teams auf und bietet einen Rahmen, um diese in großem Maßstab anzuwenden. Es bietet einfache strukturelle Regeln und Richtlinien, wie Scrum in der Entwicklung großer Produkte angewendet werden kann.",
            "_tab_2_9": "Diese 3-tägige zertifizierte LeSS-Schulung lernen Sie das LeSS-Rahmenwerk, die Prinzipien, Leitfäden und Experimente kennen. Nach diesem Kurs werden Sie dazu in der Lage sein:",
            "_tab_2_10": "Zu erklären was LeSS ist und was LeSS nicht ist",
            "_tab_2_11": "Zu verstehen, ob und wie Ihre Organisation von der Implementierung von LeSS profitieren kann",
            "_tab_2_12": "Zu erklären, warum LeSS ein Scrum-basierter Ansatz zur Skalierung ist",
            "_tab_2_13": "Zusammenzufassen, welche Auswirkungen LeSS auf die Organisationsgestaltung (Strukturen, Richtlinien usw.) hat",
            "_tab_2_14": "Zu verstehen, wie Ihr aktuelles Organisationsdesign die Agilität Ihrer Organisation beeinflusst",
            "_tab_2_15": "Die Dynamik von Komponententeams vs. Feature-Teams zu erklären",
            "_tab_2_16": "Die Rollen in LeSS und ihren Zweck zu erklären",
            "_tab_2_17": "Zu erklären, wie LeSS über ca. 8 Teams skaliert werden kann",
            "_tab_2_18": "Agenda",
            "_tab_2_19": "Die folgenden Themen werden in diesem Kurs behandelt:",
            "_tab_2_20": "Warum LeSS?",
            "_tab_2_21": "Scrum, LeSS und LeSS Huge im Überblick",
            "_tab_2_22": "LeSS Regeln und Prinzipien",
            "_tab_2_23": "Was ist das Produkt?",
            "_tab_2_24": "Die Organisation von Feature Teams rund um Customer Value / Business Value",
            "_tab_2_25": "Die Defition of Done und deren Einfluß / Konsequenzen",
            "_tab_2_26": "Product Owner und Product Backlog in LeSS",
            "_tab_2_27": "Die Rolle des Managements",
            "_tab_2_28": "Organisatorische Einflüße und typische Organisationsstrukturen in LeSS",
            "_tab_2_29": "LeSS Product Backlog Refinement, Sprint Planning, Review und Retrospektive",
            "_tab_2_30": "Die Bedeutung von technischen Praktiken in der Skalierung",
            "_tab_2_31": "Integration und Koordination",
            "_tab_2_32": "Die Einführung von LeSS in Ihrer Organisation",
            "_tab_2_33": "Die Scrum Master Rolle in LeSS",
            "_tab_3_1": "An wen richtet sich der Kurs?",
            "_tab_3_2": "Team- und Organisations-Coaches",
            "_tab_3_3": "Agile Coaches",
            "_tab_3_4": "Scrum Master",
            "_tab_3_5": "Manager und Führungskräfte",
            "_tab_3_6": "Product Owner, Produkt Manager und Stakeholder",
            "_tab_3_7": "Software-Ingineure (Entwickler, Tester, Architekten) und Designer",
            "_tab_3_8": "Unternehmensberater",
            "_tab_3_9": "Alle Interessierten, die mehr über Scrum erfahren wollen",
            "_tab_3_10": "Alle, die sich zum CLP (Certified LeSS Practitioner) zertifizieren lassen möchten",
            "_tab_3_11": "Voraussetzungen",
            "_tab_3_12": "Die einzige Voraussetzung für den Kurs sind grundlegende Scrum-Kenntnisse. Dieses kann durch den Besuch eines Certified Scrum Master oder eines Professional Scrum Master Kurses oder durch die gründliche Lektüre von Scrum-Einführungsmaterial wie dem Scrum Primer und das Üben von Scrum erreicht werden.<br> Sie benötigen eine stabile und schnelle Internetverbindung, eine Webcam, ein Headset und eine Umgebung, in der Sie sich konzentrieren und bei Bedarf auch mit anderen online interagieren können.",
            "_tab_3_13": "Empfohlene Vorbereitung",
            "_tab_3_14": "Die Teilnehmer sollten Scrum-Einführungsmaterialien wie zb. den Scrum Primer (nochmal) durchsehen.<br> Eine weitere großartige Vorbereitung für diesen Kurs ist der Scrum Test auf less.works. Es wird dringend empfohlen, diesen Test vor der Teilnahme am Kurs durchzuführen um die Lernerfahrung zu maximieren.",
            "_tab_4_1": "Veranstaltungshinweise",
            "_tab_4_2": "Maßnahmen bei Präsenztrainings",
            "_tab_4_3": "Die Gesundheit unserer Teilnehmer und Teilnehmerinnen hat oberste Priorität. Hier sind <strong>Hygienemaßnahmen</strong> natürlich besonders wichtig:",
            "_tab_4_4": "<strong>Große Räume / Abstand:</strong> Unsere Trainings werden in besonders großen Räumen durchgeführt, so dass alle Teilnehmer mit genug Abstand zu einander sitzen konnten, um am eigenen Platz jeweils keine Maske zu benötigen.",
            "_tab_4_5": "<strong>Masken: </strong>Natürlich legen wir weiterhin Wert auf Austausch zwischen den Teilnehmern und interaktive Übungen, dafür brauchen alle Teilnehmer Masken.",
            "_tab_4_6": "<strong>Desinfektion: </strong>In den Trainingsräumen stehen Spender für Desinfektionsmittel jederzeit zur Verfügung.",
            "_tab_4_7": "<strong>Lüften: </strong>Während des Trainings werden die Räume dauerhaft gelüftet. Wenn Sie empfindlich auf Windzug reagieren, können wir das bei der Platzwahl beachten. Wir möchten Sie auch bitten sich passende Kleidung dazu mitzunehmen.",
            "_tab_4_8": "<strong>Essen &amp; Trinken: </strong>Wir bieten jedem Teilnehmer eigene Portionen an. Es gibt keine Buffets.",
            "_tab_4_9": "Wir beobachten die Lage sehr genau. Sollte es notwendig werden ein Training ins Online-Format umzuwandeln, werden sie Sie sofort über darüber informieren. Sie können sich dann kostenfrei entscheiden, ihre Teilnahme auf einen anderen Termin zu verlegen.",
            "_tab_4_10": "Wenn Sie über die notwendige technische Infrastruktur verfügen, können Sie u.U. von einem Online-Training viel mehr profitieren.",
            "_time_1": "Unsere nächsten Termine",
            "_time_2": "<span class='blue'>Berlin, Germany</span><br>Trainer: Robert Briese",
            "_time_3": "<span class='blue'>Online</span><br> Trainer: Robert Briese",
            "_time_4": "<span class='blue'>Berlin, Germany</span><br> Trainer: Robert Briese",
            "_time_button": "Zur Anmeldung",
            "_price_1": "Preise",
            "_price_2": "3-Tage Certified LeSS Practitioner (CLP®)",
            "_price_3": "Der reguläre Preis ist 2490,00€ (netto) zzgl. MwSt.",
            "_price_4": "Der Frühbucherpreis bis 5 Wochen vor dem Termin ist 1990,00€ (netto) zzgl. MwSt.",
            "_price_5": "5-Tage Online LeSS Practitioner (pCLP®)",
            "_price_6": "Der reguläre Preis ist 2200,00€ (netto) zzgl. MwSt.",
            "_price_7": "Der Frühbucherpreis bis 5 Wochen vor dem Termin ist 1850,00€ (netto) zzgl. MwSt.",
            "_feedback_1": "Teilnehmerfeedback",
            "_feedback_2": '“Robert used innovative ideas and tools in his online CLP class. He was very friendly and patient with regards to questions and illustrated many aspects with anecdotes from the "real world". He mastered the technology well!”',
            "_feedback_3": "Kai Radtke, Gründer und Gesellschafter von <span>metanoia berlin GbR</span>",
            "_feedback_4": '“I enjoyed the content as well as the presentatio using Miro. The diversity of the group was very interesting which lead to good questions and conversations. Robert approached the training very much coming from the values side of LeSS (and Scrum).”',
            "_feedback_5": "Nadja Krombach, Sr. Innovation Consultant at <span>zero360 GmbH</span>",
            "_feedback_6": '“Small group, very efficient, great online experience, very good tools, every question answered.”',
            "_feedback_7": "Christian Strenge, Startup Coach",
            "_trainer_1": "Über den Trainer",
            "_trainer_2": "Robert ist einer von 22 <b>zertifizierten LeSS-Trainern</b> weltweit und hat praktische Erfahrung sowohl mit LeSS <b>als auch</b> mit LeSS Huge. Als agiler Berater und Coach hat er in den letzten 20 Jahren mit über 30 Unternehmen zusammengearbeitet, darunter DAX-notierte Weltmarken wie Adidas, BMW, BP, Dr. Oetker, Henkel, Hilti, Hugo Boss, SAP, Volkswagen und ZF.",
            "_trainer_3": "Von 2015 bis 2016 leitete er <b>eine LeSS-Einführung</b> bei einem <a href='https://less.works/case-studies/sys.html' target='_blank'>Global Player in der Software Industry</a>, und skalierte dabei die Entwicklung von 3 auf 7 Teams und coachte das Entwicklungs- und das Managementteam beim führen einer skalierten agilen Organisation. Im Jahr 2018 trug er, bei <b>einer der weltweit größten LeSS Huge Einführungen</b> bei der BMW AG, zu signifikanten Verbesserungen in der Produktentwicklung und -auslieferung bei. In der Zusammenarbeit mit über 30 Teams und über 400 Mitarbeitern, führte er sie dazu, alle zwei Wochen Produktinkremente bestehend aus Hardware und Software zu liefern.",
            "_trainer_4": "Mehr erfahren",
            "_contact_1": "Anmeldung",
            "_contact_2": "Gewünschter Trainingstermin",
            "_contact_3": "Wählen Sie Ihren Termin aus!",
            "_contact_4": "Rechnungsempfänger",
            "_contact_5": "Bitte geben Sie die Rechnungsdaten so ein, wie Ihre Buchhaltung diese benötigt.",
            "_contact_6": "Rechnungsempfänger (Firma/Name) *",
            "_contact_7": "Rechnungsempfänger Zusatz",
            "_contact_8": "Telefonnummer",
            "_contact_9": "Straße und Hausnummer *",
            "_contact_10": "USt / VAT ID (wenn nicht in Deutschland)",
            "_contact_11": "Wie sind Sie auf uns aufmerksam geworden?",
            "_contact_12": "Daten der Teilnehmer",
            "_contact_13": "Die folgenden Daten werden nach dem aktiv und vollständig besuchten Training an die LeSS Company zum Zweck der Zertifizierung und Mitgliedschaft weitergegeben.",
            "_contact_14": "Teilnehmer 1: Vor- und Nachname *",
            "_contact_15": "Teilnehmer 1: E-Mail-Adresse *",
            "_contact_16": "ggf. weitere Teilnehmer (ein Name plus E-Mail-Adresse pro Zeile)",
            "_contact_17": "Datenschutzerklärung und Teilnahmebedingungen",
            "_contact_18": "Links zu unserer <a href='legal/'>Datenschutzerklärung und den Teilnahmebedingungen</a>.",
            "_contact_19": "Bestätigung *",
            "_contact_20": "Ich habe die Datenschutzerklärung und die Teilnahmebedingungen gelesen und erkläre mich mit diesen einverstanden.",
            "_contact_21": "Sonstige Bemerkungen (Verpflegungswünsche, Gutscheincodes, etc.)",
            "_contact_22": "Verbindlich Anmelden"
        }
    };

    // Function for swapping dictionaries
    set_lang = function (dictionary) {
        $("[data-translate]").html(function () {
            var key = $(this).data("translate");
            if (dictionary.hasOwnProperty(key)) {
                return dictionary[key];
            }
        });
    };

    // Swap languages when menu changes
    $(".lang").on("change", function () {
        var language = $(this).val().toLowerCase();
        if (dictionary.hasOwnProperty(language)) {
            set_lang(dictionary[language]);
        }
    });

    // Set initial language to de
    set_lang(dictionary.de);

});
