import { test, expect } from '@playwright/test'
import JocuriPage from './support/jocuri.page.ts'
import { assert } from 'console'
import { SourceTextModule } from 'vm'

test('Check Biliard Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiunebiliard().isVisible()
    expect(await jocuriPage.titlusectiunebiliard()).toHaveText('BILIARD')
    console.log(await jocuriPage.titlusectiunebiliard().textContent())

})

test('Check Biliard', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await expect(jocuriPage.biliardtitlu()).toBeVisible()
    await expect(jocuriPage.biliardtitlu()).toHaveText('Biliard')
    await expect(jocuriPage.biliardminus()).toBeVisible()
    await expect(jocuriPage.biliardplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toHaveText('Biliardul este o familie de jocuri ce sunt jucate pe o masa (de obicei verde si cu sase gauri numite buzunarele mesei), cu un bat, numit tac, folsit pentru a lovi bilele, ca acestea sa se miste pe suprafata mesei. In anumite contexte, cuvantul „biliard” se refera cu siguranta la unul din jocuri, biliardul englezesc sau biliardul carambole. In Romania termenul de biliard este bine definit si nu are mai multe variante. El este cunoscut ca fiind un joc de amatori ce se joaca prin baruri. La noi biliardul nu are aceasi valoare pe care o are in tarile in care acesta s-a dezvoltat. Ce insemana pool ? – Cuvantul englezesc pool (balta, joc de noroc, a uni), folosit deseori pentru jocurile de biliard se refera in general la buzunarul in care trebuie introdusa bila, cum ar fi 8-ball, 9-ball, or Straight pool. Cuvantul pool provine de la poolrooms (camerele de pariuri) sportive, unde oameni pariau la cursele de cai. Erau numite poolroms atata timp cat banii trebuiau inmultiti, adunati mai multi („pooled”) pentru a creste sansele de castig. In aceste camere de pariuri (pools) se gaseau deseori si mese de biliard, iar prin asociere pool a devenit sinonim cu biliard. Termenul englezesc pool si buzunarele de la masa de biliard (pocket billiards) sunt sinonime.')

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.biliardtitlu()).toBeVisible()
    await expect(jocuriPage.biliardminus()).toBeHidden()
    await expect(jocuriPage.biliardplus()).toBeVisible()
    await expect(jocuriPage.img()).toBeHidden()
    await expect(jocuriPage.text()).toBeHidden()

    await jocuriPage.biliard().click()

    await expect(jocuriPage.biliardtitlu()).toBeVisible()
    await expect(jocuriPage.biliardminus()).toBeVisible()
    await expect(jocuriPage.biliardplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()

    await expect(jocuriPage.bileletitlu()).toBeVisible()
    await expect(jocuriPage.bileleminus()).toBeHidden()
    await expect(jocuriPage.bileleplus()).toBeVisible()

    await jocuriPage.bilele().click()

    await expect(jocuriPage.biliardminus()).toBeHidden()
    await expect(jocuriPage.biliardplus()).toBeVisible()

    await expect(jocuriPage.bileletitlu()).toBeVisible()
    await expect(jocuriPage.bileletitlu()).toHaveText('Bilele')
    await expect(jocuriPage.bileleminus()).toBeVisible()
    await expect(jocuriPage.bileleplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toHaveText('Numarul, tipul, diametrul, culoarea si modeulul bilelor de biliard difera dupa tipul de joc de biliard care este jucat. In 8-balls, straight pool, si alte jocuri inrudite cu aceste doua, sunt implicate 16 bile: cinsprezece dintre ele fiind colorate si una singura alba complet. Bilele cu numere inscriptionate de la 1 la 7 se numesc pline, fiind colorate in totalitate cu galben, albastru, rosu, mov, portocaliu, verde si rosu inchis sau maro. Bilele 9-15 sunt albe, fiecare avand o singura parte cu o banda colorata care se potriveste cu culorile bilelor colorate in totalitate; bila nr. 9 are o dunga galbena, bila nr. 10 are o dunga albastra, s.a. Bila nr. 8 este neagra in totalitate. In jocule 9-ball, sunt folosite doar bilele cu numere de la 1 la 9. Bilele regulamentare au 5,7 centimetri in diametru, si o greutate cuprinsa intre 156 si 170 de grame. Alte proprietati specifice cum ar fi: duritatea, coeficientul de frecare, elasticitatea sunt foarte importante. Unele bile folosite in jocurile televizate sunt colorate diferit pentru a putea fi distinse pe imaginile ecranului de la televizor. Bila nr. 4 folosita in astfel de jocuri este colorata in roz in loc de mov, iar bila nr. 7 este colorata intr-o nuanta de maro mai deschisa decat de obicei. Dungile de pe bilele nr 12 si 15 sunt colorate in acelasi mod. Mai tarziu, pentru a da un efect de recunoastere mai usor bilele folosite in astfel de jocuri au fost punctate. In tipul de joc de biliard numit snooker, sunt prezente 15 bile rosii, sase bile colorate (galben, verde, maro, albastru, roz, si negru), si o bila alba principala. De obicei bilele nu sunt numerotate. Aceste bile au diametrul normal de 5,2 centimetri. In jocurile cum sunt carom, straight billiards, biliardul englezesc, balkline, si three cushion, pe masa se afla doua mingi albe si una rosie. Una din bile este alba in totalitae iar cealata este ori galbena, ori alba si cu un punct rosu. Aceste tipuri de bile au in general 7 centimetri in diametru. Bilele de biliard au fost facute initial din fildes importat din Africa. La inceputul secolului XX, in parte datoria protectiei mediului, industria biliardului a realizat ca sursele de fildes sunt finite. Acest lucru a dat un impuls inventatorilor sa creeze o alternativa. Astfel, John Wesley Hyatt a creat primul plastic industrial, Nitratul de Celuloza (Cellulose Nitrate), sub numele comercial de Celuloid (Celluloid).')

    await expect(jocuriPage.masabiliardtitlu()).toBeVisible()
    await expect(jocuriPage.masabiliardminus()).toBeHidden()
    await expect(jocuriPage.masabiliardplus()).toBeVisible()

    await jocuriPage.masabiliard().click()

    await expect(jocuriPage.bileleminus()).toBeHidden()
    await expect(jocuriPage.bileleplus()).toBeVisible()

    await expect(jocuriPage.masabiliardtitlu()).toBeVisible()
    await expect(jocuriPage.masabiliardtitlu()).toHaveText('Masa de biliard')
    await expect(jocuriPage.masabiliardminus()).toBeVisible()
    await expect(jocuriPage.masabiliardplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toHaveText('Exista multe marimi si stiluri de mese de biliard. De obicei, mesele sunt de doua ori mai lungi decat latimea. Majoritatea meselor au lungimea de 2,1, 2,4 sau 2,7 metri (7, 8 sau 9 picioare). Snooker-ul si biliardul englezesc au lungimea meselor de 3,6 metri (12 picioare). Salile de biliard obisnuiesc sa aiba mese de 3,6 metri, iar barurile folosesc mese de 2,7 metri care de obicei sunt platite. Compromisul facut de cei care au o masa de biliard in propria locuinta este dat de spatiu, astfel alegandu-se doar mese de 2,4 metri. Mesele de calitate sunt de obicei de 2,7 metri si sunt facut dintr-o singura bucata, respectiv o lespede de granit sau o placa grea de ardezie, prevenind astfel distrugerea si modificarile care pot surveni in urma umezelii. Mesele de biliard au 6 buzunare, trei pe fiecare parte. Mesele sunt acoperite cu panza speciala de biliard (un fel de pasla). Dunga mesei, care primeste dese lovituri este acoperita cu o panza mai putin alunecoasa. Panza de calitate este mai alunecoasa. Imbracamintea traditionala a meselor de snooker prezinta un fel de puf iar bilele se comporta diferit cand se izbesc de acest puf. Imbracamintea mesei de biliard este de obicei verde, reflectand originile.')

    await expect(jocuriPage.tacuriletitlu()).toBeVisible()
    await expect(jocuriPage.tacurileminus()).toBeHidden()
    await expect(jocuriPage.tacurileplus()).toBeVisible()

    await jocuriPage.tacurile().click()

    await expect(jocuriPage.bileleminus()).toBeHidden()
    await expect(jocuriPage.bileleplus()).toBeVisible()

    await expect(jocuriPage.tacuriletitlu()).toBeVisible()
    await expect(jocuriPage.tacuriletitlu()).toHaveText('Tacurile')
    await expect(jocuriPage.tacurileminus()).toBeVisible()
    await expect(jocuriPage.tacurileplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toHaveText('Biliardul este jucat cu un bat cunoscut si ca tac. Un tac este ori un bat care este mai subtire la un capat si care se ingroasa treptat spre maner ori un bat care este despartit la mijloc de un filament de metal sau „phenolic resin”. Capatul (manerul) tacului este partea care are circumferinta mai mare. Partea mai subtire a tacului se numeste „shaft”. Tacurile de calitate sunt in general cele facute din doua parti si folosind lemn destul de tare, de obicei artar pentru cele de biliard si frasin pentru cele de „snooker”. Toate tacurile sunt subtiate de la maner catre varf. Varful de piele si creta sunt folosite la imprimarea efectului (english) bilei albe. Tacurile ieftine sunt in general dintr-o singura bucata si sunt construite din aluminiu sau lemn, iar varfurile sunt de calitate inferioara. Un tac de calitate poate fi scump si este facut uneori din lemn exotic si alte materiale scumpe fiind decorat cu diverse modele. In general jucatorii cu experienta folosesc mai multe tacuri pe parcursul unui joc, acestea incluzand un tac pentru spargere si un tac mai scurt si mai usor cu varf special pentru loviturile sarite.')

})

test('Check Bowling Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiunebowling().isVisible()
    expect(await jocuriPage.titlusectiunebowling()).toHaveText('BOWLING')
    console.log(await jocuriPage.titlusectiunebowling().textContent())

})

test('Check Bowling', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.bowlingtitlu()).toBeVisible()
    await expect(jocuriPage.bowlingtitlu()).toHaveText('Bowling')
    await expect(jocuriPage.bowlingminus()).toBeHidden()
    await expect(jocuriPage.bowlingplus()).toBeVisible()

    await jocuriPage.bowling().click()

    await expect(jocuriPage.bowlingtitlu()).toBeVisible()
    await expect(jocuriPage.bowlingminus()).toBeVisible()
    await expect(jocuriPage.bowlingplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Bowlingul este un sport in care jucatorii incearca sa obtina puncte rostogolind o bila pe o suprafata plana (de obicei de lemn sau sintetica), fie intr-un numar de jaloane, fie in alte bile-tinta. Exista mai multe varietati de bowling, unul dintre cel mai recente si populare (mai ales in Statele Unite ale Americii) fiind cel cu 10 jaloane. Dovezi ale unor jocuri asemanatoare dateaza inca din anul 300 d.Hr. in Germania, Finlanda si Yemen. Primele reguli standardizate au fost elaborate la 9 septembrie 1985 in New York.')


    await jocuriPage.tipuribowling().click()

    await expect(jocuriPage.bowlingminus()).toBeHidden()
    await expect(jocuriPage.bowlingplus()).toBeVisible()

    await expect(jocuriPage.tipuribowlingtitlu()).toBeVisible()
    await expect(jocuriPage.tipuribowlingtitlu()).toHaveText('Tipuri de bowling')
    await expect(jocuriPage.tipuribowlingminus()).toBeVisible()
    await expect(jocuriPage.tipuribowlingplus()).toBeHidden()
    // await expect(jocuriPage.text()).toBeVisible()

    await jocuriPage.istoriebowling().click()

    await expect(jocuriPage.tipuribowlingminus()).toBeHidden()
    await expect(jocuriPage.tipuribowlingplus()).toBeVisible()

    await expect(jocuriPage.istoriebowlingtitlu()).toBeVisible()
    await expect(jocuriPage.istoriebowlingtitlu()).toHaveText('Din istoria jocului de popice')
    await expect(jocuriPage.istoriebowlingminus()).toBeVisible()
    await expect(jocuriPage.istoriebowlingplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toHaveText('Originea acestui joc, bazat pe aruncarea unei bile de lemn tare la o tinta fixa, este straveche. Initial, aruncarea se efectua cu pietre sau cranii de animale pentru a lovi 3-7-9 oase sau bete fixate vertical. Primele atestari le ofera cercetarile arheologice, indeosebi cele efectuate in spatiul Egiptului antic, care au scos la iveala din necropole, datand din anii 5200 i. Hr., obiecte asemanatoare cu bilele de popice. In peninsula italica se cunoaste ca Temocrates a introdus in anii 500 d. Hr. o varianta a jocului de popice, numita boccia, care este identica cu cea a zilelor noastre. Acest joc avea o larga raspandire in Franta, Elvetia, Monaco si Anglia. In Evul Mediu apar ilustratii privind practicarea acestui joc. Primul document scris care confirma ca popicele reprezinta un joc de distractie dateaza din anii 1200. Regulile erau putine, insuficient de riguroase, jocul oferind conditii si motive pentru practica pariurilor, care ii va insoti intreaga evolutie. Sunt documente care confirma ca marile personalitati ale Evului Mediu cunosteau si practicau jocul popicelor. Astfel, Martin Luther si prietenii sai atribuiau acestui joc o valoare de relaxare, de divertisment. Henric al VIII-lea a ridicat la Withental numeroase popicarii pentru distractia curtenilor, iar Sir Francis Drake era de parere ca jocul ridica moralul ostasilor sai. Odata cu trecerea Atlanticului de catre primii olandezi, jocul respectiv va fi practicat si in noul Amsterdam (New York City). Raspandirea lui in lume, insotita de scandalurile provocate de pariurile tot mai mari, a determinat autoritatile sa impuna masuri de stavilire a exceselor si apoi chiar sa le interzica. Dar ele nu vor disparea, chiar daca devin prohibite. Lumea moderna le va prelua si le va incadra in regulamente revizuite. Astfel, in 1870, numarul popicelor s-a stabilit la 10, jocul capatand denumirea de bowling, care cunoaste o noua etapa de raspandire in lume. In aceeasi perioada apar primele institutii nationale, menite sa organizeze concursurile, sa stabileasca directiile si tendintele de dezvoltare ale acestui joc. Asa se explica infiintarea Federatiei Americane de Bowling in 1875, care va organiza in 1901 primul campionat national. La sfarsitul sec. al XIX-lea, jocul este cunoscut in Asia, Australia, in continentul american si in majoritatea statelor europene. Ca o consecinta fireasca a aparut, in aceste conditii de universalizare, Federatia Internationala de Popice in anul 1926, la care s-au afiliat in timp peste 94 de tari, jocul respectiv fiind practicat in 4 variante: Asfalt, Bowling, Bohle si Sehere, in cele 5 continente. Nu se cunosc momentul aparitiei si evolutia jocului de popice practicat in spatiul romanesc. Se presupune ca el a fost introdus in sec. al XVII-lea in Banat, unde se juca in pietele publice, targuri, pe langa hanuri sau chiar in incinta manastirilor sau bisericilor. Dar este indubitabil faptul ca popicele se raspandesc in Transilvania, Oltenia, Muntenia, Bucovina si nordul Moldovei, catre sfarsitul sec. Al XVIII-lea si inceputul sec. al XIX-lea. Un document datat din 1817 arata ca domnitorul fanariot Ioan Voda Caragea, prin condica de legi, interzice desfasurarea jocului in targuri din cauza scandalurilor iscate din pricina pariurilor. O astfel de prevedere s-a extins si in Moldova in anii urmatori, din dispozitia domnitorului Calimachi, fiind abrogate tarziu, in 1866, de catre ministrul Costache Boerescu, din guvernul domnitorului Alexandru Ioan Cuza. Evolutia jocului de popice pe plan international a influentat dezvoltarea lui si in tara noastra, fapt care a condus la infiintarea Federatiei Romane de Popice in 5 aprilie 1931. Aparitia si locul de functionare la Cluj a acestei federatii au fost determinate de nivelul de dezvoltare a jocului, atat de practicat la Cluj, si de initiativa celor 16 asociatii sau societati de popice existente. In anul urmator (1932), Uniunea Federatiilor Sportive din Romania (UFSR) recunoaste FR de Popice, care in 1934 se va afilia la Federatia Internationala de Popice. Ca efect imediat s-au facut precizari in regulamentul de concurs, care isi extinde aria de raspandire pe plan local.')

})

test('Check Foosball Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiunefoosball().isVisible()
    expect(await jocuriPage.titlusectiunefoosball()).toHaveText('FOOSBALL')
    console.log(await jocuriPage.titlusectiunefoosball().textContent())

})

test('Check Foosball', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.foosballtitlu()).toBeVisible()
    await expect(jocuriPage.foosballtitlu()).toHaveText('Foosball')
    await expect(jocuriPage.foosballminus()).toBeHidden()
    await expect(jocuriPage.foosballplus()).toBeVisible()

    await jocuriPage.foosball().click()

    await expect(jocuriPage.foosballtitlu()).toBeVisible()
    await expect(jocuriPage.foosballminus()).toBeVisible()
    await expect(jocuriPage.foosballplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Foosball (fusbal) sau fotbal de masa este un joc bazat pe fotbal. Isi are originea in Europa anilor 1880-1890. Practic, Foosball este o tabla prevazuta cu 8 tije dispuse transversal ce se continua in afara pentru a putea fi manipulate; cate 4 pentru fiecare jucator, dispuse intercalat. Se jongleaza manerele ce definesc capetele tijelor pentru a se misca o minge in interiorul tabletei (terenul in miniatura de fotbal). Exista cate o poarta de fiecare parte a „echipelor” si un loc pentru a servi pe fiecare parte, in mijloc. Fiecare jucator / echipa foloseste manerele pentru a muta jucatorii dispusi fix de-a lungul fiecarei tije (colorati in culori diferite pentru a putea fi distinse echipele). In cazul jocului simplu, cei doi jucatori, de fiecare parte, jongleaza manerele, respectiv jucatorii din teren, miscandu-le inainte si inapoi si deplasandu-se de la o tija la alta (la un moment dat mainile patand acoperi doar doua tije din cele 4 disponibile pentru aria de joc cu jucatorii sintetici din tableta). Tabelele sunt foarte ingenios construit pentru a oferi diferite tipuri de tije cu spatiere diferita intre oameni. Jocul este unul de noroc, de indemanare, rapid si amuzant, toata lumea fiind bine dispusa. Nu fiti surprinsi daca doza de entuziasm genereaza o transpiratie fizico-emotionala. Pentru protectie, de regula, suprafata de joc este acoperita cu un strat transparent din sticla sau plastic. Castigatorul este desemnat in functie de numarul de goluri in unitatea de timp stabilita, pentru jocul in 2 sau pe echipe.')

})

test('Check Tenis de masa Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiunetenismasa().isVisible()
    expect(await jocuriPage.titlusectiunetenismasa()).toHaveText('TENIS DE MASA')
    console.log(await jocuriPage.titlusectiunetenismasa().textContent())

})

test('Check Tenis de masa', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.tenismasatitlu()).toBeVisible()
    await expect(jocuriPage.tenismasatitlu()).toHaveText('Tenis de masa')
    await expect(jocuriPage.tenismasaminus()).toBeHidden()
    await expect(jocuriPage.tenismasaplus()).toBeVisible()

    await jocuriPage.tenismasa().click()

    await expect(jocuriPage.tenismasatitlu()).toBeVisible()
    await expect(jocuriPage.tenismasaminus()).toBeVisible()
    await expect(jocuriPage.tenismasaplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Tenisul de masa este un sport in care doi sau patru jucatori lovesc o minge usoara de la unii la altii cu ajutorul unor palete. Jocul are loc pe o masa separata in doua de un fileu. Un jucator trebuie sa lase sa cada spre el mingea jucata o singura data pe partea sa de masa si trebuie sa o trimita inapoi pe partea de masa a adversarului. Jocul se desfasoara cu viteza mare si necesita reflexe rapide. Un jucator bun poate imprima efect mingii, ceea ce face ca ricoseul din masa sau paleta sa puna probleme adversarului, mingea luand o traiectorie imprevizibila. Tenisul de masa este foarte popular, in special in Asia de Est. Este printre cele mai populare sporturi din lume ca numar de jucatori, si unul din cele mai noi sporturi majore.')

})

test('Check Darts Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiunedarts().isVisible()
    expect(await jocuriPage.titlusectiunedarts()).toHaveText('DARTS')
    console.log(await jocuriPage.titlusectiunedarts().textContent())

})

test('Check Darts', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.dartstitlu()).toBeVisible()
    await expect(jocuriPage.dartstitlu()).toHaveText('Darts')
    await expect(jocuriPage.dartsminus()).toBeHidden()
    await expect(jocuriPage.dartsplus()).toBeVisible()

    await jocuriPage.darts().click()

    await expect(jocuriPage.dartstitlu()).toBeVisible()
    await expect(jocuriPage.dartsminus()).toBeVisible()
    await expect(jocuriPage.dartsplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Darts este un joc in care niste proiectile mici sunt aruncate pe o tinta fixata de un perete. Cu toate ca in trecut existau mai multe variante de joc, astazi, prin acest termen se are in vedere un joc cu reguli stricte. Jocul a aparut cu secole in urma, in Insulele Britanice. Pana in prezent, darts este un joc traditional care este jucat in pub-uri din Marea Britanie, Olanda, Scandinavia, Statele Unite ale Americii si altele. In plus, darts se joaca si la nivel profesionist. Tintele pentru darts sunt de obicei, facute din sisal (fibre presate de Agave). Ideea de a folosi tinta de sisal in productie apartine Companiei Nodor, iar in 1932 a aparut prima tinta de sisal. Obiectivele de productie sunt concentrate in Kenya si China din cauza apropierii de sursa de materie prima. Tinta este impartita in sectoare care au fost atribuite de la 1 la 20.')

    await jocuriPage.dartsregulament().click()

    await expect(jocuriPage.dartsminus()).toBeHidden()
    await expect(jocuriPage.dartsplus()).toBeVisible()

    await expect(jocuriPage.dartsregulamenttitlu()).toBeVisible()
    await expect(jocuriPage.dartsregulamenttitlu()).toHaveText('Regulament')
    await expect(jocuriPage.dartsregulamentminus()).toBeVisible()
    await expect(jocuriPage.dartsregulamentplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Tinta standard este impartita in douazeci de sectiuni numerotate, de obicei alb si negru, fiecare atribuita cu un numar de la 1 la 20. In centru se afla „Marul” (in engleza Bullseye), care este estimat la 50 de puncte, inconjurat de un inel verde in jurul valorii de 25 puncte. Inelul exterior ingust presupune o dublare a numarului de sectoare, inelul interior ingust inseamna triplul numarului de sectoare. Si inelele interioare si cele exterioare inguste sunt, in mod traditional, colorate in rosu si verde. Rezultatul maxim posibil, de 3 aruncari, este de 180 de puncte (in cazul in care jucatorul arunca toate darts-urile in sectorul inelul interior ingust). Nota: Jucatorii standard folosesc darts-uri cu greutate ce nu depaseste 50 de grame. In cazul jocului amator (neclasificat) se permite utilizarea de sulite ce pot cantari si mai mult de 50 de grame, dar aceasta exceptie se face pentru jocuri din afara campionatelor. Greutatea medie a darts-ului variaza intre 19 si 25 de grame. Pana in prezent, producatorii celor mai renumite echipamente pentru darts sunt: Unicorn, Grape, Nodor, Winmau. Jucatori de uz profesional folosesc o sageata din tungsten si din nichel, in timp ce jucatorilor novice li se potrivesc darts-urile din alama.')

    await jocuriPage.dartsturnee().click()

    await expect(jocuriPage.dartsregulamentminus()).toBeHidden()
    await expect(jocuriPage.dartsregulamentplus()).toBeVisible()

    await expect(jocuriPage.dartsturneetitlu()).toBeVisible()
    await expect(jocuriPage.dartsturneetitlu()).toHaveText('Cele mai populare turnee de darts')
    await expect(jocuriPage.dartsturneeminus()).toBeVisible()
    await expect(jocuriPage.dartsturneeplus()).toBeHidden()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Dintre cele mai cunoscute turnee de darts, amintim:')

})

test('Check Consola Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiuneconsola().isVisible()
    expect(await jocuriPage.titlusectiuneconsola()).toHaveText('CONSOLA DE JOCURI')
    console.log(await jocuriPage.titlusectiuneconsola().textContent())

})

test('Check Consola', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.consolatitlu()).toBeVisible()
    await expect(jocuriPage.consolatitlu()).toHaveText('Consola de jocuri')
    await expect(jocuriPage.consolaminus()).toBeHidden()
    await expect(jocuriPage.consolaplus()).toBeVisible()

    await jocuriPage.consola().click()

    await expect(jocuriPage.consolatitlu()).toBeVisible()
    await expect(jocuriPage.consolaminus()).toBeVisible()
    await expect(jocuriPage.consolaplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('O consola de jocuri este un sistem dedicat jocurilor video, ce reprezinta de fapt un calculator interactiv pentru entertainment. Termenul este folosit pentru a face diferenta intre un sistem dedicat exclusiv jocurilor, un computer personal (care are o multime de alte functii implementate) sau sistemele pentru jocuri arcade care sunt folosite in scopuri comerciale de catre firme care le cumpara iar mai apoi percep taxa pentru ca cineva sa se poata juca. Datorita faptului ca ii lipseste un ecran propriu care afiseze imagini, este de obicei folosit un televizor sau un monitor de computer. Termenul „video” (consola de jocuri video) se referea de obicei la un dispozitiv de afisare raster,dar acum odata cu folosirea intensiva a formularii: „joc video”, expresia se poate referi la toate dispozitivele de afisare. Termenul „consola” este intalnit in manualele de utilizare a majoritatii vechilor sisteme de jocuri video. Cu toate acestea, folosirea lui nu este sinonima cu „sistem de jocuri video”, ci se refera la o parte specifica a sistemului. Atari 2600, NES si alte console din acele timpuri se numeau „sisteme de jocuri video”. Prima companie ce a folosit expresia „consola” ca referire la un sistem de jocuri video a fost Fairchild cu Video Entertainment System (VES) in 1976.')

})

test('Check Air Hockey Titlu', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()
    await jocuriPage.titlusectiuneairhockey().isVisible()
    expect(await jocuriPage.titlusectiuneairhockey()).toHaveText('AIR HOCKEY')
    console.log(await jocuriPage.titlusectiuneairhockey().textContent())

})

test('Check Air Hockey', async ({ page }) => {
    const jocuriPage = new JocuriPage(page)

    await jocuriPage.goto()

    await jocuriPage.biliardminus().click()

    await expect(jocuriPage.airhockeytitlu()).toBeVisible()
    await expect(jocuriPage.airhockeytitlu()).toHaveText('Air hockey')
    await expect(jocuriPage.airhockeyminus()).toBeHidden()
    await expect(jocuriPage.airhockeyplus()).toBeVisible()

    await jocuriPage.airhockey().click()

    await expect(jocuriPage.airhockeytitlu()).toBeVisible()
    await expect(jocuriPage.airhockeyminus()).toBeVisible()
    await expect(jocuriPage.airhockeyplus()).toBeHidden()
    await expect(jocuriPage.img()).toBeVisible()
    await expect(jocuriPage.text()).toBeVisible()
    await expect(jocuriPage.text()).toContainText('Air hockey  este un joc intre 2 jucatori. Scopul acestui joc este inscrierea de puncte in poarta adversarului. Loviturile pot fi „drifturi”.')

})