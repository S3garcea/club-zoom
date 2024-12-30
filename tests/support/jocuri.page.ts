import { test, expect, Page, Locator } from '@playwright/test';
import { addAbortListener } from 'events';

export default class JocuriPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     
    // SECTIUNI

    // BILIARD

    titlusectiunebiliard = () => this.page.getByText('BILIARD', { exact: true });
    sectiunebiliard = () => this.page.locator('.panel-group.kt-accordion').nth(0);
    
    biliard = () => this.page.locator('.panel-group.kt-accordion >> div').nth(0);
    biliardtitlu = () => this.page.getByText('Biliard', { exact: true });
    biliardminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(0); 
    biliardplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(0);

    bilele = () => this.page.locator('.panel-group.kt-accordion >> div').nth(4);
    bileletitlu = () => this.page.getByText('Bilele', { exact: true });
    bileleminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(1); 
    bileleplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(1);

    masabiliard = () => this.page.locator('.panel-group.kt-accordion >> div').nth(8);
    masabiliardtitlu = () => this.page.getByText('Masa de biliard', { exact: true });
    masabiliardminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(2); 
    masabiliardplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(2);

    tacurile = () => this.page.locator('.panel-group.kt-accordion >> div').nth(12);
    tacuriletitlu = () => this.page.getByText('Tacurile', { exact: true });
    tacurileminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(3); 
    tacurileplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(3);

    // BOWLING
    titlusectiunebowling = () => this.page.getByText('BOWLING', { exact: true });
    sectiunebowling = () => this.page.locator('.panel-group.kt-accordion').nth(1);
    
    bowling = () => this.page.locator('.panel-group.kt-accordion >> div').nth(16);
    bowlingtitlu = () => this.page.getByText('Bowling', { exact: true });
    bowlingminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(4); 
    bowlingplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(4);

    tipuribowling = () => this.page.locator('.panel-group.kt-accordion >> div').nth(20);
    tipuribowlingtitlu = () => this.page.getByText('Tipuri de bowling', { exact: true });
    tipuribowlingminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(5); 
    tipuribowlingplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(5);

    istoriebowling = () => this.page.locator('.panel-group.kt-accordion >> div').nth(24);
    istoriebowlingtitlu = () => this.page.getByText('Din istoria jocului de popice', { exact: true });
    istoriebowlingminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(6); 
    istoriebowlingplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(6);

    // FOOSBALL

    titlusectiunefoosball = () => this.page.getByText('FOOSBALL', { exact: true });
    sectiunefoosball = () => this.page.locator('.panel-group.kt-accordion').nth(2);
    
    foosball = () => this.page.locator('.panel-group.kt-accordion >> div').nth(28);
    foosballtitlu = () => this.page.getByText('Foosball', { exact: true });
    foosballminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(7); 
    foosballplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(7);

    // TENIS DE MASA

    titlusectiunetenismasa = () => this.page.getByText('TENIS DE MASA', { exact: true });
    sectiunetenismasa = () => this.page.locator('.panel-group.kt-accordion').nth(3);
    
    tenismasa = () => this.page.locator('.panel-group.kt-accordion >> div').nth(32);
    tenismasatitlu = () => this.page.getByText('Tenis de masa', { exact: true });
    tenismasaminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(8); 
    tenismasaplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(8);

    // DARTS

    titlusectiunedarts = () => this.page.getByText('DARTS', { exact: true });
    sectiunedarts = () => this.page.locator('.panel-group.kt-accordion').nth(4);
    
    darts = () => this.page.locator('.panel-group.kt-accordion >> div').nth(36);
    dartstitlu = () => this.page.getByText('Darts', { exact: true });
    dartsminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(9); 
    dartsplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(9);

    dartsregulament = () => this.page.locator('.panel-group.kt-accordion >> div').nth(40);
    dartsregulamenttitlu = () => this.page.getByText('Regulament', { exact: true });
    dartsregulamentminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(10); 
    dartsregulamentplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(10);

    dartsturnee = () => this.page.locator('.panel-group.kt-accordion >> div').nth(44);
    dartsturneetitlu = () => this.page.getByText('Cele mai populare turnee de darts', { exact: true });
    dartsturneeminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(11); 
    dartsturneeplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(11);

    // CONSOLA DE JOCURI

    titlusectiuneconsola = () => this.page.getByText('CONSOLA DE JOCURI', { exact: true });
    sectiuneconsola = () => this.page.locator('.panel-group.kt-accordion').nth(5);
    
    consola = () => this.page.locator('.panel-group.kt-accordion >> div').nth(48);
    consolatitlu = () => this.page.getByText('Consola de jocuri', { exact: true });
    consolaminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(12); 
    consolaplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(12);

    // AIR HOCKEY

    titlusectiuneairhockey = () => this.page.getByText('AIR HOCKEY', { exact: true });
    sectiuneairhockey = () => this.page.locator('.panel-group.kt-accordion').nth(0);
    
    airhockey = () => this.page.locator('.panel-group.kt-accordion >> div').nth(52);
    airhockeytitlu = () => this.page.getByText('Air hockey', { exact: true });
    airhockeyminus = () => this.page.locator('.icon-minus.kt-icon-minus.primary-color').nth(13); 
    airhockeyplus = () => this.page.locator('.icon-plus.kt-icon-plus').nth(13);

    ///
    text = () => this.page.locator('.panel-collapse.in >> div >> p').nth(0); 
    img = () => this.page.locator('.panel-collapse.in >> div >> figure >> img');
    ///

    public async goto()
    {
        await this.page.goto('https://www.club-zoom.ro/jocuri-activitati-din-club/');
    }
}