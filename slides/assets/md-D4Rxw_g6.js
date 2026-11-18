import{H as e,St as t,T as n,b as r,bt as i,k as a,tt as o,w as s,x as c,y as l}from"./modules/shiki-mCy7fDAa.js";import{at as u,ot as d}from"./index-BPBDlHgf.js";import{t as f}from"./default-Dy_E8dF7.js";import{t as p}from"./WordCloud-pWuGipIB.js";var m={__name:`slides.md__slidev_192`,setup(m){let{$slidev:h,$nav:g,$clicksContext:_,$clicks:v,$page:y,$renderContext:b,$frontmatter:x}=d();return _.setup(),(d,m)=>{let h=p;return e(),r(f,t(a(i(u)(i(x),191))),{default:o(()=>[m[1]||=l(`h1`,null,[s(`What do you `),l(`em`,null,`remember`),s(` from day 1?`)],-1),n(h,{class:`mt-12`},{default:o(()=>[...m[0]||=[s(` - Your idea? `,-1)]]),_:1}),c(`
Live-Brainstorming: Die Teilnehmenden nennen Begriffe aus Tag 1. Wir geben nichts vor.

Im Dev-Server (\`npm run dev\`) jede Nennung als eigene Zeile \`- …\` in die WordCloud eintragen und den Platzhalter „Your idea?“ beim ersten Eintrag löschen. Die Änderung nicht committen.

Danach zu einzelnen Begriffen nachfragen: „Was ist …? Erklärt es Schritt für Schritt.“

Begriffe, falls sie nicht genannt werden (als Nachfrage, nicht als Vorgabe), mit erwarteter Antwort:
- Autoregression: LLMs generieren Token für Token – jeder neue Token wird basierend auf allen vorherigen Tokens im Kontext berechnet. Das Modell „lernt“ dabei nicht, es setzt die Sequenz fort.
- Prompt: Die Eingabe an das LLM – Text, Anweisungen, Kontext, Beispiele.
- Tool: Eine Funktion oder Fähigkeit, die dem Agenten ermöglicht, mit seiner Umgebung zu interagieren – z. B. Dateien lesen/schreiben, Code ausführen, APIs aufrufen. Das LLM entscheidet, wann und wie ein Tool eingesetzt wird.
- Feedback Loop: Der Kreislauf, in dem ein Agent eine Aktion ausführt, das Ergebnis beobachtet und dann entscheidet, was als Nächstes zu tun ist. Agenten stoppen erst, wenn das Ziel erreicht ist oder sie feststecken.
- MCP: Model Context Protocol – ein ursprünglich von Anthropic entwickelter Standard, der beschreibt, wie Agenten Tools entdecken und aufrufen. Ermöglicht lokale und remote MCP-Server, die Tools bereitstellen (Datenbanken, IDEs, APIs usw.).
`)]),_:1},16)}}};export{m as default};