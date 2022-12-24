---
title: Hindi lang para sa mga may kapansanan ang accessibility
description: May misconception tayo na para lang sa persons with disability ang accessibility. Pero mahalaga na may pakialam tayong lahat tungkol dito.
author: teacherbuknoy
images:
  identifier: cover
  baseFolder: posts/bootstrap-2022/
seo_image:
  og: /assets/images/posts/bootstrap-2022/og.png
  twitter: /assets/images/posts/bootstrap-2022/twitter.png
tags: 
  - accessibility
---

Sa maraming projects, afterthought lang ang accessibility. Para sa maraming kompanya, para lang itong plugin na idadagdag sa website kapag tapos na ang design at development phase. Kaya nga nauso ang mga service na nag-o-offer ng accessibility overlays (na hindi naman effective para sa mga walang kapansanan at nagpapahirap din sa mga PWD). Iniisip ng marami na mga may kapansanan lang ang makikinabang sa isang accessible na website. Pero hindi naman iyon totoo.

## Ano ang accessibility?
Kapag ang isang bagay ay <dfn>accessible</dfn>, ibig sabihin, puwede itong gamitin ng lahat, kahit pa ng mga may kapansanan. Kung accessible ang isang website, puwede itong magamit nang madali ng mga walang sakit o injury, pati na ng mga bulag, mahina ang pandinig, bingi, at mga may motor impairment gaya ng panginginig ng kamay, 

## Lahat tayo ay “disabled”
Siguro wala kang kapansanan. Malinaw ang mata mo, kumpleto ang lahat ng parts ng katawan mo. Pero puwede kang maging disabled nang pansamantala paminsan-minsan. Halimbawa, “disabled” ka sa mga time na hindi ka makapanood nang maayos ng videos sa isang public place dahil maingay at wala kang earphones. “Disabled” ka rin kung kumakain ka habang nagko-computer kaya hindi mo magamit nang maayos ang mouse mo. “Disabled” ka ring matatawag kung sira ang touchpad ng laptop mo at wala kang ibang magamit kundi ang keyboard.

<aside class="callout callout--info callout--right">
  {{ 'info' | icon }}
  <p class="callout__body">Noong 2019, dininig ang kasong <a href="https://www.forbes.com/sites/peterslatin/2019/10/08/the-supreme-court-rules-in-favor-of-accessibility-for-the-blind/?sh=56275defc486" target="_blank" rel="noopener">Domino’s Pizza v. Robles</a> pagkatapos idemanda ng isang visually impaired ang Domino’s Pizza, isang pizza chain sa USA, dahil hindi accessible ang website nila.</p>
</aside>

Sa interview ni Jen Simmons sa A11y Rules Podcast, sinabi niya na ang disability ay isang “gradient” sa halip na isang yes-or-no na characteristic. Sabi niya, hindi tayo basta lang normal or disabled. Sa lahat ng oras, puwede tayong maging normal, medyo disabled, disabled para sa ilang gawain pero normal para sa iba, pansamantalang disabled, o permanenteng disabled. 

Halimbawa, hindi iba-iba ang labo ng mga mata natin. May iba na blurred lang pero nakakabasa pa naman, may iba na hindi nakaka-distinguish ng kulay, may iba na may naaaninag pang liwanag pero hindi na nila magamit ang paningin nila dahil sobrang labo na, o ang mga tinatawag na “legally blind”. Ganito rin ang kaso sa ilang mga injury. May mga injury na tumatagal nang ilang buwan o taon, at may mga injury na permanente nang nakakaapekto sa paggalaw natin.

<aside class="callout callout--warning callout--left">
  {{ "alert-triangle" | icon }}
  <p class="callout__body">Ayon sa Philippine Web Accessibility Group, <a href="https://www.pwag.org/resources/analysis-of-philippine-laws-pertaining-to-disability/can-we-be-sued-if-we-dont-make-our-web-site-accessible-written-by-jojo-esposa-jr/" target="_blank" rel="noopener">puwede kang makasuhan o mademanda kung hindi accessible ang website mo</a>.</p>
</aside>

Sa totoo lang, ang pagiging disabled ay isang limitasyon sa mga kayang gawin ng isang tao. Kaya kahit hindi ka disabled in the sense na wala kang sakit, injury, o kulang na part sa katawan, nagkakaroon ka pa rin ng limitasyon sa pagkilos paminsan-minsan. Kaya naman mahalaga para sa ating mga nasa software development industry na i-consider hindi lang ang mga persons with disability kundi pati na ang mga taong walang kapansanan na puwedeng magkaroon ng limitasyon paminsan-minsan.

## Huwag mag-assume
Kapag gumagawa tayo ng websites, madalas nag-a-assume tayo nang hindi natin namamalayan. Ina-assume natin na gagamitin ang site o application natin gamit ang dalawang kamay, gamit ang mouse o touchscreen, o na right-handed lahat ng users natin. Ina-assume din natin na maayos ang screen nila, malakas at malinaw ang speakers o earphones, kumpleto ang lahat ng keys ng keyboard nila, at iba pang katulad nito. Sa madaling sabi, ina-assume natin na kapareho natin ng kalagayan ang mga gagamit ng product natin.

Pero gaya ng sabi ni Jen Simmons sa interview ding nabanggit kanina, para maging accessible ang isang website, kailangan munang isipin ng design and developer team na hindi pare-pareho ang katawan ng tao. may mga taong kaliwete, malabo ang paningin, mahina ang pandinig, nanginginig ang kamay, nakatira sa maingay na environment, at iba pa.

## Hindi mahirap ang web accessibility
Hindi mahirap isama sa site development ang accessibility. Sa katunayan, kung responsive na ang website mo, nakagawa ka na ng isang step para maging mas accessible ang website mo.

Ilan sa mga puwede mong gawin para maging mas accessible ang website mo para sa lahat ay

- Siguruhing puwedeng ma-access ang website mo nang hindi gumagamit ng mouse. Subukang pindutin ang Tab key sa keyboard at tingnan kung makikita mo ang currently focused na component sa website mo. Kung mawala ang focus outline at any point, mahihirapan ang mga keyboard users na gamitin ang website mo.
- Siguruhing tama ang document outline. Sa HTML may mga specific na tag lang na puwedeng ilagay sa loob ng iba pang mga tag. Puwede mong gamitin ang [Can I Include?](https://caninclude.glitch.me/) para i-check kung puwede mo bang gamitin ang isang tag sa loob ng isa pang tag.
- Pag-aralan ang mga ARIA roles. Kung gumagamit ka ng mga interactive na component na gumagana gamit ang JavaScript, kailangan mong malaman kung ano at para saan ang mga ARIA role. Mga additional attribute ito sa HTML na nag-i-indicate ng purpose ng mga component. Mahalaga ito para sa mga screen reader na ginagamit ng mga taong hindi makakita nang maayos. Mas dapat mo itong pag-aralan kung madalas kang gumamit ng mga `div` element para sa mga component mo dahil walang inherent meaning ang mga `div`. Gamit ang ARIA roles, puwede kang maglagay ng hint sa users kung para saan o ano ang ginagawa ng mga component mo.
- Gumamit ng tamang HTML tags. Ilang taon na simula nang maging available sa lahat ng browser ang mga landmark elements gaya ng `article`, `section`, `nav`, `header`, `footer`, at `aside`. I-check na ito ang ginagamit mo kailanma’t posible para mabawasan ang `div` at `span` elements mo.
- Mag-consume ng mga resource tungkol sa accessibility. Sa mga website na gaya ng [Inclusive Components](https://inclusive-components.design/), [Smashing Magazine](https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/), at [CSS Tricks](https://css-tricks.com/tag/accessibility/), may mga tips at tutorials kung paano gagawing mas accessible ang mga website.
- Gamitin ang developer tools. May accessibility tools ang Google Chrome at Firefox. Malaking tulong ito para malaman kung saan puwedeng mahirapan ang mga user mo.    
- Gamitin ang [13 Days of Accessibility](http://a11ycalendar.kaseybon.com/). Isa itong website na nag-a-outline ng mga puwede mong i-check at ayusin sa website mo para maging accessible ito. Sa loob ng 13 days (or more kung hindi mo kaya ng 13 days), magkakaroon ng isang specific na focus bawat araw ng mga bagay na dapat i-check at ayusin.

## Conclusion
Lahat tayo ay nagiging disabled paminsan-minsan. Nagkakaroon tayong lahat ng pansamantala o permanenteng limitasyon sa mga kaya nating gawin, kaya naman maa-appreciate nating lahat kung accessible ang mga website na ginagamit natin. Pero since developers tayo, trabaho din nating i-ensure na accessible ang mga website natin.