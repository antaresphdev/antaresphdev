---
title: "&lt;i>, &lt;em>, &lt;strong> at &lt;b>—Ano ang pagkakaiba?"
description: Madalas maging source ng confusion ang apat na elements na ito. Saan at kailan ba sila dapat ginagamit?
author: teacherbuknoy
cover:
  folder: i-em-strong-b
  filename: cover.png
  header: header.png
  sizes: [300, 600, 900, 1200]
  formats: ['png', 'webp', 'avif']
seo_image:
  og: /assets/images/posts/bootstrap-2022/og.png
  twitter: /assets/images/posts/bootstrap-2022/twitter.png
tags: 
  - html
eleventyExcludeFromCollections: false
disableToc: false
permalink: /articles/i-em-strong-b/
---

Sa mga word document, kapag kailangang i-emphasize ang isang salita o pangungusap, gumagamit lang tayo ng italics at bold font weight. At ideally, ganito lang din kadali sa mga web pages. Pero dahil naka-focus ang HTML sa <i lang="en">semantics</i> ng mga web page, kailangan nating maging mas specific. Kung sa bagay, hindi lang naman kasi mga tao ang uma-access ng mga website natin. At hindi rin lahat ng users natin ay visual gaya ng mga gumagamit ng assistive technologies. <sup id="fn-2">[<a href="#footnote-2">Ano ito?</a>]</sup>

<aside class="callout callout--info callout--right" id="footnote-2" aria-labelledby="footnote-2-headline">
  {{ 'alert-triangle' | icon }}
  <h4 class="sr-only" id="footnote-2-headline">Sidebar (article continues below)</h4>
  <p class="callout__body">Ang mga <dfn>assistive technology</dfn> ay mga hardware o software na ginagamit ng mga persons with disability (PWDs) para matulungan silang gumamit ng computers. Kasama rito ang mga screen readers na bumabasa ng laman ng screen para sa mga bulag at braille displays. <sup class="footnote--reference"><a href="#fn-2">Paragraph</a></sup></p>
</aside>

Sa HTML, marami tayong tags na ginagawang italic o bold ang mga text natin. Pero tandaan na naka-focus ang HTML sa meaning ng content, hindi sa styling o design. Ang `<i>`, `<em>`, `<strong>`, at `<b>` ang mga tags na kadalasang napagbabali-baligtad dahil ginagawa nilang italic o bold ang text. Pero kaya tayo madalas ma-confuse sa mga ito ay dahil hindi natin alam talaga kung para saan sila.

## Mga text na italicized

Kung may gusto tayong i-italicize o i-bold na text, kailangan muna nating isipin kung bakit natin gustong gawin iyon. Isang dahilan para dito ay emphasis. Sa HTML, may dalawa tayong nire-recognize na emphasis: ang <i lang="en">stress emphasis</i>, at ang <i lang="en">importance</i> at <i lang="en">urgency</i>.

Sa <dfn>stress emphasis</dfn>, ini-indicate natin sa bumabasa na kailangan niyang baguhin ang pagbigkas ng mga salita o phrases. Ibig sabihin, nasa pagbasa ang emphasis; dapat, kapag binabasa ang text, maririnig sa tono, bilis ng pagsasalita, at lakas ng boses na mahalaga ang isang part ng text. Para sa gaanitong type ng emphasis, ang ginagamit natin ay `<em>`.

Pansinin ang example na ito.

<div class="code-sample">

```html
<p>I wanted to see him. I didn't believe what they told me. He <em>cannot</em> be dead, and just like that?</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>I wanted to see him. I didn't believe what they told me. He <em>cannot</em> be dead, and just like that?</p>
  </div>
</div>

</div>

By default, italicized ang salitang <q>cannot</q> sa paragraph na ito gamit ang `<em>` tag. Pero hindi natin dapat gamitin ang `<em>` kung gusto lang nating gawing italicized ang text. Sa halimbawang audio na ito, pansinin kung paano bibigkasin ang salitang <q>cannot</q> para ipahiwatig sa nakikinig na nasa salitang ito ang emphasis. 

<audio src="/assets/images/posts/i-em-strong-b/eg-1.ogg" controls></audio>

Kaya hindi dapat gamitin ang `<em>` para lang gawing italics ang formatting ng text. Kapag ito ang ginawa natin, baka biglang mabago ang kahulugan ng nakasulat nang hindi natin sinasadya.

Para saan naman ang `<i>` element? Bago ang HTML5, ginagamit na talagang pang-italicize ang `<i>` element; wala itong ibang trabaho noon kundi gawing italicized ang text. Pero sa HTML5 na ginagamit natin ngayon, hindi na ito totoo.

Ginagamit na natin ngayon ang `<i>` element para sa mga bahagi ng text na iba ang characteristics kumpara sa iba pang content na nakapalibot dito. Kasama rito ang mga scientific names ng mga organism, pangalan ng chemicals, mga technical term o jargon, at mga terminolohiyang galing sa ibang wika.

<div class="code-sample">

```html
<p>Ang aso (<i>canis familiaris</i>) ang tinaguriang "<i lang="en">man's best friend</i>".</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Ang aso (<i>canis familiaris</i>) ang tinaguriang "<i lang="en">man's best friend</i>".</p>
  </div>
</div>

</div>

Sa example na ito, pansinin na ginamit natin ang `<i>` tag para sa <i>canis familiaris</i> na isang scientific name para sa aso. Ginamit din natin ang tag para sa phrase na <i lang="en">man's best friend</i> dahil galing ito sa English na iba sa Filipino na gamit ng paragraph. Pansinin na gumamit tayo ng `lang` attribute para i-indicate ang wika ng text, na sa kasong ito ay English (`en`).

Hindi tayo gagamit dito ng `<em>` dahil hindi naman natin gustong i-emphasize ang mga salitang ito. Gusto lang nating i-indicate na may kaibahan in some way ang mga text na ito kumpara sa iba pang bahagi ng paragraph o content.

Puwede ring gamitin ang `<i>` para sa creative writing. Halimbawa, puwedeng gamitin ang `<i>` tag kapag kinakausap ng isang tauhan sa kuwento ang sarili niya sa isip niya.

<div class="code-sample">

```html
<p>Kinabahan si Marina nang mapagtanto niya ang bigat ng kaniyang sinabi. <i>Na-offend kaya siya sa sinabi ko? Paano ko kaya siya haharapin kapag nagkit na kami bukas?</i></p>

<p>Alam niyang kailangan niyang maging matatag sa paparating na mga araw.</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Kinabahan si Marina nang mapagtanto niya ang bigat ng kaniyang sinabi. <i>Na-offend kaya siya sa sinabi ko? Paano ko kaya siya haharapin kapag nagkit na kami bukas?</i></p>
    <p>Alam niyang kailangan niyang maging matatag sa paparating na mga araw.</p>
  </div>
</div>

</div>

Isa pang kaso kung saan puwedeng gamitin ang `<i>` ay para mag-indicate ng sarcasm. Ang <dfn>sarcasm</dfn> ay isang statement na kabaligtaran ang kahulugan sa aktuwal na sinabi para magparating ng inis, pang-iinsulto, o kawalan ng paniniwala.

<div class="code-sample">

```html
<p>Sa wakas, dumating din si Hannah pagpatak ng alas-siete ng gabi.</p>

<p>"Wow, <i>ang aga mo</i>," sabi ni Kenneth. "Alas-singko ang usapan natin 'di ba?"</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Sa wakas, dumating din si Hannah pagpatak ng alas-siete ng gabi.</p>
    <p>"Wow, <i>ang aga mo</i>," sabi ni Kenneth. "Alas-singko ang usapan natin 'di ba?"</p>
  </div>
</div>

</div>

Parehas na nire-render ng browser ang `<em>` at `<i>` bilang italicized text by default, pero hindi dapat gamitin ang mga ito para lang sa italics. Sa mga kaso kung saan kailangan natin ng italics para lang sa styling at aesthetics, o kung hindi naman angkop ang `<em>` at `<i>`, puwede tayong gumawa ng CSS class at ikabit ito sa text na gusto nating i-italicize gamit ang `<span>` o `<div>`.

<div class="code-sample">

```html
<p>Ito ay isang paragraph. Naglalaman ito ng isang <span class="italic">generic na text</span>.</p>
```

```css
.italic {
  font-style: italic;
}
```


<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Ito ay isang paragraph. Naglalaman ito ng isang <span style="font-style: italic;">generic na text</span>.</p>
  </div>
</div>

</div>

## Bold text

May at least dalawang tags sa HTML na ginagawang bold ang text: ang `<strong>` at `<b>`. Kagaya ng `<em>` at `<i>`, hindi dapat gamitin ang dalawang ito dahil lang nagiging bold ang text nila. Ginagamit sila para sa meaning na ini-indicate nila para sa mga browser.

Ginagamit ang `<strong>` para i-indicate na mahalaga ang isang part ng text. Hindi gaya ng `<em>`, hindi kailangang magbago ang pagbigkas o pagbasa sa text na nasa `<strong>` tag dahil ini-indicate lang nito na mahalaga, seryoso, o urgent ang text. Pansinin ang halimbawang ito.

<div class="code-sample">

```html
<p>Sa ilang mga shelter, pinapayagang makipaglaro ang mga tao sa mga hayop. Pero dapat tandaan ng mga bumibisita na <strong>hindi puwedeng pakainin ang mga hayop</strong>. Tanging mga bantay at staff lang ang puwedeng magpakain sa kanila.</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Sa ilang mga shelter, pinapayagang makipaglaro ang mga tao sa mga hayop. Pero dapat tandaan ng mga bumibisita na <strong>hindi puwedeng pakainin ang mga hayop</strong>. Tanging mga bantay at staff lang ang puwedeng magpakain sa kanila.</p>
  </div>
</div>

</div>

Sa paragraph na ito, nilagay natin sa `<strong>` ang babala na huwag pakakainin ang mga hayop sa zoo dahil mahalagang malaman ito ng mga mambabasa. Sa ilang kaso, puwedeng ito pa nga ang gusto nating una nilang makita, kaya ito naka-bold by default.

Heto pa ang isang use case para sa `<strong>`. Sa example na ito, nakapaloob sa `<strong>` tag ang salitang "Babala" dahil mahalaga na mapansin ito.

<div class="code-sample">

```html
<p class="callout__body"><strong>Babala!</strong> Ayon sa Philippine Web Accessibility Group, <a href="...">puwede kang idemanda kung hindi accessible ang website mo</a>.</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <aside class="callout callout--warning">
      <p class="callout__body"><strong>Babala!</strong> Ayon sa Philippine Web Accessibility Group, <a href="https://www.pwag.org/resources/analysis-of-philippine-laws-pertaining-to-disability/can-we-be-sued-if-we-dont-make-our-web-site-accessible-written-by-jojo-esposa-jr/">puwede kang idemanda kung hindi accessible ang website mo</a>.</p>
    </aside>
  </div>
</div>

</div>

Kumusta naman ang `<b>`? Bago ang HTML5, talagang para lang sa pagbo-bold ng text ginagamit ang `<b>`. Pero sa HTML5, nagkaroon na ng bagong gamit ang `<b>`. Ayon sa HTML specification:

<figure class="full-bleed quotation">
  <blockquote lang="en">
    <p>The <code>b</code> element represents a span of text to which attention is being drawn… without conveying any extra importance and with no implication of an alternate voice or mood.</p>
  </blockquote>
  <figcaption><cite><a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-b-element" target="_blank" rel="noopener">HTML Living Standard</a></cite></figcaption>
</figure>

Mula sa definition nito sa official HTML standard, ginagamit dapat ang `<b>` element para sa mga salitang gusto nating mapansin kaagad ng mambabasa pero hindi mahalaga o urgent gaya ng sa `<strong>` element, at hindi rin kailangang magbago ang pagbabasa o pagbigkas gaya sa `<em>`.

Puwedeng gamitin ang `<b>` element para sa ilang mga kaso. Kasama rito ang mga product name sa isang user review o mga salitang kailangang tandaan ng isang player ng isang text adventure.

<figure class="image">
  <img src="https://ik.imagekit.io/antaresphdev/posts/i-em-strong-b/genshin-b-element.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1676178326564" alt="Screenshot from the game Genshin Impact, with the character Zakariya saying &ldquo;After that, keep boiling the soup on a high flame. In fact, I'd suggest a brief high flame first before leaving it on a low flame for a bit longer, until the soup deepens in color.&rdquo; The phrases &ldquo;high flame&rdquo;, &ldquo;low flame&rdquo;, and &ldquo;the soup deepens in color&rdquo; are all highlighted with blue text color.">
  <figcaption>
    <p>Puwedeng gamitin ang <code>&lt;b></code> element para i-markup ang mga salitang hindi urgent o hindi nangangailangan ng pagbabago sa tinig ng boses ng nagbabasa pero kailangang tandaan ng user. Sa screnshot na ito mula sa larong Genshin Impact, puwedeng gamitin ang <code>&lt;b></code> element para i-markup ang mga salitang naka-highlight.</p>
  </figcaption>
</figure>

Puwede ring gamitin ang `<b>` para i-markup ang mga <i lang="en">lede</i> o <i lang="en">lead</i> ng isang paragraph sa isang article. Kadalasan, hina-highlight ang unang sentence sa mga news article, at puwedeng gamitin dito ang `<b>` element.

<div class="code-sample">

```html
<article>
  <h2>Gregoria de Jesus Elementary School, wagi sa pambansang patimpalak sa radio broadcasting</h2>
  <p><b>Nagwagi ng tropeo at ₱ 50,000 ang grupo ng limang mag-aaral sa ilalim ng patnubay ni Gng. Jemimah Mendoza.</b> Naglabas ng opisyal na pahayag ang Gregoria de Jesus Elementary School na nagpapasalamat at bumabati sa mga magagaling na mag-aaral. Tumagal ang training ng mga estudyante nang limang buwan bilang paghahanda sa patimpalak kung saan kalaban nila ang sampung iba pang paaralang nagwagi sa semi-finals noong Hulyo.</p>
</article>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <article style="flex-direction: column; gap: var(--space-xxl); display: flex;">
      <h2 class="mb-xl">Gregoria de Jesus Elementary School, wagi sa pambansang patimpalak sa radio broadcasting</h2>
      <p><b>Nagwagi ng tropeo at ₱ 50,000 ang grupo ng limang mag-aaral sa ilalim ng patnubay ni Gng. Jemimah Mendoza.</b> Naglabas ng opisyal na pahayag ang Gregoria de Jesus Elementary School na nagpapasalamat at bumabati sa mga magagaling na mag-aaral. Tumagal ang training ng mga estudyante nang limang buwan bilang paghahanda sa patimpalak kung saan kalaban nila ang sampung iba pang paaralang nagwagi sa semi-finals noong Hulyo.</p>
    </article>
  </div>
</div>

</div>

Paano naman kung aesthetic choice lang ang pagbo-bold ng text? Paano kung wala naman talaga tayong gustong ikabit na meaning sa mga salita pero gusto natin itong naka-bold? Puwede tayong gumamit ng CSS. 

<div class="code-sample">

```html
<p><span class="bold">Bold text</span>. Regular text.</p>
```

```css
.bold {
  font-weight: bold;
}
```

<div class="code-result">
  <style>
    .bold {
      font-weight: bold;
      font-variation-settings: 'wght' 700;
    }   
  </style>
  <div class="code-result__embed" data-id="eg-1">
    <p><span class="bold">Bold text</span>. Regular text.</p>
  </div>
</div>

</div>

Ang totoo, puwede nating baguhin ang styling ng mga tags. Puwede nating gawing underlined ang `<strong>` sa halip na bold, o gawing iba ang kulay ng `<em>` sa halip na naka-italicized. Ang trabaho ng HTML ay magbigay ng semantic meaning sa text, hindi baguhin ang hitsura o styling nila.

## Underline

Bago ang HTML5, ginamit natin ang `<u>` para maglagay ng salungguhit o underline sa mga salita. Pero ngayon, hindi na ito ginagamit para lang maglagay ng underline. Sa katunayan, hindi na masyadong ginagamit ang `<u>` element. 

Sa HTML5, ginagamit na ang `<u>` element para sa mga non-textual annotation. Halimbawa nito ay ang mga pulang underline sa mga salitang mali ang ispeling. Kung gumagawa ka ng isang text editor web app, puwede mong balutin sa `<u>` element ang mga salitang mali ang ispeling. Puwede ring gamitin ang `<u>` element para sa [proper name mark](https://en.wikipedia.org/wiki/Proper_name_mark).<sup id="fn-1"><a href="#footnote-1">Footnote</a></sup>

<aside class="callout callout--info callout--right" id="footnote-1" aria-labelledby="footnote-1-headline">
  {{ 'alert-triangle' | icon }}
  <h4 class="sr-only" id="footnote-1-headline">Sidebar (article continues below)</h4>
  <p class="callout__body">Ang <dfn>proper name mark</dfn> ay isang uri ng punctuation mark sa Chinese na ginagamit para i-indicate sa mambabasa na ang salita ay pangalan ng tao, bagay, hayop, lugar, o pangyayari. Sa atin sa Filipino at English, katumbas ito ng capitalization sa mga tiyak na pangngalan. <sup class="footnote--reference"><a href="#fn-1">Paragraph</a></sup></p>
</aside>

Pero pansinin na baka kailangan mo ring i-customize ang styling ng `<u>` element para ipahiwatig ang dahilan kung bakit naka-underline ang isang salita. Sa mga text editor, karaniwan nang may pulang wavy underline ang mga salitang mali ang spelling, at asul naman ang mga salitang mali ang grammar. Para dito, kailangan mong gumamit ng CSS at mga classes.

<div class="code-sample">

```html
<p>This is a very big <u class="wrong-grammar">oceans</u>. We can get a lot of fish in this <u class="wrong-spelling">see</u>.</p>
```

```css
.wrong-grammar {
  text-decoration: underline 1px wavy blue;
}


.wrong-spelling {
  text-decoration: underline 1px wavy blue;
}
```

<div class="code-result">
  <style>
  .wrong-grammar {
    text-decoration: underline 1px wavy blue;
  }
  .wrong-spelling {
    text-decoration: underline 1px wavy red;
  }
  </style>
  <div class="code-result__embed" data-id="eg-1">
    <p>This is a very big <u class="wrong-grammar">oceans</u>. We can get a lot of fish in this <u class="wrong-spelling">see</u>.</p>
  </div>
</div>

</div>

## Iba pang markup

May iba pang mga tag na puwede mong gamitin para sa mga kasong hindi sakop ng mga tag na nabanggit na. 


### Definitions
Halimbawa, ginagamit ang `<dfn>` tag para ipahiwatig na nasa paragraph ang definition ng isang salita. Para gamitin ito, ilagay sa `<dfn>` ang salitang ide-define, at ipaliwanag ang kahulugan nito sa paragraph kung nasaan ang salitang iyon.

<div class="code-sample">

```html
<p>Ang <dfn>proper name mark</dfn> ay isang uri ng punctuation mark sa Chinese na ginagamit para i-indicate sa mambabasa na ang salita ay pangalan ng tao, bagay, hayop, lugar, o pangyayari. Sa atin sa Filipino at English, katumbas ito ng capitalization sa mga tiyak na pangngalan.</p>
```
<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Ang <dfn>proper name mark</dfn> ay isang uri ng punctuation mark sa Chinese na ginagamit para i-indicate sa mambabasa na ang salita ay pangalan ng tao, bagay, hayop, lugar, o pangyayari. Sa atin sa Filipino at English, katumbas ito ng capitalization sa mga tiyak na pangngalan.</p>
  </div>
</div>

</div>

### Highlight

Ginagamit naman ang `<mark>` para i-highlight ang isang part ng text na nire-reference sa iba pang bahagi ng page. Isang halimbawa nito ay mga coding tutorials. Sa mga tutorials, madalas na itinuturo ng author kung anong line ng code ang pinapaliwanag ng paragraph. Sa mga ganitong kaso, magandang gumamit ng `<mark>` para makita kaagad ng mambabasa kung anong part ng code ang tinutukoy ng tutorial.

<div class="code-sample">

```html
<p>Sa susunod na code example, ise-set natin ang <code>display</code> ng container para maging flex container ito. Pansinin na puwedeng baguhin ang direksyon ng flex items gamit ang <code>flex-direction</code> property.</p>

<pre><code>.container {
  display: flex;
  <mark>flex-direction: column;</mark>
  gap: 1rem;
}</code></pre>
```
<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>Sa susunod na code example, ise-set natin ang <code>display</code> ng container para maging flex container ito. Pansinin na puwedeng baguhin ang direksyon ng flex items gamit ang <code>flex-direction</code> property.</p>

<pre><code class="unstyled">.container {
  display: flex;
  <mark class="unstyled">flex-direction: column;</mark>
  gap: 1rem;
}</code></pre>
  </div>
</div>

</div>

Puwede ring gamitin ang `<mark>` para i-highlight ang occurences ng isang search query. Sa susunod na code sample, nag-search ang user ng salitang "kitten". Kuha ang example na ito sa HTML Living Standard.


<div class="code-sample">

```html
<p>I also have some <mark>kitten</mark>s who are visiting me
these days. They're really cute. I think they like my garden! Maybe I
should adopt a <mark>kitten</mark>.</p>
```

<div class="code-result">
  <div class="code-result__embed" data-id="eg-1">
    <p>I also have some <mark>kitten</mark>s who are visiting me these days. They're really cute. I think they like my garden! Maybe I should adopt a <mark>kitten</mark>.</p>
  </div>
</div>

</div>


## Ang halaga ng semantics

Sa totoo lang, hindi naman talaga natin kailangan ang HTML bilang tao. May kakayahan tayong alamin ang semantics ng mga binabasa natin depende sa context. Gumagamit lang tayo ng HTML dahil gusto nating maintindihan ng browser ang structure ng content natin para maayos itong mai-display sa viewport, malagyan ng styling gamit ang CSS, maka-extract ng data na kailangan ng mga assistive technologies, search engines, at mga kagaya nito. <strong>Hindi na natin dapat ginagamit ang HTML para lang baguhin ang styling ng content</strong>; trabaho iyan ng CSS.

Kapag sumusulat ng HTML markup, pag-isipan muna kung bakit isang specific ng tag ang gagamitin mo. Bakit ka gumagamit ng `<strong>`? Gusto mo lang bang gawing bold ang text, o talagang mahalaga o urgent ang content na ilalagay mo? Bago gumamit ng isang tag, tingnan muna kung may iba pang tag na mas angkop para sa gusto mong gawin, at kung purely aesthetic lang ang gusto mong mangyari, mas magandang gumamit ng `<span>` o `<div>` na may `class` attribute at i-style ito gamit ang CSS.